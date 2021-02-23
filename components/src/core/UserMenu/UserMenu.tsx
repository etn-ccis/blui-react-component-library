import { Menu, MenuProps as standardMenuProps, useTheme } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useCallback, useState, useEffect, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { DrawerHeader, DrawerNavGroup, NavItem } from '../Drawer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        navGroups: {
            '&:active, &:focus': {
                outline: 'none',
            },
        },
        header: {
            '&:active, &:focus': {
                outline: 'none',
            },
        },
        avatarRoot: {
            cursor: 'pointer',
            height: theme.spacing(5),
            width: theme.spacing(5),
        },
        noCursor: {
            cursor: 'inherit',
        },
        margins: {
            marginLeft: -theme.spacing(1),
            marginRight: -theme.spacing(1),
        },
    })
);

export type UserMenuClasses = {
    root?: string;
};

// make itemID optional so that no legacy code is broken
export type UserMenuItem = Omit<NavItem, 'itemID'> & { itemID?: string };
export type UserMenuGroup = {
    fontColor?: string;
    iconColor?: string;
    items: UserMenuItem[];
    title?: string;
};

export type UserMenuProps = HTMLAttributes<HTMLDivElement> & {
    avatar: JSX.Element;
    classes?: UserMenuClasses;
    menu?: JSX.Element;
    menuGroups?: UserMenuGroup[];
    MenuProps?: Omit<standardMenuProps, 'open'>;
    menuSubtitle?: string;
    menuTitle?: string;
    onClose?: () => void;
    onOpen?: () => void;
};

const UserMenuRender: React.ForwardRefRenderFunction<unknown, UserMenuProps> = (props: UserMenuProps, ref: any) => {
    const {
        avatar,
        classes,
        menu,
        menuGroups,
        MenuProps,
        menuSubtitle,
        menuTitle,
        onClose,
        onOpen,
        ...otherDivProps
    } = props;
    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    const [anchorEl, setAnchorEl] = useState(null);

    const closeMenu = useCallback(() => {
        onClose();
        setAnchorEl(null);
    }, [onClose]);

    // Add closeMenu function to each item that has an onClick function.
    useEffect(() => {
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
    }, [menuGroups]);

    const canDisplayMenu = useCallback(() => Boolean(menu || menuGroups.length > 0), [menu, menuGroups]);

    const openMenu = useCallback(
        (event: MouseEvent) => {
            onOpen();
            setAnchorEl(event.currentTarget);
        },
        [onOpen]
    );

    /* Clones Avatar that user provides UserMenu & appends a click event so it opens the menu. */
    const formatAvatar = useCallback(
        (preserveOnClick: boolean): JSX.Element => {
            /* If user passed in onClick function as a prop to Avatar, keep it. */
            const onClickFn = (event: MouseEvent): void => {
                openMenu(event);
                if (avatar.props && avatar.props.onClick) {
                    avatar.props.onClick(event);
                }
            };

            const aProps = avatar.props || {};

            return React.cloneElement(avatar, {
                onClick: preserveOnClick ? onClickFn : undefined,
                ...aProps,
                classes: {
                    ...aProps.classes,
                    root: clsx(
                        defaultClasses.avatarRoot,
                        preserveOnClick ? '' : defaultClasses.noCursor,
                        aProps?.classes?.root
                    ),
                },
            });
        },
        [avatar, onOpen, defaultClasses, classes]
    );

    /* DrawerHeader needs wrapped with key div to avoid ref warning on FC. */
    const printHeader = useCallback((): JSX.Element | undefined => {
        if (menuTitle) {
            const nonClickableAvatar = formatAvatar(false);
            return (
                <div className={defaultClasses.header} key={'header'}>
                    <DrawerHeader
                        icon={nonClickableAvatar}
                        title={menuTitle}
                        subtitle={menuSubtitle}
                        fontColor={'inherit'}
                        backgroundColor={'inherit'}
                        classes={{
                            nonClickableIcon: defaultClasses.margins,
                        }}
                    />
                </div>
            );
        }
    }, [menuTitle, menuSubtitle, avatar]);

    /* DrawerNavGroup needs wrapped with key div to avoid ref warning on FC. */
    const printMenuItems = useCallback(
        (): JSX.Element[] =>
            menuGroups.map((group: UserMenuGroup, index: number) => (
                <div className={defaultClasses.navGroups} key={index}>
                    <DrawerNavGroup
                        divider={false}
                        itemIconColor={group.iconColor}
                        itemFontColor={group.fontColor}
                        title={group.title}
                        items={group.items.map(
                            (item: UserMenuItem, itemIndex: number): NavItem =>
                                Object.assign({ itemID: itemIndex.toString() }, item)
                        )}
                    />
                </div>
            )),
        [menuGroups, defaultClasses]
    );

    const printMenu = useCallback((): JSX.Element[] => [printHeader()].concat(printMenuItems()), [
        printHeader,
        printMenuItems,
    ]);

    const formatMenu = useCallback((): JSX.Element => {
        /* If the user provides a menu, provide default props. */
        if (menu) {
            return React.cloneElement(menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: closeMenu,
                ...menu.props,
            });
        }
        return (
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={closeMenu}
                getContentAnchorEl={null}
                {...MenuProps}
                MenuListProps={{ style: { padding: 0 } }}
            >
                {printMenu()}
            </Menu>
        );
    }, [menu, anchorEl, closeMenu, MenuProps, printMenu]);

    return (
        <div ref={ref} className={clsx(defaultClasses.root, classes.root)} {...otherDivProps}>
            {formatAvatar(true)}
            {canDisplayMenu() && formatMenu()}
        </div>
    );
};

export const UserMenu = React.forwardRef(UserMenuRender);

UserMenu.displayName = 'UserMenu';

UserMenu.propTypes = {
    avatar: PropTypes.element.isRequired,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    menu: PropTypes.element,
    menuTitle: PropTypes.string,
    menuSubtitle: PropTypes.string,
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

UserMenu.defaultProps = {
    classes: {},
    menuGroups: [],
    MenuProps: {},
    onClose: (): void => {},
    onOpen: (): void => {},
};
