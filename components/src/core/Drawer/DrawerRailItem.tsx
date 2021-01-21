import React, { useCallback } from 'react';
import {
    Avatar,
    ButtonBase,
    ButtonBaseProps as MuiButtonBaseProps,
    Divider,
    Tooltip,
    Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { RAIL_WIDTH, RAIL_WIDTH_CONDENSED } from './Drawer';
import color from 'color';
import clsx from 'clsx';
import { SharedStyleProps } from './types';
import { useDrawerContext } from './DrawerContext';
import { DrawerNavItem } from './DrawerNavItem';

export type DrawerRailItemClasses = {
    root?: string;
    active?: string;
    condensed?: string;
    divider?: string;
    icon?: string;
    statusStripe?: string;
    title?: string;
    titleActive?: string;
    ripple?: string;
};

export type ExtendedNavItem = DrawerNavItem & { ButtonBaseProps?: Partial<MuiButtonBaseProps> };
export type DrawerRailItemProps = MuiButtonBaseProps &
    SharedStyleProps & {
        // toggles the condensed style
        condensed?: boolean;

        // classes for style overrides
        classes?: DrawerRailItemClasses;

        // sets whether to hide the nav item
        hidden?: boolean;

        // icon on the left
        icon: JSX.Element;

        // item id to match for the active state.
        // Should be unique within the entire list. Will be used as the list key too.
        itemID: string;

        // onClick of the entire row
        onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;

        // Status stripe color
        statusColor?: string;

        // text to be displayed
        title: string;

        // props for the ButtonBase
        ButtonBaseProps?: Partial<MuiButtonBaseProps>;
    };

const useStyles = makeStyles<Theme, DrawerRailItemProps>((theme: Theme) => {
    // approximates the [200] color but not perfectly because the theme does not have that explicit color
    const lightenedPrimary = color(theme.palette.primary.main)
        .lighten(0.83)
        .desaturate(0.39)
        .string();
    const fivePercentOpacityPrimary = color(theme.palette.primary.main)
        .fade(0.95)
        .string();
    const twentyPercentOpacityPrimary = color(theme.palette.primary.main)
        .fade(0.8)
        .string();

    return createStyles({
        root: {
            width: RAIL_WIDTH,
            minHeight: RAIL_WIDTH,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: (props): string =>
                `${theme.spacing(2)}px ${props.statusColor ? theme.spacing(1) : theme.spacing(0.5)}px`,
            textAlign: 'center',
            '&:hover': {
                backgroundColor: (props): string => (props.onClick ? theme.palette.action.hover : undefined),
            },
        },
        condensed: {
            width: RAIL_WIDTH_CONDENSED,
            minHeight: RAIL_WIDTH_CONDENSED,
        },
        active: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: (props): string =>
                props.activeItemBackgroundColor ||
                (theme.palette.type === 'light' ? fivePercentOpacityPrimary : twentyPercentOpacityPrimary),
        },
        cursorPointer: {
            cursor: 'pointer',
        },
        divider: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
        },
        icon: {
            color: (props): string => props.itemIconColor || theme.palette.text.primary,
            backgroundColor: 'transparent',
            height: 'auto',
            width: 'auto',
            overflow: 'visible',
        },
        itemActive: {
            '& $icon': {
                color: (props): string =>
                    props.activeItemIconColor ||
                    (theme.palette.type === 'light' ? theme.palette.primary.main : lightenedPrimary),
            },
            '& $title': {
                color: (props): string =>
                    props.activeItemFontColor ||
                    (theme.palette.type === 'light' ? theme.palette.primary.main : lightenedPrimary),
            },
        },
        statusStripe: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            zIndex: 100,
            backgroundColor: (props): string => props.statusColor,
        },
        title: {
            lineHeight: `16px`,
            wordBreak: 'break-word',
            hyphens: 'auto',
            zIndex: 200,
            color: (props): string => props.itemFontColor || theme.palette.text.primary,
        },
        titleActive: {
            fontWeight: 600,
        },
        ripple: {
            backgroundColor: theme.palette.primary.main,
        },
    });
});

const DrawerRailItemRender: React.ForwardRefRenderFunction<unknown, DrawerRailItemProps> = (
    props: DrawerRailItemProps,
    ref: any
) => {
    const {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        activeItemBackgroundColor,
        activeItemFontColor,
        activeItemIconColor,
        itemFontColor,
        itemIconColor,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        divider,
        ripple = true,
        classes = {},
        condensed: itemCondensed = false,
        hidden,
        icon,
        itemID,
        onClick,
        // onItemSelect,
        title,
        ButtonBaseProps,
        statusColor,
        ...directButtonBaseProps
    } = props;

    const { activeItem, onItemSelect, condensed: drawerCondensed } = useDrawerContext();
    const active = activeItem === itemID;
    const condensed = itemCondensed !== undefined ? itemCondensed : drawerCondensed;
    const defaultClasses = useStyles(props);
    const hasAction = Boolean(onClick || onItemSelect);

    // Customize the color of the Touch Ripple
    const RippleProps =
        ripple && hasAction
            ? {
                  TouchRippleProps: {
                      classes: {
                          child: defaultClasses.ripple,
                      },
                  },
              }
            : {};

    const combine = useCallback(
        (className: keyof DrawerRailItemClasses): string => clsx(defaultClasses[className], classes[className]),
        [defaultClasses, classes]
    );

    const getIcon = useCallback((): JSX.Element | undefined => {
        if (icon) {
            return <Avatar className={combine('icon')}>{icon}</Avatar>;
        }
    }, [icon, combine]);

    const onClickAction = useCallback(
        (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
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
        <ButtonBase
            ref={ref}
            {...ButtonBaseProps}
            {...directButtonBaseProps}
            className={clsx(defaultClasses.root, classes.root, {
                [defaultClasses.cursorPointer]: hasAction,
                [defaultClasses.itemActive]: active,
                [defaultClasses.condensed]: condensed,
                [classes.condensed]: condensed && classes.condensed,
            })}
            disableRipple={!ripple || !hasAction}
            onClick={onClickAction}
            {...RippleProps}
        >
            {/* Active Item Highlight */}
            {active && <div className={combine('active')} />}
            {/* Status Color Stripe */}
            {statusColor !== undefined && statusColor !== '' && (
                <div className={combine('statusStripe')} data-test={'status-stripe'} />
            )}
            {/* Icon */}
            {getIcon()}
            {/* Title */}
            {!condensed && (
                <Typography
                    variant={'caption'}
                    className={clsx(defaultClasses.title, classes.title, {
                        [defaultClasses.titleActive]: active,
                        [classes.titleActive]: active && classes.titleActive,
                    })}
                >
                    {title}
                </Typography>
            )}
            {/* Divider */}
            {divider && <Divider className={combine('divider')} />}
        </ButtonBase>
    );

    return hidden ? null : condensed ? (
        <Tooltip title={title} placement="right">
            {innerContent}
        </Tooltip>
    ) : (
        innerContent
    );
};

export const DrawerRailItem = React.forwardRef(DrawerRailItemRender);
DrawerRailItem.displayName = 'DrawerRailItem';
