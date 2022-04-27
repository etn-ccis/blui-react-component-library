import React, { ReactNode, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { ListItemProps } from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chevron from '@mui/icons-material/ChevronRight';
import { separate, withKeys } from '../utilities';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { getInfoListItemUtilityClass, InfoListItemClassKey, InfoListItemClasses } from './InfoListItemClasses';
import { Root } from './InfoListItemRoot';

const MAX_SUBTITLE_ELEMENTS = 6;

const useUtilityClasses = (ownerState: InfoListItemProps): Record<InfoListItemClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        avatar: ['avatar'],
        divider: ['divider'],
        icon: ['icon'],
        info: ['info'],
        listItemText: ['listItemText'],
        listItemButtonRoot: ['listItemButtonRoot'],
        rightComponent: ['rightComponent'],
        separator: ['separator'],
        statusStripe: ['statusStripe'],
        subtitle: ['subtitle'],
        title: ['title'],
        chevron: ['chevron'],
        invisible: ['invisible'],
        flipIcon: ['flipIcon'],
    };

    return composeClasses(slots, getInfoListItemUtilityClass, classes);
};

export type DividerType = 'full' | 'partial';
export type InfoListItemProps = Omit<ListItemProps, 'title' | 'divider'> & {
    /** Show colored background for icon
     *
     * Default: false
     */
    avatar?: boolean;
    /** The color used for the background */
    backgroundColor?: string;
    /** Add a chevron icon on the right
     *
     * Default: false
     */
    chevron?: boolean;
    /** Color override for the chevron icon */
    chevronColor?: string;
    /** Custom classes for default style overrides */
    classes?: InfoListItemClasses;
    /** Show a row separator below the row */
    divider?: DividerType;
    /** Main text color */
    fontColor?: string;
    /** Remove left padding if no icon is used
     *
     * Default: false
     */
    hidePadding?: boolean;
    /** A component to render for the icon */
    icon?: JSX.Element;
    /** Color override for the row icon */
    iconColor?: string;
    /** Icon alignment when `avatar` is set to false
     *
     * Default: 'left
     */
    iconAlign?: 'left' | 'center' | 'right';
    /** The text to show on the third line */
    info?: string | Array<string | JSX.Element>;
    /** Component to render on the left side */
    leftComponent?: ReactNode;
    /** Component to render on the right side */
    rightComponent?: ReactNode;
    /** Whether to apply material ripple effect on click
     *
     * Default: false
     */
    ripple?: boolean;
    /** Status stripe and icon color */
    statusColor?: string;
    /** The text to show on the second line */
    subtitle?: string | Array<string | JSX.Element>;
    /** Separator character for subtitle and info
     *
     * Default: '·' ('\u00B7')
     */
    subtitleSeparator?: string;
    /** The text to show on the first line */
    title: ReactNode;
    /** Whether the info line text should wrap to multiple lines on overflow
     *
     * Default: false
     */
    wrapInfo?: boolean;
    /** Whether the subtitle line text should wrap to multiple lines on overflow
     *
     * Default: false
     */
    wrapSubtitle?: boolean;
    /** Whether the title line text should wrap to multiple lines on overflow
     *
     * Default: false
     */
    wrapTitle?: boolean;
    /** Used to override [ListItemButtom](https://mui.com/api/list-item-button/) default props */
    ListItemButtonProps?: Partial<MuiListItemButtonProps>;
};

