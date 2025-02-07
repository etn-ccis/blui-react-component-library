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
import { cx } from '@emotion/css';
import drawerRailItemClasses, {
    DrawerRailItemClasses,
    DrawerRailItemClassKey,
    getDrawerRailItemUtilityClass,
} from './DrawerRailItemClasses';
import { unstable_composeClasses as composeClasses } from '@mui/material';
import { styled, SxProps, Theme, useColorScheme } from '@mui/material/styles';
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
export type DrawerRailItemProps = SharedStyleProps &
    MuiButtonBaseProps & {
        /** Custom classes for default style overrides */
        classes?: DrawerRailItemClasses;

        /** class for root default style overrides */
        className?: string;

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
    shouldForwardProp: (prop) =>
        prop !== 'backgroundColor' &&
        prop !== 'activeItemIconColor' &&
        prop !== 'activeItemFontColor' &&
        prop !== 'statusColor' &&
        prop !== 'hasAction' &&
        prop !== 'itemActive' &&
        prop !== 'condensed',
})<
    Pick<
        DrawerRailItemProps,
        'statusColor' | 'backgroundColor' | 'onClick' | 'activeItemIconColor' | 'activeItemFontColor' | 'condensed'
    > & { condensed: boolean; hasAction: boolean; itemActive: boolean }
>(
    ({
        statusColor,
        backgroundColor,
        onClick,
        activeItemIconColor,
        activeItemFontColor,
        condensed,
        hasAction,
        itemActive,
        theme,
    }) => {
        const colorScheme = useColorScheme();

        const lightenedPrimary = color(
            colorScheme.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
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
            cursor: hasAction ? 'cursor' : 'default',
            padding: `1rem ${statusColor ? theme.spacing(1) : theme.spacing(0.5)}px`,
            textAlign: 'center',
            backgroundColor: backgroundColor || 'transparent',
            '&:hover': {
                backgroundColor: onClick ? (theme.vars || theme).palette.action.hover : undefined,
            },
            '& .MuiAvatar-root': {
                backgroundColor: backgroundColor || 'transparent',
            },
            ...(itemActive && {
                [`& .${drawerRailItemClasses.icon}`]: {
                    color: activeItemIconColor || (theme.vars || theme).palette.primary.main,
                    ...theme.applyStyles('dark', {
                        color: activeItemIconColor || lightenedPrimary,
                    }),
                },
                [`& .${drawerRailItemClasses.title}`]: {
                    color: activeItemFontColor || (theme.vars || theme).palette.primary.main,
                    ...theme.applyStyles('dark', {
                        color: activeItemFontColor || lightenedPrimary,
                    }),
                },
            }),
            ...(condensed && {
                width: RAIL_WIDTH_CONDENSED,
                minHeight: RAIL_WIDTH_CONDENSED,
            }),
            [`& .${drawerRailItemClasses.ripple}`]: {
                backgroundColor: (theme.vars || theme).palette.primary.main,
            },
        };
    }
);

const ActiveItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'activeItemBackgroundColor',
})<Pick<DrawerRailItemProps, 'activeItemBackgroundColor'>>(({ activeItemBackgroundColor, theme }) => {
    const colorScheme = useColorScheme();

    const fivePercentOpacityPrimary = color(
        colorScheme.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .fade(0.95)
        .string();
    const twentyPercentOpacityPrimary = color(
        colorScheme.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .fade(0.8)
        .string();

    return {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: activeItemBackgroundColor || fivePercentOpacityPrimary,
        ...theme.applyStyles('dark', {
            backgroundColor: activeItemBackgroundColor || twentyPercentOpacityPrimary,
        }),
    };
});

const StatusStripe = styled(Box, {
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
    shouldForwardProp: (prop) => prop !== 'itemIconColor',
})<Pick<DrawerRailItemProps, 'itemIconColor'>>(({ itemIconColor, theme }) => ({
    color: itemIconColor || (theme.vars || theme).palette.text.primary,
    backgroundColor: 'transparent',
    height: 'auto',
    width: 'auto',
    overflow: 'visible',
}));

const Title = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'itemFontColor' && prop !== 'active',
})<Pick<DrawerRailItemProps, 'itemFontColor'> & { active: boolean }>(({ itemFontColor, active, theme }) => ({
    lineHeight: '1rem',
    wordBreak: 'break-word',
    hyphens: 'auto',
    zIndex: 200,
    color: itemFontColor || (theme.vars || theme).palette.text.primary,
    ...(active && {
        fontWeight: 600,
    }),
}));

const DrawerRailItemDivider = styled(
    Divider,
    {}
)(() => ({
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
        className,
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
    const generatedClasses = useUtilityClasses(props);
    const hasAction = Boolean(onClick || onItemSelect);

    // Customize the color of the Touch Ripple
    const RippleProps =
        ripple && hasAction
            ? {
                  TouchRippleProps: {
                      classes: {
                          child: generatedClasses.ripple,
                      },
                  },
              }
            : {};

    const getIcon = useCallback((): JSX.Element | undefined => {
        if (icon) {
            return (
                <Icon className={generatedClasses.icon} itemIconColor={itemIconColor}>
                    {icon}
                </Icon>
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [icon]);

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
            className={cx(
                generatedClasses.root,
                condensed && generatedClasses.condensed ? generatedClasses.condensed : undefined,
                className
            )}
            statusColor={statusColor}
            backgroundColor={backgroundColor}
            condensed={condensed}
            activeItemIconColor={activeItemIconColor}
            activeItemFontColor={activeItemFontColor}
            disableRipple={!ripple || !hasAction}
            onClick={onClickAction}
            hasAction={hasAction}
            itemActive={active}
            sx={sx}
            {...RippleProps}
        >
            {/* Active Item Highlight */}
            {active && (
                <ActiveItem className={generatedClasses.active} activeItemBackgroundColor={activeItemBackgroundColor} />
            )}
            {/* Status Color Stripe */}
            {statusColor !== undefined && statusColor !== '' && (
                <StatusStripe
                    className={generatedClasses.statusStripe}
                    data-testid={'blui-status-stripe'}
                    statusColor={statusColor}
                />
            )}
            {/* Icon */}
            {getIcon()}
            {/* Title */}
            {!condensed && (
                <Title
                    variant={'caption'}
                    className={cx(generatedClasses.title, active && generatedClasses.titleActive)}
                    itemFontColor={itemFontColor}
                    active={active}
                >
                    {title}
                </Title>
            )}
            {/* Divider */}
            {divider && <DrawerRailItemDivider className={generatedClasses.divider} />}
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
 * [DrawerRailItem](https://brightlayer-ui-components.github.io/react/components/drawer-rail-item) component
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
