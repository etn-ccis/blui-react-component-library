import React, { HTMLAttributes, ReactNode, useState, useCallback, useRef, useEffect } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import clsx from 'clsx';
import { DrawerNavGroup, NavItem } from '../Drawer';
import Menu, { MenuProps as standardMenuProps } from '@material-ui/core/Menu';
import { Typography, useTheme } from '@material-ui/core';

export type ToolbarMenuClasses = {
    root?: string;
    label?: string;
    dropdownArrow?: string;
    menuItem?: string;
};

export type ToolbarMenuItem1 = Omit<NavItem, 'itemID'> & { itemID?: string };
export type ToolbarMenuGroup1 = {
    /** The color used for the text */
    fontColor?: string;
    /** The color used for icons */
    iconColor?: string;
    /** List of navigation items to render */
    items: ToolbarMenuItem1[];
    /** Text to display in the group header */
    title?: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            cursor: 'pointer',
        },
        navGroups: {
            '&:active, &:focus': {
                outline: 'none',
            },
        },
        cursorPointer: {
            cursor: 'pointer',
        },
        dropdownArrow: {
            marginLeft: theme.spacing(0.5),
        },
        rotateDropdownArrow: {
            transform: 'rotate(180deg)',
        },
        label: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
    })
);

export type ToolbarMenuProps = HTMLAttributes<HTMLDivElement> & {
    /** Label Content */
    label: ReactNode;
    /** Custom content to be displayed in the menu */
    menu?: JSX.Element;
    /** Groups of menu items to display */
    menuGroups?: ToolbarMenuGroup1[];
    /** Property overrides for the MUI Menu */
    MenuProps?: Omit<standardMenuProps, 'open'>;
    /** Function called when the menu is opened */
    onOpen?: () => void;
    /** Function called when the menu is closed */
    onClose?: () => void;
    /** Custom classes for default style overrides */
    classes?: Partial<ToolbarMenuClasses>;
};

const ToolbarMenuRenderer: React.ForwardRefRenderFunction<unknown, ToolbarMenuProps> = (props: ToolbarMenuProps) => {
    const { label, classes = {}, menuGroups, menu, MenuProps, onClose, onOpen } = props;
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
                        menuGroups.map((group: ToolbarMenuGroup1, index: number) => (
                            <div className={defaultClasses.navGroups} key={index}>
                                <DrawerNavGroup
                                    divider={false}
                                    hidePadding={true}
                                    itemIconColor={group.iconColor}
                                    itemFontColor={group.fontColor}
                                    title={group.title}
                                    items={group.items.map(
                                        (item: ToolbarMenuItem1, itemIndex: number): NavItem =>
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
                ref={anchor}
                aria-haspopup="true"
                component={'span'}
                className={clsx(
                    defaultClasses.root,
                    classes.root,
                    menuGroups || menu ? defaultClasses.cursorPointer : ''
                )}
                onClick={(): void => {
                    openMenu(anchor.current);
                }}
            >
                <span className={clsx(defaultClasses.label, classes.label)}>{label || ''}</span>
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
