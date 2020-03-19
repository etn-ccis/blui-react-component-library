import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { DrawerProps, useMediaQuery } from '@material-ui/core';
import { Drawer } from '../Drawer';

export type DrawerLayoutProps = {
    // Page's body
    children: React.ReactNode;

    // Drawer component to be embedded
    drawer: JSX.Element | React.FC<DrawerProps>;

    // Change the drawer variant according to the break point
    variantBreakpoints?: {
        [key: string]: DrawerProps['variant'];
    };
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    drawer: {
        display: 'flex',
        alignItems: 'stretch',
    },
    content: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
    },
});

export const DrawerLayout: React.FC<DrawerLayoutProps> = (props) => {
    const theme = useTheme();
    const {
        children,
        drawer,
        variantBreakpoints = {
            [theme.breakpoints.down('xs')]: 'temporary',
            [theme.breakpoints.up('sm')]: 'persistent',
        },
    } = props;
    const classes = useStyles(props);
    const getDrawerContent = (): JSX.Element[] | JSX.Element => {
        // if the drawer is a JSX.Element
        const drawerElement = drawer as JSX.Element;
        if (drawerElement.type && drawerElement.type.displayName === 'PXBlueDrawer') {
            return Object.keys(variantBreakpoints).map(
                (bp): JSX.Element =>
                    useMediaQuery(bp) && <Drawer key={bp} variant={variantBreakpoints[bp]} {...drawerElement.props} />
            );
        }

        // if the drawer is a React.FC
        const drawerFC = drawer as React.FC<DrawerProps>;
        return Object.keys(variantBreakpoints).map(
            (bp): JSX.Element =>
                useMediaQuery(bp) &&
                drawerFC({
                    key: bp,
                    variant: variantBreakpoints,
                    ...drawerElement.props,
                })
        );
    };
    return (
        <div className={classes.root}>
            <div className={classes.drawer}>{getDrawerContent()}</div>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

DrawerLayout.displayName = 'DrawerLayout';
DrawerLayout.propTypes = {
    children: PropTypes.element.isRequired,
    drawer: PropTypes.element.isRequired,
};
