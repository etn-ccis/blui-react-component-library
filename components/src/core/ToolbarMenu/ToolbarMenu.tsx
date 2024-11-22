import React, { useCallback, useEffect, useRef, useState } from 'react';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { cx } from '@emotion/css';
import { useTheme, styled } from '@mui/material/styles';
import composeRefs from '@seznam/compose-react-refs';
import { DrawerNavGroup, NavItem } from '../Drawer';
import Menu, { MenuProps as standardMenuProps } from '@mui/material/Menu';
import PropTypes from 'prop-types';
import { Box, unstable_composeClasses as composeClasses } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';
import toolbarMenuClasses, {
    ToolbarMenuClasses,
    ToolbarMenuClassKey,
    getToolbarMenuUtilityClass,
} from './ToolbarMenuClasses';

const useUtilityClasses = (ownerState: ToolbarMenuProps): Record<ToolbarMenuClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        dropdownArrow: ['dropdownArrow'],
        icon: ['icon'],
        label: ['label'],
        cursorPointer: ['cursorPointer'],
        navGroups: ['navGroups'],
        rotatedDropdownArrow: ['rotatedDropdownArrow'],
    };

    return composeClasses(slots, getToolbarMenuUtilityClass, classes);
};

export type ToolbarMenuCompItem = Omit<NavItem, 'itemID'> & { itemID?: string };
export type ToolbarMenuItem = ToolbarMenuCompItem;

export type ToolbarMenuCompGroup = {
    /** The color used for the text */
    fontColor?: string;
    /** The color used for icons */
    iconColor?: string;
    /** List of navigation items to render */
    items: ToolbarMenuItem[];
    /** Text to display in the group header */
    title?: string;
};

const Root = styled(
    Typography,
    {}
)(() => ({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 'fit-content',
    [`&.${toolbarMenuClasses.cursorPointer}`]: { cursor: 'pointer ' },
}));

const DropDownArrow = styled(
    ArrowDropDown,
    {}
)(({ theme }) => ({
    marginLeft: theme.spacing(0.5),
    [`&.${toolbarMenuClasses.rotatedDropdownArrow}`]: { transform: 'rotate(180deg)' },
}));

const ToolbarMenuIcon = styled(
    Box,
    {}
)(({ theme }) => ({
    marginRight: theme.spacing(1),
    display: 'inline-flex',
    fontSize: 'inherit',
}));

const ToolbarMenuLabel = styled(
    Box,
    {}
)(() => ({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
}));

const ToolbarMenuNavGroups = styled(
    Box,
    {}
)(() => ({
    '&:active, &:focus': {
        outline: 'none',
    },
}));

export type ToolbarMenuProps = Omit<TypographyProps, 'onClick'> & {
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
        icon,
        label,
        menu,
        menuGroups,
        MenuProps,
        onClose,
        onOpen,
        className: userClassName,
        ...otherTypographyProps
    } = props;
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
    const generatedClasses = useUtilityClasses(props);
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
                        item.onClick = (e: React.MouseEvent<HTMLElement>): void => {
                            onClick(e);
                            closeMenu();
                        };
                    }
                }
            }
        }
    }, [closeMenu, menuGroups]);

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
                            <ToolbarMenuNavGroups className={generatedClasses.navGroups} key={index}>
                                <DrawerNavGroup
                                    divider={false}
                                    hidePadding={true}
                                    itemIconColor={group.iconColor}
                                    itemFontColor={group.fontColor}
                                    title={group.title}
                                    items={group.items.map(
                                        (item: ToolbarMenuItem, itemIndex: number): NavItem =>
                                            Object.assign({ itemID: itemIndex.toString() }, item)
                                    )}
                                />
                            </ToolbarMenuNavGroups>
                        ))}
                </Menu>
            );
        }
    }, [closeMenu, menuGroups, menu, anchorEl, MenuProps, generatedClasses, rtl]);

    return (
        <>
            <Root
                ref={composeRefs(ref, anchor)}
                aria-haspopup="true"
                {...otherTypographyProps}
                className={cx(
                    generatedClasses.root,
                    userClassName,
                    menuGroups || menu ? generatedClasses.cursorPointer : ''
                )}
                data-testid={'blui-menu-root'}
                onClick={(): void => {
                    openMenu(anchor.current);
                }}
            >
                {icon && (
                    <ToolbarMenuIcon
                        as={'span'}
                        className={generatedClasses.icon}
                        data-testid={'blui-toolbar-menu-icon'}
                    >
                        {icon}
                    </ToolbarMenuIcon>
                )}
                <ToolbarMenuLabel
                    as={'span'}
                    className={generatedClasses.label}
                    data-testid={'blui-toolbar-menu-label'}
                >
                    {label || ''}
                </ToolbarMenuLabel>
                {(menuGroups || menu) && (
                    <DropDownArrow
                        data-testid={'blui-arrow-dropdown'}
                        className={cx(
                            generatedClasses.dropdownArrow,
                            anchorEl ? generatedClasses.rotatedDropdownArrow : ''
                        )}
                    />
                )}
            </Root>
            {getMenu()}
        </>
    );
};
/**
 * [ToolbarMenu](https://brightlayer-ui-components.github.io/react/components/toolbar-menu) component
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
