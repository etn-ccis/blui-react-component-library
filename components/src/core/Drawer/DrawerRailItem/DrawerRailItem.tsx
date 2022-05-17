import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDrawerContext } from '../DrawerContext';
import Avatar from '@mui/material/Avatar';
import ButtonBase, { ButtonBaseProps as MuiButtonBaseProps } from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { RAIL_WIDTH, RAIL_WIDTH_CONDENSED } from '../Drawer';
import { SharedStyleProps, SharedStylePropTypes } from '../types';
import { NavItem } from '../DrawerNavItem';
import color from 'color';
import clsx from 'clsx';
import { cx } from '@emotion/css';
import drawerRailItemClasses, {
    DrawerRailItemClasses,
    DrawerRailItemClassKey,
    getDrawerRailItemUtilityClass,
} from './DrawerRailItemClasses';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { styled, SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const useUtilityClasses = (ownerState: DrawerRailItemProps): Record<DrawerRailItemClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        active: ['active'],
        condensed: ['condensed'],
        divider: ['divider'],
        icon: ['icon'],
        statusStripe: ['statusStripe'],
        title: ['title'],
        titleActive: ['titleActive'],
        ripple: ['ripple'],
        cursorPointer: ['cursorPointer'],
        itemActive: ['itemActive'],
    };

    return composeClasses(slots, getDrawerRailItemUtilityClass, classes);
};

export type ExtendedNavItem = NavItem & { ButtonBaseProps?: Partial<MuiButtonBaseProps> };
export type DrawerRailItemProps = SharedStyleProps & {
    /** Custom classes for default style overrides */
    classes?: DrawerRailItemClasses;

    /** Enables a condensed view for the `rail` variant which removes NavItem labels and shows tooltips instead
     *
     * Default: false
     *
     * This is managed automatically when using the `<DrawerRailItem>` inside of a `<DrawerNavGroup>`
     */
    condensed?: boolean;

    /** Sets whether to hide the rail item */
    hidden?: boolean;

    /** A component to render for the left icon */
    icon: JSX.Element;

    /** An unique identifier of the NavItem. Item will have 'active' style when this matches activeItem
     *
     * Should be unique within the entire list. Will be used as the list key too.
     */
    itemID: string;

    /** A function to execute when clicked */
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;

    /** Status stripe and icon color */
    statusColor?: string;

    /** The text to show on the first line */
    title?: string;

    /** Used to override [ButtonBase](https://material-ui.com/api/button-base/) default props */
    ButtonBaseProps?: Partial<MuiButtonBaseProps>;

    /** Sets whether to disable the tooltip on hover */
    disableRailTooltip?: boolean;

    /** Optional sx props to apply style overrides */
    sx?: SxProps<Theme>;
};

const Root = styled(ButtonBase, {
    name: 'drawer-rail-item',
    slot: 'root',
    shouldForwardProp: (prop) =>
        prop !== 'backgroundColor' &&
        prop !== 'activeItemIconColor' &&
        prop !== 'activeItemFontColor' &&
        prop !== 'statusColor',
})<
    Pick<
        DrawerRailItemProps,
        'statusColor' | 'backgroundColor' | 'onClick' | 'activeItemIconColor' | 'activeItemFontColor'
    >
