import React from 'react';
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Typography,
    ListItemProps,
} from '@material-ui/core';
import Chevron from '@material-ui/icons/ChevronRight';

import { InfoListItemClasses, useStyles } from './InfoListItem.styles';

import { separate, withKeys } from '../utilities';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const MAX_SUBTITLE_ELEMENTS = 6;

export type DividerType = 'full' | 'partial';
export type InfoListItemProps = Omit<Omit<ListItemProps, 'title'>, 'divider'> & {
    avatar?: boolean;
    backgroundColor?: string;
    chevron?: boolean;
    classes?: InfoListItemClasses;
    divider?: DividerType;
    fontColor?: string;
    hidePadding?: boolean;
    icon?: JSX.Element;
    iconColor?: string;
    leftComponent?: JSX.Element;
    rightComponent?: JSX.Element;
    ripple?: boolean;
    statusColor?: string;
    subtitle?: string | Array<string | JSX.Element>;
    subtitleSeparator?: string;
    title: React.ReactNode;
    wrapSubtitle?: boolean;
    wrapTitle?: boolean;
};

export const InfoListItem: React.FC<InfoListItemProps> = (props) => {
    const defaultClasses = useStyles(props);
    const {
        avatar,
        button,
        chevron,
        classes,
        divider,
        hidePadding,
        icon,
        leftComponent,
        rightComponent,
        ripple,
        subtitle,
        subtitleSeparator,
        title,
        wrapSubtitle,
        wrapTitle,
        // leaving those here to allow prop transferring
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        fontColor,
        iconColor,
        statusColor,
        /* eslint-disable @typescript-eslint/no-unused-vars */
        ...otherListItemProps
    } = props;

    const combine = (className: keyof InfoListItemClasses): string =>
        clsx(defaultClasses[className], classes[className]);

    const getIcon = (): JSX.Element | undefined => {
        if (icon && avatar) {
            return (
                <ListItemAvatar>
                    <Avatar className={combine('avatar')}>{icon}</Avatar>
                </ListItemAvatar>
            );
        } else if (icon) {
            return <ListItemIcon className={combine('icon')}>{icon}</ListItemIcon>;
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
            return <div className={combine('rightComponent')}>{rightComponent}</div>;
        } else if (chevron) {
            return <Chevron color={'inherit'} aria-role={'more'} className={combine('rightComponent')} />;
        }
    };

    const interpunct = (): JSX.Element => (
        <Typography className={combine('separator')}>{subtitleSeparator || '\u00B7'}</Typography>
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

    const hasRipple = button === undefined ? (props.onClick && ripple ? true : undefined) : button ? true : undefined;

    return (
        // @ts-ignore
        <ListItem button={hasRipple} className={combine('root')} {...otherListItemProps}>
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
                    className: combine('title'),
                }}
                secondaryTypographyProps={{
                    noWrap: !wrapSubtitle,
                    variant: 'subtitle2',
                    className: combine('subtitle'),
                }}
            />
            {getRightComponent()}
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
        avatar: PropTypes.string,
        icon: PropTypes.string,
        rightComponent: PropTypes.string,
        separator: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string,
    }),
    divider: PropTypes.oneOf(['full', 'partial']),
    fontColor: PropTypes.string,
    hidePadding: PropTypes.bool,
    icon: PropTypes.element,
    iconColor: PropTypes.string,
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element,
    statusColor: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
    ]),
    subtitleSeparator: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    wrapSubtitle: PropTypes.bool,
    wrapTitle: PropTypes.bool,
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
    wrapTitle: false,
};
