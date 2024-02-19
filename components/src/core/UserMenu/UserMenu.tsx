import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import React, { useCallback, useState, useEffect } from 'react';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import Menu, { MenuProps as standardMenuProps } from '@mui/material/Menu';
import { cx } from '@emotion/css';
import PropTypes from 'prop-types';
import { DrawerHeader, DrawerNavGroup, NavItem } from '../Drawer';
import Box, { BoxProps } from '@mui/material/Box';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import userMenuClasses, { UserMenuClasses, UserMenuClassKey, getUserMenuUtilityClass } from './UserMenuClasses';

const useUtilityClasses = (ownerState: UserMenuProps): Record<UserMenuClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        avatarRoot: ['avatarRoot'],
        header: ['header'],
        headerRoot: ['headerRoot'],
        menuTitle: ['menuTitle'],
        navigation: ['navigation'],
        navGroups: ['navGroups'],
        noCursor: ['noCursor'],
        bottomSheet: ['bottomSheet'],
    };

    return composeClasses(slots, getUserMenuUtilityClass, classes);
};

// make itemID optional so that no legacy code is broken
export type UserMenuItem = Omit<NavItem, 'itemID'> & { itemID?: string };
export type UserMenuGroup = {
    fontColor?: string;
    iconColor?: string;
    items: UserMenuItem[];
    title?: string;
};

const Root = styled(
    Box,
    {}
)(() => ({
    [`& .${userMenuClasses.avatarRoot}`]: {
        cursor: 'pointer',
        height: `2.5rem`,
        width: `2.5rem`,
    },
}));

const Header = styled(
    Box,
    {}
)(() => ({
    '&:active, &:focus': {
        outline: 'none',
    },
    [`& .${userMenuClasses.headerRoot}`]: {
        minHeight: '4rem',
    },
    [`& .${userMenuClasses.menuTitle}`]: {
        fontSize: '1rem',
        lineHeight: 1.4,
    },
    [`& .${userMenuClasses.navigation}`]: {
        alignSelf: 'center',
    },
    [`& .${userMenuClasses.noCursor}`]: {
        cursor: 'inherit',
    },
}));

const UserMenuNavGroups = styled(
    Box,
    {}
)(() => ({
    '&:active, &:focus': {
        outline: 'none',
    },
}));

const DrawerBottomSheet = styled(
    Drawer,
    {}
)(({ theme }) => ({
    [`& .${userMenuClasses.bottomSheet}`]: {
        width: '100%',
        maxWidth: theme.breakpoints.values.sm,
        margin: 'auto',
        userSelect: 'none',
    },
}));

export type UserMenuProps = BoxProps & {
    /** MUI Avatar component to display as the menu trigger */
    avatar: JSX.Element;
    /** Custom classes for default style overrides */
    classes?: UserMenuClasses;
    /** Custom MUI Menu displayed when Avatar is clicked */
    menu?: JSX.Element;
    /** Groups of menu items that display */
    menuGroups?: UserMenuGroup[];
    /** Property overrides for the MUI Menu */
    MenuProps?: Omit<standardMenuProps, 'open'>;
    /** Subtitle shown when menu is open */
    menuSubtitle?: string;
    /** Title shown when menu is open  */
    menuTitle?: string;
    /** Window pixel width at which the responsive bottom sheet menu is triggered (set to 0 to disable responsive behavior)
     *
     * Default: theme.breakpoints.values.sm
     */
    useBottomSheetAt?: number;
    BottomSheetProps?: DrawerProps;
    /** Function called when the menu is closed  */
    onClose?: () => void;
    /** Function called when the menu is opened */
    onOpen?: () => void;
};