>(({ statusColor, backgroundColor, onClick, activeItemIconColor, activeItemFontColor, theme }) => {
    const lightenedPrimary = color(
        theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .lighten(0.83)
        .desaturate(0.39)
        .string();
    return {
        width: RAIL_WIDTH,
        minHeight: RAIL_WIDTH,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'default',
        padding: `1rem ${statusColor ? theme.spacing(1) : theme.spacing(0.5)}px`,
        textAlign: 'center',
        backgroundColor: backgroundColor || 'transparent',
        '&:hover': {
            backgroundColor: onClick ? theme.palette.action.hover : undefined,
        },
        [`& .${drawerRailItemClasses.cursorPointer}`]: {
            cursor: 'pointer',
        },
        [`& .${drawerRailItemClasses.itemActive}`]: {
            '& $icon': {
                color:
                    activeItemIconColor ||
                    (theme.palette.mode === 'light' ? theme.palette.primary.main : lightenedPrimary),
            },
            '& $title': {
                color:
                    activeItemFontColor ||
                    (theme.palette.mode === 'light' ? theme.palette.primary.main : lightenedPrimary),
            },
        },
        [`& .${drawerRailItemClasses.condensed}`]: {
            width: RAIL_WIDTH_CONDENSED,
            minHeight: RAIL_WIDTH_CONDENSED,
        },
        [`& .${drawerRailItemClasses.ripple}`]: {
            backgroundColor: theme.palette.primary.main,
        },
    };
});

const ActiveItem = styled(Box, {
    name: 'drawer-rail-item',
    slot: 'active',
})<Pick<DrawerRailItemProps, 'activeItemBackgroundColor'>>(({ activeItemBackgroundColor, theme }) => {
    const fivePercentOpacityPrimary = color(
        theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .fade(0.95)
        .string();
    const twentyPercentOpacityPrimary = color(
        theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .fade(0.8)
        .string();

    return {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:
            activeItemBackgroundColor ||
            (theme.palette.mode === 'light' ? fivePercentOpacityPrimary : twentyPercentOpacityPrimary),
    };
});

const StatusStripe = styled(Box, {
    name: 'drawer-rail-item',
    slot: 'statusStripe',
    shouldForwardProp: (prop) => prop !== 'statusColor',
})<Pick<DrawerRailItemProps, 'statusColor'>>(({ statusColor }) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 6,
    zIndex: 100,
    backgroundColor: statusColor,
}));

const Icon = styled(Avatar, {
    name: 'drawer-rail-item',
    slot: 'icon',
    shouldForwardProp: (prop) => prop !== 'itemIconColor',
})<Pick<DrawerRailItemProps, 'itemIconColor'>>(({ itemIconColor, theme }) => ({
    color: itemIconColor || theme.palette.text.primary,
    backgroundColor: 'transparent',
    height: 'auto',
    width: 'auto',
    overflow: 'visible',
}));

const Title = styled(Typography, {
    name: 'drawer-rail-item',
    slot: 'title',
    shouldForwardProp: (prop) => prop !== 'itemFontColor',
})<Pick<DrawerRailItemProps, 'itemFontColor'>>(({ itemFontColor, theme }) => ({
    lineHeight: '1rem',
    wordBreak: 'break-word',
    hyphens: 'auto',
    zIndex: 200,
    color: itemFontColor || theme.palette.text.primary,
    [`& .${drawerRailItemClasses.titleActive}`]: {
        fontWeight: 600,
    },
}));

const DrawerRailItemDivider = styled(Divider, {
    name: 'drawer-rail-item',
    slot: 'divider',
})(() => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
}));

