import React, { HTMLAttributes, useState, useCallback, useRef, useEffect } from 'react';
import composeRefs from '@seznam/compose-react-refs';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import clsx from 'clsx';
import createStyles from '@material-ui/core/styles/createStyles';
import { DrawerNavGroup, NavItem } from '../Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Menu, { MenuProps as standardMenuProps } from '@material-ui/core/Menu';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import useTheme from '@material-ui/core/styles/useTheme';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export type ToolbarMenuClasses = {
    root?: string;
    dropdownArrow?: string;
    icon?: string;
    label?: string;
    menuItem?: string;
};

export type ToolbarMenuCompItem = Omit<NavItem, 'itemID'> & { itemID?: string };
export type ToolbarMenuCompGroup = {
    /** The color used for the text */
    fontColor?: string;
    /** The color used for icons */
    iconColor?: string;
    /** List of navigation items to render */
    items: ToolbarMenuCompItem[];
    /** Text to display in the group header */
    title?: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
        },
        cursorPointer: {
            cursor: 'pointer',
        },
        dropdownArrow: {
            marginLeft: theme.spacing(0.5),
        },
        icon: {
            marginRight: `${theme.spacing(1)}px`,
            display: 'inline-flex',
            fontSize: 'inherit',
        },
        label: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
        navGroups: {
            '&:active, &:focus': {
                outline: 'none',
            },
        },
        rotateDropdownArrow: {
            transform: 'rotate(180deg)',
        },
    })
);

export type ToolbarMenuProps = HTMLAttributes<HTMLDivElement> & {
    /** The color used for the text elements
     *
     * Default: 'inherit'
     */
    color?: string;
    /** A component to render for the icon */
    icon?: JSX.Element;
    /** Label Content */
    label: string;
    /** Custom content to be displayed in the menu */
    menu?: JSX.Element;
    /** Groups of menu items to display */
    menuGroups?: ToolbarMenuCompGroup[];
    /** Property overrides for the MUI Menu */
    MenuProps?: Omit<standardMenuProps, 'open'>;
    /** Function called when the menu is opened */
    onOpen?: () => void;
    /** Function called when the menu is closed */
    onClose?: () => void;
    /** Custom classes for default style overrides */
    classes?: Partial<ToolbarMenuClasses>;
};

const ToolbarMenuRenderer: React.ForwardRefRenderFunction<unknown, ToolbarMenuProps> = (
    props: ToolbarMenuProps,
    ref: any
) => {
    const {
        classes = {},
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        color,
        icon,
        label,
        menuGroups,
        menu,
        MenuProps,
        onClose,
        onOpen,
        ...otherSpanProps
    } = props;
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
    const defaultClasses = useStyles(props);
    const [anchorEl, setAnchorEl] = useState(null);
    const anchor = useRef(null);

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
        if (menuGroups) {
            for (const group of menuGroups) {
                for (const item of group.items) {
                    const onClick = item.onClick;
                    if (onClick) {
                        item.onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
                            onClick(e);
                            closeMenu();
                        };
                    }
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
                        menuGroups.map((group: ToolbarMenuCompGroup, index: number) => (
                            <div className={defaultClasses.navGroups} key={index}>
                                <DrawerNavGroup
                                    divider={false}
                                    hidePadding={true}
                                    itemIconColor={group.iconColor}
                                    itemFontColor={group.fontColor}
                                    title={group.title}
                                    items={group.items.map(
                                        (item: ToolbarMenuCompItem, itemIndex: number): NavItem =>
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
            <Typography
                component={'span'}
                ref={composeRefs(ref, anchor)}
                aria-haspopup="true"
                className={clsx(
                    defaultClasses.root,
                    classes.root,
                    menuGroups || menu ? defaultClasses.cursorPointer : ''
                )}
                data-test={'wrapper'}
                {...otherSpanProps}
                onClick={(): void => {
                    openMenu(anchor.current);
                }}
            >
                {icon && (
                    <span className={clsx(defaultClasses.icon, classes.icon)} data-test={'icon'}>
                        {icon}
                    </span>
                )}
                <span className={clsx(defaultClasses.label, classes.label)} data-test={'label'}>
                    {label || ''}
                </span>
                {(menuGroups || menu) && (
                    <ArrowDropDown
                        data-test={'arrow-dropdown'}
                        className={clsx(
                            defaultClasses.dropdownArrow,
                            classes.dropdownArrow,
                            anchorEl ? defaultClasses.rotateDropdownArrow : ''
                        )}
                    />
                )}
            </Typography>
            {getMenu()}
        </>
    );
};
/**
 * [ToolbarMenu](https://brightlayer-ui-components.github.io/react/?path=/info/components-toolbar-menu--get-read-me-story) component
 *
 * The `ToolbarMenu` used to display a dropdown menu with label.
 */
export const ToolbarMenu = React.forwardRef(ToolbarMenuRenderer);
ToolbarMenu.displayName = 'ToolbarMenu';
ToolbarMenu.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        dropdownArrow: PropTypes.string,
        icon: PropTypes.string,
        label: PropTypes.string,
        menuItem: PropTypes.string,
    }),
    menu: PropTypes.element,
    label: PropTypes.string,
    icon: PropTypes.element,
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

ToolbarMenu.defaultProps = {
    classes: {},
    menuGroups: [],
    MenuProps: {},
    onClose: (): void => {},
    onOpen: (): void => {},
};
