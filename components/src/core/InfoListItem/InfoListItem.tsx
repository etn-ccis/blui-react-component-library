import React from 'react';
import { separate, withKeys } from '../utilities';
import {InfoListItemClasses, useStyles} from './InfoListItem.styles';

import { Avatar, Divider, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import Chevron from '@material-ui/icons/ChevronRight';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';

const MAX_SUBTITLE_ELEMENTS = 6;

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
    title: React.ReactNode;
    wrapSubtitle?: boolean;
    wrapTitle?: boolean;
};

export const InfoListItem: React.FC<InfoListItemProps> = (props) => {
    const defaultClasses = useStyles(props);
    const {
        avatar = false,
        chevron = false,
        classes = {},
        dense = false,
        divider,
        hidePadding = false,
        icon,
        leftComponent,
        onClick,
        rightComponent,
        style,
        subtitle,
        subtitleSeparator = '\u00B7',
        title,
        ripple = false,
        wrapSubtitle = false,
        wrapTitle = false,
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
            return <Chevron color={'inherit'} className={combine('rightComponent')} />;
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

    return (
        <ListItem
            button={onClick && ripple ? true : undefined}
            className={combine('root')}
            style={style}
            dense={dense}
            onClick={onClick ? (): void => onClick() : undefined}
        >
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