const DrawerRailItemRender: React.ForwardRefRenderFunction<unknown, DrawerRailItemProps> = (
    props: DrawerRailItemProps,
    ref: any
) => {
    const {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        activeItemBackgroundColor,
        activeItemFontColor,
        activeItemIconColor,
        backgroundColor,
        itemFontColor,
        itemIconColor,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        divider,
        ripple = true,
        classes = {},
        condensed: itemCondensed,
        hidden,
        icon,
        itemID,
        onClick,
        sx,
        // onItemSelect,
        title = '',
        ButtonBaseProps,
        statusColor,
        disableRailTooltip,
        ...directButtonBaseProps
    } = props;

    const { activeItem, onItemSelect, condensed: drawerCondensed = false } = useDrawerContext();
    const active = activeItem === itemID;
    const condensed = itemCondensed !== undefined ? itemCondensed : drawerCondensed;
    const defaultClasses = useUtilityClasses(props);
    const hasAction = Boolean(onClick || onItemSelect);

    // Customize the color of the Touch Ripple
    const RippleProps =
        ripple && hasAction
            ? {
                  TouchRippleProps: {
                      classes: {
                          child: cx(defaultClasses.ripple, classes.ripple),
                      },
                  },
              }
            : {};

    const combine = useCallback(
        (className: keyof DrawerRailItemClasses): string => cx(defaultClasses[className], classes[className]),
        [defaultClasses, classes]
    );

    const getIcon = useCallback((): JSX.Element | undefined => {
        if (icon) {
            return (
                <Icon className={combine('icon')} itemIconColor={itemIconColor}>
                    {icon}
                </Icon>
            );
        }
    }, [icon, combine]);

    const onClickAction = useCallback(
        (e: React.MouseEvent<HTMLElement>): void => {
            if (onItemSelect) {
                onItemSelect(itemID);
            }
            if (onClick) {
                onClick(e);
            }
        },
        [onItemSelect, onClick, itemID]
    );

    const innerContent = (
        <Root
            ref={ref}
            {...ButtonBaseProps}
            {...directButtonBaseProps}
            className={clsx(defaultClasses.root, classes.root, {
                [defaultClasses.cursorPointer]: hasAction,
                [defaultClasses.itemActive]: active,
                [defaultClasses.condensed]: condensed,
                [classes.condensed]: condensed && classes.condensed,
            })}
            statusColor={statusColor}
            backgroundColor={backgroundColor}
            activeItemIconColor={activeItemIconColor}
            activeItemFontColor={activeItemFontColor}
            disableRipple={!ripple || !hasAction}
            onClick={onClickAction}
            sx={sx}
            {...RippleProps}
        >
            {/* Active Item Highlight */}
            {active && (
                <ActiveItem className={combine('active')} activeItemBackgroundColor={activeItemBackgroundColor} />
            )}
            {/* Status Color Stripe */}
            {statusColor !== undefined && statusColor !== '' && (
                <StatusStripe
                    className={combine('statusStripe')}
                    data-test={'status-stripe'}
                    statusColor={statusColor}
                />
            )}
            {/* Icon */}
            {getIcon()}
            {/* Title */}
            {!condensed && (
                <Title
                    variant={'caption'}
                    className={clsx(defaultClasses.title, classes.title, {
                        [defaultClasses.titleActive]: active,
                        [classes.titleActive]: active && classes.titleActive,
                    })}
                    itemFontColor={itemFontColor}
                >
                    {title}
                </Title>
            )}
            {/* Divider */}
            {divider && <DrawerRailItemDivider className={combine('divider')} />}
        </Root>
    );

    return hidden ? null : condensed && !disableRailTooltip ? (
        <Tooltip title={title} placement="right">
            {innerContent}
        </Tooltip>
    ) : (
        innerContent
    );
};
/**
 * [DrawerRailItem](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) component
 *
 * The `<DrawerRailItem>` is a simplified version of the `<DrawerNavItem>` that renders the `icon` and `title` only. When using the `condensed` version of the `<Drawer>`, the `title` will also be hidden. The `<DrawerRailItem>` cannot be nested.
 */
export const DrawerRailItem = React.forwardRef(DrawerRailItemRender);
DrawerRailItem.displayName = 'DrawerRailItem';
// @ts-ignore
DrawerRailItem.propTypes = {
    ...SharedStylePropTypes,
    condensed: PropTypes.bool,
    classes: PropTypes.shape({
        root: PropTypes.string,
        active: PropTypes.string,
        condensed: PropTypes.string,
        divider: PropTypes.string,
        icon: PropTypes.string,
        statusStripe: PropTypes.string,
        title: PropTypes.string,
        titleActive: PropTypes.string,
        ripple: PropTypes.string,
    }),
    hidden: PropTypes.bool,
    icon: PropTypes.element.isRequired,
    itemID: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    statusColor: PropTypes.string,
    title: PropTypes.string,
    disableRailTooltip: PropTypes.bool,
    // @ts-ignore
    ButtonBaseProps: PropTypes.object,
};
