import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import color from 'color';
import * as Colors from '@brightlayer-ui/colors';
import { InfoListItemProps } from './InfoListItem';

export type InfoListItemClasses = {
    root?: string;
    avatar?: string;
    divider?: string;
    icon?: string;
    info?: string;
    listItemText?: string;
    rightComponent?: string;
    separator?: string;
    statusStripe?: string;
    subtitle?: string;
    title?: string;
};

const getHeight = (props: InfoListItemProps): string => (props.dense ? `3.25rem` : `4.5rem`);
const getIconColor = (props: InfoListItemProps, theme: Theme): string => {
    const { avatar, iconColor, statusColor } = props;
    if (iconColor) return iconColor;
    if (avatar) {
        return statusColor ? (color(statusColor).isDark() ? Colors.white[50] : Colors.black[500]) : Colors.white[50]; // default avatar is dark gray -> white text
    }
    return statusColor ? statusColor : theme.palette.text.secondary;
};

const isWrapEnabled = (props: InfoListItemProps): boolean => props.wrapSubtitle || props.wrapTitle || props.wrapInfo;

const getIconAlignment = (props: InfoListItemProps): 'flex-end' | 'flex-start' | 'center' => {
    switch (props.iconAlign) {
        case 'left':
            return 'flex-start';
        case 'right':
            return 'flex-end';
        case 'center':
        default:
            return 'center';
    }
};

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const useStyles = makeStyles<Theme, InfoListItemProps>((theme: Theme) =>
    createStyles({
        root: {
            cursor: (props) => (props.onClick ? 'pointer' : 'inherit'),
            backgroundColor: (props) => props.backgroundColor || 'inherit',
            minHeight: (props) => (isWrapEnabled(props) ? getHeight(props) : 'initial'),
            height: (props) => (!isWrapEnabled(props) ? getHeight(props) : 'auto'),
            '&:hover': {
                backgroundColor: (props) =>
                    props.onClick
                        ? props.backgroundColor &&
                          props.backgroundColor !== 'inherit' &&
                          props.backgroundColor !== 'transparent'
                            ? color(props.backgroundColor)
                                  .darken(0.08)
                                  .string()
                            : theme.palette.action.hover
                        : undefined,
            },
            '&:focus': {
                outline: 'none',
            },
        },
        avatar: {
            backgroundColor: (props) => props.statusColor || Colors.black[500],
            color: (props) => getIconColor(props, theme),
            width: `2.5rem`,
            height: `2.5rem`,
            padding: `.5rem`,
            marginRight: theme.spacing(2),
        },
        invisible: {
            opacity: 0,
        },
        divider: {
            position: 'absolute',
            bottom: 0,
            right: (props) => (theme.direction === 'rtl' ? (props.divider === 'full' ? 0 : `4.5rem`) : 0),
            left: (props) => (theme.direction === 'ltr' ? (props.divider === 'full' ? 0 : `4.5rem`) : 0),
            zIndex: 0,
        },
        listItemText: {
            // we have to specify both here because the auto-swap from JSS isn't smart enough to do it when we use a function
            marginLeft: (props) => (props.leftComponent ? (theme.direction === 'rtl' ? 0 : theme.spacing(2)) : 0),
            marginRight: (props) => (props.leftComponent ? (theme.direction === 'rtl' ? theme.spacing(2) : 0) : 0),
        },
        icon: {
            color: (props) => getIconColor(props, theme),
            justifyContent: (props) => getIconAlignment(props),
            backgroundColor: 'transparent',
            overflow: 'visible',
            width: `2.5rem`,
            height: `2.5rem`,
            marginRight: theme.spacing(2),
        },
        info: {
            fontWeight: 400,
            lineHeight: 1.3,
            color: (props) =>
                props.fontColor || (theme.palette.type === 'dark' ? theme.palette.text.secondary : 'inherit'),
        },
        rightComponent: {
            flex: '0 0 auto',
            marginLeft: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
        },
        separator: {
            display: 'inline-block',
            lineHeight: 1.3,
            color: 'inherit',
            margin: `0 ${theme.spacing(0.5)}px`,
        },
        statusStripe: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            zIndex: 100,
            backgroundColor: (props) => props.statusColor,
        },
        subtitle: {
            fontWeight: 400,
            lineHeight: 1.3,
            color: (props) =>
                props.fontColor || (theme.palette.type === 'dark' ? theme.palette.text.secondary : 'inherit'),
        },
        title: {
            fontWeight: 600,
            lineHeight: 1.25,
            display: 'block',
            color: (props) => props.fontColor || 'inherit',
        },
        flipIcon:
            theme.direction === 'rtl'
                ? {
                      transform: 'scaleX(-1)',
                  }
                : {},
    })
);
