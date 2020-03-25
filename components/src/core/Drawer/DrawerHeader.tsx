import React, { ReactNode } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingRight: 0,
            paddingLeft: 0,
            width: '100%',
            alignItems: 'flex-start',
            boxSizing: 'border-box',
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
            lineHeight: '1.5rem',
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
        },
        nonClickableIcon: {
            display: 'flex',
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
        },
    })
);

type DrawerHeaderClasses = {
    root?: string;
    background?: string;
    content?: string;
    navigation?: string;
    nonClickableIcon?: string;
    subtitle?: string;
    title?: string;
};

export type DrawerHeaderProps = {
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

export const DrawerHeader: React.FC<DrawerHeaderProps> = (props) => {
    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    const {
        backgroundColor,
        backgroundImage,
        backgroundOpacity = 0.3,
        classes = {},
        icon,
        fontColor = theme.palette.getContrastText(backgroundColor || theme.palette.primary.main),
        onIconClick,
        subtitle,
        title,
        titleContent,
    } = props;

    const toolbarBackgroundColor = backgroundColor || theme.palette.primary.main;

    const getHeaderContent = (): ReactNode =>
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
        );

    const getBackgroundImage = (): ReactNode => (
        <>
            {backgroundImage && (
                <div
                    className={clsx(defaultClasses.background, classes.background)}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        opacity: backgroundOpacity,
                    }}
                />
            )}
        </>
    );

    return (
        <>
            <Toolbar
                className={clsx(defaultClasses.root, classes.root)}
                style={{ color: fontColor, backgroundColor: toolbarBackgroundColor }}
            >
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