const InfoListItemRender: React.ForwardRefRenderFunction<unknown, InfoListItemProps> = (
    props: InfoListItemProps,
    ref: any
) => {
    const defaultClasses = useUtilityClasses(props);
    const {
        avatar,
        chevron,
        classes,
        className: userClassName,
        divider,
        hidePadding,
        icon,
        leftComponent,
        rightComponent,
        ripple,
        subtitle,
        subtitleSeparator,
        info,
        title,
        wrapInfo,
        wrapSubtitle,
        wrapTitle,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        chevronColor,
        fontColor,
        iconAlign,
        iconColor,
        statusColor,
        ListItemButtonProps = {} as MuiListItemButtonProps,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherProps
    } = props;

    const combine = useCallback(
        (className: keyof InfoListItemClasses): string =>
            cx(defaultClasses[className], classes[className], userClassName),
        [defaultClasses, classes]
    );

    const getIcon = useCallback((): JSX.Element | undefined => {
        if (icon) {
            return (
                <ListItemAvatar style={{ minWidth: 'unset' }}>
                    <Avatar className={combine(avatar ? 'avatar' : 'icon')}>{icon}</Avatar>
                </ListItemAvatar>
            );
        } else if (!hidePadding) {
            return (
                // a dummy component to maintain the padding
                <ListItemAvatar style={{ minWidth: 'unset' }}>
                    <Avatar className={cx(defaultClasses.avatar, defaultClasses.invisible)} />
                </ListItemAvatar>
            );
        }
    }, [icon, avatar, hidePadding, combine]);

    const getRightComponent = useCallback((): JSX.Element | undefined => {
        if (rightComponent) {
            return <div className={combine('rightComponent')}>{rightComponent}</div>;
        } else if (chevron) {
            return (
                <Chevron
                    color={'inherit'}
                    role={'button'}
                    className={cx(combine('chevron'), defaultClasses.flipIcon)}
                />
            );
        }
    }, [rightComponent, chevron, combine]);

    const getSeparator = useCallback(
        (): JSX.Element => (
            <Typography className={combine('separator')} component={'span'}>
                {subtitleSeparator || '\u00B7'}
            </Typography>
        ),
        [combine, subtitleSeparator]
    );

    const getSubtitle = useCallback((): string | null => {
        if (!subtitle) {
            return null;
        }
        if (typeof subtitle === 'string') {
            return subtitle;
        }

        const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
        const renderableSubtitleParts = subtitleParts.splice(0, MAX_SUBTITLE_ELEMENTS);

        return withKeys(separate(renderableSubtitleParts, () => getSeparator()));
    }, [subtitle, getSeparator]);

    const getInfo = useCallback((): string | null => {
        if (!info) {
            return null;
        }
        if (typeof info === 'string') {
            return info;
        }

        const infoParts = Array.isArray(info) ? [...info] : [info];
        const renderableInfoParts = infoParts.splice(0, MAX_SUBTITLE_ELEMENTS);

        return withKeys(separate(renderableInfoParts, () => getSeparator()));
    }, [info, getSeparator]);

    const getInfloListItemContent = (
        <>
            <div className={combine('statusStripe')} data-test={'status-stripe'} />
            {divider && <Divider className={combine('divider')} />}
            {(icon || !hidePadding) && getIcon()}
            {leftComponent}
            <ListItemText
                primary={title}
                className={combine('listItemText')}
                secondary={
                    subtitle || info ? (
                        <>
                            {subtitle ? (
                                <Typography
                                    variant={'subtitle2'}
                                    component={'p'}
                                    noWrap={!wrapSubtitle}
                                    className={combine('subtitle')}
                                >
                                    {getSubtitle()}
                                </Typography>
                            ) : undefined}
                            {info ? (
                                <Typography variant={'body2'} noWrap={!wrapInfo} className={combine('info')}>
                                    {getInfo()}
                                </Typography>
                            ) : undefined}
                        </>
                    ) : undefined
                }
                primaryTypographyProps={{
                    noWrap: !wrapTitle,
                    variant: 'body1',
                    className: combine('title'),
                }}
                secondaryTypographyProps={{
                    variant: 'subtitle2',
                    color: 'textPrimary',
                }}
            />
            {getRightComponent()}
        </>
    );

    return (
        <Root className={combine('root')} ref={ref} {...otherProps}>
            {props.onClick && ripple ? (
                <ListItemButton className={combine('listItemButtonRoot')} focusRipple={ripple}>
                    {getInfloListItemContent}
                </ListItemButton>
            ) : (
                getInfloListItemContent
            )}
        </Root>
    );
};
/**
 * [InfoListItem](https://brightlayer-ui-components.github.io/react/?path=/info/components-info-list-item--get-read-me-story) component
 *
 * The `<InfoListItem>` is intended to be used in [`<List>`](https://material-ui.com/api/list/) views. It positions a title as well as optional subtitle(s), icon, and status stripe.
 */
export const InfoListItem = React.forwardRef(InfoListItemRender);

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
        chevron: PropTypes.string,
        separator: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string,
    }),
    divider: PropTypes.oneOf(['full', 'partial']),
    fontColor: PropTypes.string,
    hidePadding: PropTypes.bool,
    icon: PropTypes.element,
    iconAlign: PropTypes.oneOf(['left', 'right', 'center']),
    iconColor: PropTypes.string,
    info: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
    ]),
    leftComponent: PropTypes.node,
    rightComponent: PropTypes.node,
    statusColor: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
    ]),
    subtitleSeparator: PropTypes.string,
    title: PropTypes.node.isRequired,
    wrapInfo: PropTypes.bool,
    wrapSubtitle: PropTypes.bool,
    wrapTitle: PropTypes.bool,
};

InfoListItem.defaultProps = {
    avatar: false,
    chevron: false,
    classes: {},
    dense: false,
    hidePadding: false,
    iconAlign: 'left',
    ripple: false,
    subtitleSeparator: '\u00B7',
    wrapInfo: false,
    wrapSubtitle: false,
    wrapTitle: false,
    // @ts-ignore
    ListItemButtonProps: PropTypes.object,
};
