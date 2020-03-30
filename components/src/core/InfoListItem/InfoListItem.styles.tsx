import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { InfoListItemProps } from './InfoListItem';
import color from 'color';
import * as Colors from '@pxblue/colors';

const getHeight = (props: InfoListItemProps): number => (props.dense ? 52 : 72);
const getIconColor = (props: InfoListItemProps): string => {
    const { avatar, iconColor, statusColor } = props;
    if (iconColor) return iconColor;
    if (avatar) {
        return statusColor ? (color(statusColor).isDark() ? Colors.white[50] : Colors.black[500]) : Colors.white[50]; // default avatar is dark gray -> white text
    }
    return statusColor ? statusColor : 'inherit';
};

const isWrapEnabled = (props: InfoListItemProps): boolean => (props.wrapSubtitle || props.wrapTitle);

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const useStyles = makeStyles<Theme, InfoListItemProps>((theme: Theme) =>
    createStyles({
        root: {
            cursor: (props) => (props.onClick ? 'pointer' : 'inherit'),
            backgroundColor: (props) => props.backgroundColor || 'inherit',
            minHeight: (props) => (isWrapEnabled(props)) ? getHeight(props) : 'unset',
            height: (props) => (!isWrapEnabled(props)) ? getHeight(props) : 'auto',
            '&:hover': {
                backgroundColor: (props) =>
                    props.onClick
                        ? props.backgroundColor &&
                          props.backgroundColor !== 'inherit' &&
                          props.backgroundColor !== 'transparent'
                            ? color(props.backgroundColor)
                                  .darken(0.08)
                                  .hex()
                            : 'rgba(0,0,0,0.08)'
                        : '',
            },
        },
        avatar: {
            backgroundColor: (props) => props.statusColor || Colors.black[500],
            color: (props) => getIconColor(props),
        },
        divider: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: (props) => (props.divider === 'full' ? 0 : 72),
            zIndex: 0,
        },
        listItemText: {
            marginLeft: (props) => (props.leftComponent ? theme.spacing(2) : 0),
        },
        icon: {
            color: (props) => getIconColor(props),
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
            backgroundColor: (props) => props.statusColor,
        },
        subtitle: {
            fontWeight: 400,
            lineHeight: 1.3,
            color: (props) => props.fontColor || 'inherit',
        },
        title: {
            fontWeight: 600,
            lineHeight: 1.2,
            display: 'block',
            color: (props) => props.fontColor,
        },
    })
);
