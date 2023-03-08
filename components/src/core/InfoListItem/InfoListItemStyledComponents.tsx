import { InfoListItemProps } from './InfoListItem';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import color from 'color';
import * as Colors from '@brightlayer-ui/colors';
import ListItemButton from '@mui/material/ListItemButton';
import Box, { BoxProps } from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Chevron from '@mui/icons-material/ChevronRight';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const Root = styled(ListItem, {
    name: 'info-list-item',
    slot: 'root',
    shouldForwardProp: (prop) =>
        prop !== 'iconColor' &&
        prop !== 'iconColor' &&
        prop !== 'backgroundColor' &&
        prop !== 'wrapSubtitle' &&
        prop !== 'wrapTitle' &&
        prop !== 'wrapInfo' &&
        prop !== 'ripple',
})<
    Pick<
        InfoListItemProps,
        'onClick' | 'backgroundColor' | 'wrapSubtitle' | 'wrapTitle' | 'wrapInfo' | 'dense' | 'ripple' | 'iconColor'
    >
>(({ onClick, backgroundColor, wrapSubtitle, wrapTitle, wrapInfo, dense, ripple, theme }) => {
    const isWrapEnabled = (): boolean => wrapSubtitle || wrapTitle || wrapInfo;
    const getHeight = (): string => (dense ? `3.25rem` : `4.5rem`);

    let isCssColor = true;
    try {
        color(backgroundColor);
    } catch (e) {
        isCssColor = false;
    }

    return {
        cursor: onClick ? 'pointer' : 'inherit',
        backgroundColor: backgroundColor || 'inherit',
        minHeight: isWrapEnabled() ? getHeight() : 'initial',
        height: !isWrapEnabled() ? getHeight() : 'auto',
        '&:hover': {
            backgroundColor: onClick
                ? backgroundColor && backgroundColor !== 'inherit' && backgroundColor !== 'transparent' && isCssColor
                    ? color(backgroundColor).darken(0.08).string()
                    : theme.palette.action.hover
                : undefined,
        },
        '&:focus': {
            outline: 'none',
        },
        padding: onClick && ripple ? 0 : undefined,
        paddingTop: isWrapEnabled() ? 0 : 'auto',
        paddingBottom: isWrapEnabled() ? 0 : 'auto',
    };
});

export const InfoListItemContentContainer = styled(ListItemButton)(() => ({
    height: 'inherit',
    width: 'inherit',
}));

export const StatusStripe = styled(Box, {
    name: 'info-list-item',
    slot: 'statusStripe',
    shouldForwardProp: (prop) => prop !== 'statusColor',
})<Pick<InfoListItemProps, 'statusColor'>>(({ statusColor }) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 6,
    zIndex: 100,
    backgroundColor: statusColor,
}));

export const InfoListItemDivider = styled(Divider)<Pick<InfoListItemProps, 'divider'>>(({ divider, theme }) => ({
    position: 'absolute',
    bottom: 0,
    right: theme.direction === 'rtl' ? (divider === 'full' ? 0 : `4.5rem`) : 0,
    left: theme.direction === 'ltr' ? (divider === 'full' ? 0 : `4.5rem`) : 0,
    zIndex: 0,
}));

export const Icon = styled(Avatar, {
    name: 'info-list-item',
    slot: 'icon',
    shouldForwardProp: (prop) =>
        prop !== 'statusColor' &&
        prop !== 'iconColor' &&
        prop !== 'iconAlign' &&
        prop !== 'avatar' &&
        prop !== 'isInvisible',
})<Pick<InfoListItemProps, 'statusColor' | 'iconColor' | 'avatar' | 'iconAlign'> & { isInvisible?: boolean }>(
    ({ statusColor, iconColor, avatar, iconAlign, isInvisible, theme }) => {
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
        if (avatar) {
            return {
                backgroundColor: statusColor || Colors.black[500],
                color: getIconColor(),
                width: `2.5rem`,
                height: `2.5rem`,
                padding: `.5rem`,
                marginRight: theme.spacing(2),
            };
        }
        return {
            color: getIconColor(),
            justifyContent: getIconAlignment(),
            backgroundColor: 'transparent',
            overflow: 'visible',
            width: `2.5rem`,
            height: `2.5rem`,
            marginRight: theme.spacing(2),
            opacity: isInvisible ? 0 : 'auto',
        };
    }
);

export const InfoListItemText = styled(ListItemText, {
    name: 'info-list-item',
    slot: 'listItemText',
    shouldForwardProp: (prop) => prop !== 'leftComponent',
})<Pick<InfoListItemProps, 'leftComponent'>>(({ leftComponent, theme }) => ({
    // we have to specify both here because the auto-swap from JSS isn't smart enough to do it when we use a function
    marginLeft: leftComponent ? (theme.direction === 'rtl' ? 0 : theme.spacing(2)) : 0,
    marginRight: leftComponent ? (theme.direction === 'rtl' ? theme.spacing(2) : 0) : 0,
}));

export const Subtitle = styled(Typography, {
    name: 'info-list-item',
    slot: 'subtitle',
    shouldForwardProp: (prop) => prop !== 'fontColor',
})<Pick<InfoListItemProps & TypographyProps & BoxProps, 'fontColor' | 'component' | 'noWrap'>>(
    ({ fontColor, theme }) => ({
        fontWeight: 400,
        lineHeight: 1.3,
        color: fontColor || (theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'inherit'),
    })
);

export const Info = styled(Typography, {
    name: 'info-list-item',
    slot: 'info',
    shouldForwardProp: (prop) => prop !== 'fontColor',
})<Pick<InfoListItemProps & TypographyProps & BoxProps, 'fontColor' | 'component' | 'noWrap'>>(
    ({ fontColor, theme }) => ({
        fontWeight: 400,
        lineHeight: 1.3,
        color: fontColor || (theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'inherit'),
    })
);

export const RightComponent = styled(Box, {
    name: 'info-list-item',
    slot: 'rightComponent',
})(({ theme }) => ({
    flex: '0 0 auto',
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
}));

export const InfoListItemChevron = styled(Chevron, {
    name: 'info-list-item',
    slot: 'chevron',
    shouldForwardProp: (prop) => prop !== 'chevronColor',
})<Pick<InfoListItemProps, 'chevronColor'>>(({ chevronColor, theme }) => ({
    color: chevronColor ? chevronColor : theme.palette.text.secondary,
    transform: theme.direction === 'rtl' ? 'scaleX(-1)' : '',
}));

export const SubtitleSeparator = styled(Typography)<TypographyProps & BoxProps>(({ theme }) => ({
    display: 'inline-block',
    lineHeight: 1.3,
    color: 'inherit',
    margin: `0 ${theme.spacing(0.5)}`,
}));