const UserMenuRender: React.ForwardRefRenderFunction<unknown, UserMenuProps> = (props: UserMenuProps, ref: any) => {
    const theme = useTheme();
    const {
        avatar,
        classes,
        menu,
        menuGroups,
        MenuProps,
        menuSubtitle,
        menuTitle,
        useBottomSheetAt = theme.breakpoints.values.sm,
        BottomSheetProps,
        onClose,
        onOpen,
        ...otherProps
    } = props;
    const defaultClasses = useUtilityClasses(props);
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
                    item.onClick = (e: React.MouseEvent<HTMLElement>): void => {
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
                ...aProps,
                onClick: preserveOnClick ? onClickFn : undefined,
                classes: {
                    ...aProps.classes,
                    root: cx(
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
                <Header className={defaultClasses.header} key={'header'}>
                    <DrawerHeader
                        icon={nonClickableAvatar}
                        title={menuTitle}
                        subtitle={menuSubtitle}
                        fontColor={'inherit'}
                        backgroundColor={'inherit'}
                        divider
                        classes={{
                            root: defaultClasses.headerRoot,
                            title: defaultClasses.menuTitle,
                            navigation: defaultClasses.navigation,
                        }}
                    />
                </Header>
            );
        }
    }, [menuTitle, menuSubtitle, avatar]);

    /* DrawerNavGroup needs wrapped with key div to avoid ref warning on FC. */
    const printMenuItems = useCallback(
        (): JSX.Element[] =>
            menuGroups.map((group: UserMenuGroup, index: number) => (
                <UserMenuNavGroups className={defaultClasses.navGroups} key={index}>
                    <DrawerNavGroup
                        divider={false}
                        itemIconColor={group.iconColor}
                        itemFontColor={group.fontColor}
                        title={group.title}
                        items={group.items.map(
                            (item: UserMenuItem, itemIndex: number): NavItem =>
                                Object.assign({ itemID: itemIndex.toString() }, item, {
                                    InfoListItemProps: Object.assign(
                                        {
                                            iconColor:
                                                item.itemIconColor || group.iconColor || theme.palette.text.secondary,
                                        },
                                        item.InfoListItemProps
                                    ),
                                })
                        )}
                    />
                </UserMenuNavGroups>
            )),
        [menuGroups, defaultClasses]
    );

    const printMenu = useCallback(
        (): JSX.Element[] => [printHeader()].concat(printMenuItems()),
        [printHeader, printMenuItems]
    );

    const formatMenu = useCallback((): JSX.Element => {
        const showBottomSheet = useMediaQuery(`(max-width:${useBottomSheetAt}px)`);

        /* If the user provides a menu, provide default props. */
        if (menu) {
            return React.cloneElement(menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: closeMenu,
                ...menu.props,
            });
        }
        return showBottomSheet ? (
            <DrawerBottomSheet
                data-cy="bottom-sheet"
                anchor={'bottom'}
                transitionDuration={theme.transitions.duration.short}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                disablePortal
                classes={{ paper: cx(defaultClasses.bottomSheet, classes.bottomSheet) }}
                {...BottomSheetProps}
            >
                {printMenu()}
            </DrawerBottomSheet>
        ) : (
            <Menu
                disablePortal
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={closeMenu}
                {...MenuProps}
                MenuListProps={{ style: { padding: 0 } }}
            >
                {printMenu()}
            </Menu>
        );
    }, [menu, anchorEl, closeMenu, MenuProps, printMenu, useBottomSheetAt, BottomSheetProps]);

    return (
        <Root ref={ref} className={cx(defaultClasses.root)} {...otherProps}>
            {formatAvatar(true)}
            {canDisplayMenu() && formatMenu()}
        </Root>
    );
};
/**
 * [UserMenu](https://brightlayer-ui-components.github.io/react/components/user-menu) component
 *
 * The `<UserMenu>` is an Avatar that opens a Menu when clicked. It is typically used in the top-right corner of an application and indicates who is logged in. By default, the Menu will responsively transition to a bottom sheet for mobile views (if passing in a custom menu, you will be responsible for handling any responsiveness on your content). Setting the `useBottomSheetAt` prop to zero will disable the responsiveness.
 */
export const UserMenu = React.forwardRef(UserMenuRender);

UserMenu.displayName = 'UserMenu';

UserMenu.propTypes = {
    avatar: PropTypes.element.isRequired,
    classes: PropTypes.shape({
        root: PropTypes.string,
        bottomSheet: PropTypes.string,
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
    useBottomSheetAt: PropTypes.number,
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
