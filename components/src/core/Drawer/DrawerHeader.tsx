import React, { ReactNode, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { useDrawerContext } from './DrawerContext';
import clsx from 'clsx';

type DrawerHeaderClasses = {
    root?: string;
    background?: string;
    content?: string;
    navigation?: string;
    nonCLickable?: string;
    nonClickableIcon?: string;
    railIcon?: string;
    subtitle?: string;
    title?: string;
};

export type DrawerHeaderProps = ToolbarProps & {
    /** The color used for the background */
    backgroundColor?: string;
    /** An image to display in the header */
    backgroundImage?: string;
    /** The opacity of the background image
     *
     *  Default: 0.3
     */
    backgroundOpacity?: number;
    /** Custom classes for default style overrides */
    classes?: DrawerHeaderClasses;
    /** Optional divider which appears beneath header */
    divider?: boolean;
    /** The color of the text elements
     *
     *  Default: false
     */
    fontColor?: string;
    /** A component to render for the icon  */
    icon?: ReactNode;
    /** A function to execute when the icon is clicked
     *
     * Default: `() => {}`
     */
    onIconClick?: () => void;
    /** The text to show on the second line */
    subtitle?: string;
    /** The text to show on the first line */
    title?: string;
    /** Custom content for header title area */
    titleContent?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingRight: 0,
            paddingLeft: 0,
            width: '100%',
            alignItems: 'center',
            boxSizing: 'border-box',
            minHeight: `4rem`,
            [theme.breakpoints.down('xs')]: {
                minHeight: `3.5rem`,
            },
            backgroundColor: (props: DrawerHeaderProps): string =>
                props.backgroundColor ||
                (theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main),
            color: (props: DrawerHeaderProps): string =>
                props.fontColor ||
                theme.palette.getContrastText(
                    props.backgroundColor ||
                        (theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main)
                ),
        },
        background: {
            position: 'absolute',
            zIndex: 0,
            width: '100%',
            backgroundSize: 'cover',
            height: '100%',
            backgroundPosition: 'center',
            backgroundImage: (props: DrawerHeaderProps): string => `url(${props.backgroundImage})`,
            opacity: (props: DrawerHeaderProps): number => props.backgroundOpacity,
        },
        content: {
            marginLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            minHeight: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'stretch',
            flexDirection: 'column',
            width: 'calc(100% - 2.5rem - 32px)',
            boxSizing: 'border-box',
            zIndex: 1,
            [theme.breakpoints.down('xs')]: {
                minHeight: `3.5rem`,
            },
        },
        navigation: {
            marginLeft: theme.spacing(2),
            minWidth: '2.5rem',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            zIndex: 1,
        },
        nonClickable: {},
        nonClickableIcon: {
            display: 'flex',
            padding: 0,
        },
        railIcon: {
            marginLeft: theme.spacing(0.5),
            minWidth: 'calc(3.5rem + 16px)',
            justifyContent: 'center',
            '&$nonClickable': {
                marginLeft: 0,
            },
        },
        subtitle: {
            lineHeight: '1.2rem', // Anything lower than 1.2rem cuts off bottom text of 'g' or 'y'.
            marginTop: '-0.125rem',
        },
        title: {
            fontWeight: 600,
            lineHeight: '1.6rem', // Anything lower than 1.6rem cuts off bottom text of 'g' or 'y'.
        },
    })
);

const DrawerHeaderRender: React.ForwardRefRenderFunction<unknown, DrawerHeaderProps> = (
    props: DrawerHeaderProps,
    ref: any
) => {
    const defaultClasses = useStyles(props);
    const {
        backgroundImage,
        classes,
        divider,
        icon,
        onIconClick,
        subtitle,
        title,
        titleContent,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        backgroundOpacity,
        fontColor,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherToolbarProps
    } = props;

    const { variant = 'persistent', condensed = false } = useDrawerContext();

    const getHeaderContent = useCallback(
        (): ReactNode =>
            titleContent || (
                <div className={clsx(defaultClasses.content, classes.content)}>
                    <Typography
                        noWrap
                        variant={'h6'}
                        className={clsx(defaultClasses.title, classes.title)}
                        data-test={'drawer-header-title'}
                    >
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography
                            noWrap
                            variant={'body2'}
                            className={clsx(defaultClasses.subtitle, classes.subtitle)}
                            data-test={'drawer-header-subtitle'}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </div>
            ),
        [defaultClasses, classes, title, subtitle, titleContent]
    );

    const getBackgroundImage = useCallback(
        (): JSX.Element | null =>
            backgroundImage ? <div className={clsx(defaultClasses.background, classes.background)} /> : null,
        [backgroundImage, defaultClasses, classes]
    );

    return (
        <>
            <Toolbar ref={ref} className={clsx(defaultClasses.root, classes.root)} {...otherToolbarProps}>
                {getBackgroundImage()}
                {icon && (
                    <div
                        className={clsx(defaultClasses.navigation, classes.navigation, {
                            [defaultClasses.railIcon]: variant === 'rail' && !condensed,
                            [classes.railIcon]: variant === 'rail' && !condensed && classes.railIcon,
                            [defaultClasses.nonClickable]: variant === 'rail' && !condensed && !onIconClick,
                        })}
                    >
                        {onIconClick && (
                            <IconButton
                                color={'inherit'}
                                onClick={(): void => {
                                    onIconClick();
                                }}
                                edge={'start'}
                            >
                                {icon}
                            </IconButton>
                        )}
                        {!onIconClick && (
                            <div className={clsx(defaultClasses.nonClickableIcon, classes.nonClickableIcon)}>
                                {icon}
                            </div>
                        )}
                    </div>
                )}
                {getHeaderContent()}
            </Toolbar>
            {divider && <Divider />}
        </>
    );
};
/**
 * [DrawerHeader](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) component
 *
 * The `<DrawerHeader>` contains the content at the top of the `<Drawer>`. By default, it renders multiple lines of text in the Brightlayer UI style. If you supply a `titleContent`, you can render your own custom content in the title area.
 */
export const DrawerHeader = React.forwardRef(DrawerHeaderRender);

DrawerHeader.displayName = 'DrawerHeader';
DrawerHeader.defaultProps = {
    backgroundOpacity: 0.3,
    classes: {},
    divider: false,
};
DrawerHeader.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundOpacity: PropTypes.number,
    classes: PropTypes.shape({
        root: PropTypes.string,
        background: PropTypes.string,
        content: PropTypes.string,
        navigation: PropTypes.string,
        nonClickableIcon: PropTypes.string,
        railIcon: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string,
    }),
    divider: PropTypes.bool,
    fontColor: PropTypes.string,
    icon: PropTypes.element,
    onIconClick: PropTypes.func,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    titleContent: PropTypes.element,
};
