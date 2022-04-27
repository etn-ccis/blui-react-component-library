import { InfoListItemProps } from './InfoListItem';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import color from 'color';
import * as Colors from '@brightlayer-ui/colors';
import infoListItemClasses from './InfoListItemClasses';

export const Root = styled(ListItem, {
    name: 'info-list-item',
    slot: 'root',
})<
    Pick<
        InfoListItemProps,
        | 'onClick'
        | 'backgroundColor'
        | 'wrapSubtitle'
        | 'wrapTitle'
        | 'wrapInfo'
        | 'dense'
        | 'ripple'
        | 'statusColor'
        | 'avatar'
        | 'iconColor'
        | 'divider'
        | 'leftComponent'
        | 'iconAlign'
        | 'fontColor'
        | 'chevronColor'
    >
>(
    ({
        onClick,
        backgroundColor,
        wrapSubtitle,
        wrapTitle,
        wrapInfo,
        dense,
        ripple,
        statusColor,
        avatar,
        iconColor,
        divider,
        leftComponent,
        iconAlign,
        fontColor,
        chevronColor,
        theme,
    }) => {
        const isWrapEnabled = (): boolean => wrapSubtitle || wrapTitle || wrapInfo;

        const getIconAlignment = (): string => {
            switch (iconAlign) {
                case 'left':
                    return 'flex-start';
                case 'right':
                    return 'flex-end';
                case 'center':
                default:
                    return 'center';
            }
        };

        const getHeight = (): string => (dense ? `3.25rem` : `4.5rem`);

        const getIconColor = (): string => {
            if (iconColor) return iconColor;
            if (avatar) {
                return statusColor
                    ? color(statusColor).isDark()
                        ? Colors.white[50]
                        : Colors.black[500]
                    : Colors.white[50]; // default avatar is dark gray -> white text
            }
            return statusColor ? statusColor : theme.palette.text.secondary;
        };

        return {
            cursor: onClick ? 'pointer' : 'inherit',
            backgroundColor: backgroundColor || 'inherit',
            minHeight: isWrapEnabled() ? getHeight() : 'initial',
            height: !isWrapEnabled() ? getHeight() : 'auto',
            '&:hover': {
                backgroundColor: onClick
                    ? backgroundColor && backgroundColor !== 'inherit' && backgroundColor !== 'transparent'
                        ? color(backgroundColor).darken(0.08).string()
                        : theme.palette.action.hover
                    : undefined,
            },
            '&:focus': {
                outline: 'none',
            },
            padding: onClick && ripple ? 0 : undefined,

            [`&.${infoListItemClasses.avatar}`]: {
                backgroundColor: statusColor || Colors.black[500],
                color: getIconColor(),
                width: `2.5rem`,
                height: `2.5rem`,
                padding: `.5rem`,
                marginRight: theme.spacing(2),
            },
            [`&.${infoListItemClasses.invisible}`]: {
                opacity: 0,
            },
            [`&.${infoListItemClasses.divider}`]: {
                position: 'absolute',
                bottom: 0,
                right: theme.direction === 'rtl' ? (divider === 'full' ? 0 : `4.5rem`) : 0,
                left: theme.direction === 'ltr' ? (divider === 'full' ? 0 : `4.5rem`) : 0,
                zIndex: 0,
            },
            [`&.${infoListItemClasses.listItemText}`]: {
                // we have to specify both here because the auto-swap from JSS isn't smart enough to do it when we use a function
                marginLeft: leftComponent ? (theme.direction === 'rtl' ? 0 : theme.spacing(2)) : 0,
                marginRight: leftComponent ? (theme.direction === 'rtl' ? theme.spacing(2) : 0) : 0,
            },
            [`&.${infoListItemClasses.listItemButtonRoot}`]: {
                height: 'inherit',
                width: 'inherit',
            },
            [`&.${infoListItemClasses.icon}`]: {
                color: getIconColor(),
                justifyContent: getIconAlignment(),
                backgroundColor: 'transparent',
                overflow: 'visible',
                width: `2.5rem`,
                height: `2.5rem`,
                marginRight: theme.spacing(2),
            },
            [`&.${infoListItemClasses.info}`]: {
                fontWeight: 400,
                lineHeight: 1.3,
                color: fontColor || (theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'inherit'),
            },
            [`&.${infoListItemClasses.rightComponent}`]: {
                flex: '0 0 auto',
                marginLeft: theme.spacing(2),
                display: 'flex',
                alignItems: 'center',
            },
            [`&.${infoListItemClasses.chevron}`]: {
                color: chevronColor ? chevronColor : theme.palette.text.secondary,
            },
            [`&.${infoListItemClasses.separator}`]: {
                display: 'inline-block',
                lineHeight: 1.3,
                color: 'inherit',
                margin: `0 ${theme.spacing(0.5)}`,
            },
            [`&.${infoListItemClasses.statusStripe}`]: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: 6,
                zIndex: 100,
                backgroundColor: statusColor,
            },
            [`&.${infoListItemClasses.subtitle}`]: {
                fontWeight: 400,
                lineHeight: 1.3,
                color: fontColor || (theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'inherit'),
            },
            [`&.${infoListItemClasses.title}`]: {
                fontWeight: 600,
                lineHeight: 1.25,
                display: 'block',
                color: fontColor || 'inherit',
            },
            [`&.${infoListItemClasses.flipIcon}`]: theme.direction === 'rtl' ? { transform: 'scaleX(-1)' } : {},
        };
    }
);
