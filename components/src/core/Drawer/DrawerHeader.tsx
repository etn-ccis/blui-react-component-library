import React, { ReactNode, useCallback } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { Typography, ToolbarProps } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

type DrawerHeaderClasses = {
    root?: string;
    background?: string;
    content?: string;
    navigation?: string;
    nonClickableIcon?: string;
    subtitle?: string;
    title?: string;
};

export type DrawerHeaderProps = ToolbarProps & {
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOpacity?: number;
    classes?: DrawerHeaderClasses;
    fontColor?: string;
    icon?: ReactNode;
    onIconClick?: Function;
    subtitle?: string;
    title?: string;
    titleContent?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingRight: 0,
            paddingLeft: 0,
            width: '100%',
            alignItems: 'flex-start',
            boxSizing: 'border-box',
            backgroundColor: (props: DrawerHeaderProps): string => props.backgroundColor || theme.palette.primary.main,
            color: (props: DrawerHeaderProps): string =>
                props.fontColor || theme.palette.getContrastText(props.backgroundColor || theme.palette.primary.main),
        },
        content: {
            [theme.breakpoints.down('xs')]: {
                minHeight: theme.spacing(7),
            },
            marginLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            minHeight: theme.spacing(8),
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'stretch',
            flexDirection: 'column',
            width: 'calc(100% - 56px)',
            boxSizing: 'border-box',
            zIndex: 1,
        },
        navigation: {
            [theme.breakpoints.down('xs')]: {
                height: theme.spacing(7),
            },
            padding: theme.spacing(0.5),
            height: theme.spacing(8),
            display: 'flex',
            alignItems: 'center',
            zIndex: 1,
        },
        title: {
            fontWeight: 600,
            lineHeight: '1.6rem', // Anything lower than 1.6rem cuts off bottom text of 'g' or 'y'.
        },
        subtitle: {
            fontWeight: 300,
            lineHeight: '1.2rem', // Anything lower than 1.2rem cuts off bottom text of 'g' or 'y'.
            marginTop: '-2px',
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
        nonClickableIcon: {
            display: 'flex',
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
        },
    })
);

export const DrawerHeader: React.FC<DrawerHeaderProps> = (props) => {
    const defaultClasses = useStyles(props);
    const {
        backgroundImage,
        classes,
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
                            variant={'subtitle1'}
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
            <Toolbar className={clsx(defaultClasses.root, classes.root)} {...otherToolbarProps}>
                {getBackgroundImage()}
                {icon && (
                    <div className={clsx(defaultClasses.navigation, classes.navigation)}>
                        {onIconClick && (
                            <IconButton
                                color={'inherit'}
                                onClick={(): void => {
                                    onIconClick();
                                }}
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
            <Divider />
        </>
    );
};
DrawerHeader.displayName = 'DrawerHeader';
DrawerHeader.defaultProps = {
    backgroundOpacity: 0.3,
    classes: {},
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
        subtitle: PropTypes.string,
        title: PropTypes.string,
    }),
    fontColor: PropTypes.string,
    icon: PropTypes.element,
    onIconClick: PropTypes.func,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    titleContent: PropTypes.element,
};
