import React from 'react';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Chevron from '@material-ui/icons/ChevronRight';
import { separate, withKeys } from '../utilities';

//Material-UI Components
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './InfoListItem.styles';

const MAX_SUBTITLE_ELEMENTS = 6;

type InfoListItemClasses = {
    root?: string;
    rightComponent?: string;
    separator?: string;
    subtitle?: string;
    title?: string;
};

export type DividerType = 'full' | 'partial';
export type InfoListItemProps = {
    avatar?: boolean;
    backgroundColor?: string;
    chevron?: boolean;
    classes?: InfoListItemClasses;
    dense?: boolean;
    divider?: DividerType;
    fontColor?: string;
    hidePadding?: boolean;
    icon?: JSX.Element;
    iconColor?: string;
    leftComponent?: JSX.Element;
    onClick?: Function;
    rightComponent?: JSX.Element;
    ripple?: boolean;
    statusColor?: string;
    style?: CSSProperties;
    subtitle?: string | Array<string | JSX.Element>;
    subtitleSeparator?: string;
    title: string;
    wrapSubtitle?: boolean;
    wrapTitle?: boolean;
};

export const InfoListItem: React.FC<InfoListItemProps> = (props) => {
    const defaultClasses = useStyles(props);
    const {
        avatar,
        chevron,
        classes,
        dense,
        divider,
        hidePadding,
        icon,
        leftComponent,
        onClick,
        rightComponent,
        style,
        subtitle,
        subtitleSeparator,
        title,
        ripple,
        wrapSubtitle,
        wrapTitle
    } = props;

    const getIcon = (): JSX.Element | undefined => {
        if (icon && avatar) {
            return (
                <ListItemAvatar>
                    <Avatar className={defaultClasses.avatar}>{icon}</Avatar>
                </ListItemAvatar>
            );
        } else if (icon) {
            return <ListItemIcon className={defaultClasses.icon}>{icon}</ListItemIcon>;
        } else if (!hidePadding) {
            return (
                // a dummy component to maintain the padding
                <ListItemAvatar>
                    <Avatar style={{ opacity: 0 }} />
                </ListItemAvatar>
            );
        }
    };

    const getRightComponent = (): JSX.Element | undefined => {
        if (rightComponent) {
            return <div className={clsx(defaultClasses.rightComponent, classes.rightComponent)}>{rightComponent}</div>;
        } else if (chevron) {
            return <Chevron color={'inherit'} className={defaultClasses.rightComponent} />;
        }
    };

    const interpunct = (): JSX.Element => (
        <Typography className={clsx(defaultClasses.separator, classes.separator)}>
            {subtitleSeparator || '\u00B7'}
        </Typography>
    );

    const getSubtitle = (): string | null => {
        if (!subtitle) {
            return null;
        }
        if (typeof subtitle === 'string') {
            return subtitle;
        }

        const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
        const renderableSubtitleParts = subtitleParts.splice(0, MAX_SUBTITLE_ELEMENTS);

        return withKeys(separate(renderableSubtitleParts, () => interpunct()));
    };


    const getMinHeight = (): number => dense ? 52 : 72;
    const getWrapperStyle = (): CSSProperties =>
        Object.assign(
            {
                backgroundColor: backgroundColor || 'transparent',
                cursor: onClick ? 'pointer' : 'default',
                height: (wrapSubtitle || wrapTitle) ? 'unset' : getMinHeight(),
                minHeight: getMinHeight()
            },
            style
        );

    return (
        <ListItem
            style={style}
            className={clsx(defaultClasses.root, classes.root)}
            onClick={onClick ? (): void => onClick() : undefined}
            dense={dense}
            button={ripple ? true : undefined}
        >
            <>
                <div className={defaultClasses.statusStripe} />
                {divider && <Divider className={defaultClasses.divider} />}
                {(icon || !hidePadding) && getIcon()}
                {leftComponent}
                <ListItemText
                    primary={title}
                    className={defaultClasses.listItemText}
                    secondary={getSubtitle()}
                    primaryTypographyProps={{
                        noWrap: !wrapTitle,
                        variant: 'body1',
                        className: clsx(defaultClasses.title, classes.title),
                    }}
                    secondaryTypographyProps={{
                        noWrap: !wrapSubtitle,
                        variant: 'subtitle2',
                        className: clsx(defaultClasses.subtitle, classes.subtitle),
                    }}
                />
                {getRightComponent()}
            </>
        </ListItem>
    );
};

InfoListItem.displayName = 'InfoListItem';
InfoListItem.propTypes = {
    avatar: PropTypes.bool,
    backgroundColor: PropTypes.string,
    chevron: PropTypes.bool,
    classes: PropTypes.shape({
        root: PropTypes.string,
        rightComponent: PropTypes.string,
        separator: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string,
    }),
    dense: PropTypes.bool,
    divider: PropTypes.oneOf(['full', 'partial']),
    fontColor: PropTypes.string,
    hidePadding: PropTypes.bool,
    icon: PropTypes.element,
    iconColor: PropTypes.string,
    leftComponent: PropTypes.element,
    onClick: PropTypes.func,
    rightComponent: PropTypes.element,
    statusColor: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
    ]),
    subtitleSeparator: PropTypes.string,
    title: PropTypes.string.isRequired,
    wrapSubtitle: PropTypes.bool,
    wrapTitle: PropTypes.bool
};
InfoListItem.defaultProps = {
    avatar: false,
    chevron: false,
    classes: {},
    dense: false,
    fontColor: 'inherit',
    hidePadding: false,
    ripple: false,
    subtitleSeparator: '\u00B7',
    wrapSubtitle: false,
    wrapTitle: false
};
