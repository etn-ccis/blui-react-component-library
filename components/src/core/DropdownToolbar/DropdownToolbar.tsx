import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
    Typography,
    Toolbar,
    ListItemText,
    Menu,
    ToolbarProps,
    createStyles,
    makeStyles,
    useTheme,
    Theme,
    MenuProps as standardMenuProps,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import clsx from 'clsx';
import { NavItem, DrawerNavGroup } from '../Drawer';
import PropTypes from 'prop-types';

export type ToolbarMenuItem = NavItem;
export type ToolbarMenuGroup = {
    fontColor?: string;
    iconColor?: string;
    items: ToolbarMenuItem[];
    title?: string;
};

export type DropdownToolbarProps = ToolbarProps & {
    title: string;
    subtitle?: string;
    navigationIcon?: JSX.Element;
    menu?: JSX.Element;
    menuGroups?: ToolbarMenuGroup[];
    classes?: DropdownToolbarClasses;
    MenuProps?: Omit<standardMenuProps, 'open'>;
    onOpen?: () => void;
    onClose?: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        navigation: {
            marginRight: theme.spacing(4),
            cursor: 'pointer',
        },
        navGroups: {
            '&:active, &:focus': {
                outline: 'none',
            },
        },
        textContent: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        },
        title: {
            lineHeight: 1,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
        subtitleContent: {
            display: 'flex',
            flexDirection: 'row',
            maxWidth: 'fit-content',
        },
        cursorPointer: {
            cursor: 'pointer',
        },
        subtitle: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        dropdownArrow: {
            marginLeft: theme.spacing(0.5),
        },
        rotateDropdownArrow: {
            transform: 'rotate(180deg)',
        },
    })
);

export type DropdownToolbarClasses = {
    root?: string;
    navigation?: string;
    textContent?: string;
    title?: string;
    subtitleContent?: string;
    subtitle?: string;
    dropdownArrow?: string;
    menuItem?: string;
};

export const DropdownToolbar: React.FC<DropdownToolbarProps> = (props) => {
    const {
        title,
        subtitle,
        menuGroups,
        navigationIcon,
        menu,
        MenuProps,
        onClose,
        onOpen,
        classes = {},
        ...toolbarProps
    } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const anchor = useRef(null);
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
    const defaultClasses = useStyles(theme);
    const getNavigationIcon = useCallback(() => {
        if (navigationIcon) {
            return <div className={clsx(defaultClasses.navigation, classes.navigation)}>{navigationIcon}</div>;
        }
    }, [navigationIcon]);

    const closeMenu = useCallback(() => {
        if (onClose) {
            onClose();
        }
        setAnchorEl(null);
    }, [onClose]);

    const openMenu = useCallback(
        (event: MouseEvent) => {
            if (onOpen) {
                onOpen();
            }
            setAnchorEl(event);
        },
        [onOpen]
    );

    useEffect(() => {
        for (const group of menuGroups) {
            for (const item of group.items) {
                const onClick = item.onClick;
                if (onClick) {
                    item.onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
                        onClick(e);
                        closeMenu();
                    };
                }
            }
        }
    }, [menuGroups]);

    const getMenu = useCallback(() => {
        if (menu && Boolean(anchorEl)) {
            return React.cloneElement(menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: closeMenu,
                ...menu.props,
            });
        }
        if (menuGroups && Boolean(anchorEl)) {
            return (
                <Menu
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: 'bottom', horizontal: rtl ? 'right' : 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: rtl ? 'right' : 'left' }}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={(): void => closeMenu()}
                    {...MenuProps}
                    MenuListProps={{ style: { padding: 0 } }}
                >
                    {!menu &&
                        menuGroups.map((group: ToolbarMenuGroup, index: number) => (
                            <div className={defaultClasses.navGroups} key={index}>
                                <DrawerNavGroup
                                    divider={false}
                                    drawerOpen={true}
                                    hidePadding={true}
                                    itemIconColor={group.iconColor}
                                    itemFontColor={group.fontColor}
                                    title={group.title}
                                    items={group.items.map(
                                        (item: ToolbarMenuItem, itemIndex: number): NavItem =>
                                            Object.assign({ itemID: itemIndex.toString() }, item)
                                    )}
                                />
                            </div>
                        ))}
                </Menu>
            );
        }
    }, [menuGroups, menu, anchorEl, MenuProps, defaultClasses]);

    return (
        <>
            <Toolbar className={clsx(defaultClasses.root, classes.root)} style={toolbarProps.style}>
                {getNavigationIcon()}
                <ListItemText
                    className={clsx(defaultClasses.textContent, classes.textContent)}
                    primary={
                        <Typography variant="h6" className={clsx(defaultClasses.title, classes.title)}>
                            {title}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            ref={anchor}
                            aria-haspopup="true"
                            component={'div'}
                            onClick={(): void => {
                                openMenu(anchor.current);
                            }}
                            className={clsx(
                                defaultClasses.subtitleContent,
                                classes.subtitleContent,
                                menuGroups || menu ? defaultClasses.cursorPointer : ''
                            )}
                        >
                            <span className={clsx(defaultClasses.subtitle, classes.subtitle)}>{subtitle || ''}</span>
                            {(menuGroups || menu) && (
                                <ArrowDropDown
                                    className={clsx(
                                        defaultClasses.dropdownArrow,
                                        classes.dropdownArrow,
                                        anchorEl ? defaultClasses.rotateDropdownArrow : ''
                                    )}
                                />
                            )}
                        </Typography>
                    }
                />
                {props.children}
            </Toolbar>
            {getMenu()}
        </>
    );
};

DropdownToolbar.displayName = 'DropdownToolbar';

DropdownToolbar.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    menu: PropTypes.element,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    // @ts-ignore
    menuGroups: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            fontColor: PropTypes.string,
            iconColor: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    icon: PropTypes.element,
                    onClick: PropTypes.func,
                    statusColor: PropTypes.string,
                    subtitle: PropTypes.string,
                    title: PropTypes.string,
                    divider: PropTypes.bool,
                })
            ),
        })
    ),
    MenuProps: PropTypes.object,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
};

DropdownToolbar.defaultProps = {
    classes: {},
    menuGroups: [],
    MenuProps: {},
    onClose: (): void => {},
    onOpen: (): void => {},
};
