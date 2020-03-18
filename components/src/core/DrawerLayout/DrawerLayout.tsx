import React, { ReactNode } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

export type DrawerLayoutProps = {
    children: React.ReactNode;
    drawer: ReactNode;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    drawer: {
        display: 'flex',
        position: 'fixed',
        height: '100%',
        alignItems: 'stretch',
    },
    content: {
        width: '100%',
        height: '100%',
        transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0!important',
        },
    },
}));

export const DrawerLayout: React.FC<DrawerLayoutProps> = (props) => {
    const { children, drawer } = props;
    const classes = useStyles(useTheme());
    return (
        <div className={classes.root}>
            <div className={classes.drawer}>{drawer}</div>
            <div id={'@@pxb-drawerlayout-content'} className={classes.content}>
                {children}
            </div>
        </div>
    );
};

DrawerLayout.displayName = 'DrawerLayout';
DrawerLayout.propTypes = {
    children: PropTypes.element.isRequired,
    drawer: PropTypes.element.isRequired,
};
