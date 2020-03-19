import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { InfoListItemProps } from './InfoListItem';
import color from 'color';
import * as Colors from '@pxblue/colors';

const getMinHeight = (props: InfoListItemProps): number => props.dense ? 52 : 72;
const getIconColor = (props: InfoListItemProps): string => {
    const { avatar, iconColor, statusColor } = props;
    if (iconColor) return iconColor;
    if (avatar) {
        return statusColor ? (color(statusColor).isDark() ? Colors.white[50] : Colors.black[500]) : Colors.white[50]; // default avatar is dark gray -> white text
    }
    return statusColor ? statusColor : 'inherit';
};

export const useStyles = makeStyles<Theme, InfoListItemProps>((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: (props): string => props.backgroundColor || theme.palette.background.default,
            cursor: (props): string => (props.onClick ? 'pointer' : 'default'),
            height: (props): any => (props.wrapSubtitle || props.wrapTitle) ? 'unset' : getMinHeight(props),
            minHeight: (props): number => getMinHeight(props),
            '&:hover': {
                backgroundColor: (props): string => (props.onClick ? 'rgba(0, 0, 0, 0.08)' : ''),
            },
        },
        avatar: {
            backgroundColor: (props): string => props.statusColor || Colors.black[500],
            color: (props): string => getIconColor(props),
        },
        divider: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: (props): number => (props.divider === 'full' ? 0 : 72),
            zIndex: 0,
        },
        listItemText: {
            marginLeft: (props): number => (props.leftComponent ? theme.spacing(2) : 0),
        },
        icon: {
            color: (props): string => getIconColor(props),
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
            margin: `0 ${theme.spacing(0.5)}`,
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
        subtitle: {
            fontWeight: 400,
            lineHeight: 1.3,
            color: (props): string => props.fontColor || 'inherit',
        },
        title: {
            fontWeight: 600,
            lineHeight: 1.2,
            display: 'block',
            color: (props): string => props.fontColor,
        },
    })
);
