import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import color from 'color';
import * as Colors from '@pxblue/colors';
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

const getHeight = (props: InfoListItemProps): number => (props.dense ? 52 : 72);
const getIconColor = (props: InfoListItemProps): string => {
    const { avatar, iconColor, statusColor } = props;
    if (iconColor) return iconColor;
    if (avatar) {
        return statusColor ? (color(statusColor).isDark() ? Colors.white[50] : Colors.black[500]) : Colors.white[50]; // default avatar is dark gray -> white text
    }
    return statusColor ? statusColor : 'inherit';
};

const isWrapEnabled = (props: InfoListItemProps): boolean => props.wrapSubtitle || props.wrapTitle;

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
                                  .rgb()
                                  .string()
                            : 'rgba(0,0,0,0.08)'
                        : undefined,
            },
        },
        avatar: {
            backgroundColor: (props) => props.statusColor || Colors.black[500],
            color: (props) => getIconColor(props),
        },
        divider: {
            position: 'absolute',
            bottom: 0,
            right: (props) => (theme.direction === 'rtl' ? (props.divider === 'full' ? 0 : 72) : 0),
            left: (props) => (theme.direction === 'ltr' ? (props.divider === 'full' ? 0 : 72) : 0),
            zIndex: 0,
        },
        listItemText: {
            marginLeft: (props) => (props.leftComponent ? theme.spacing(2) : 0),
        },
        icon: {
            color: (props) => getIconColor(props),
            justifyContent: (props) => getIconAlignment(props),
            backgroundColor: 'transparent',
        },
        info: {
            fontWeight: 400,
            lineHeight: 1.3,
            color: (props) => props.fontColor || 'inherit',
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
            color: (props) => props.fontColor || 'inherit',
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
