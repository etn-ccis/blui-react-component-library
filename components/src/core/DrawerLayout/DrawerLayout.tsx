import React, { ReactNode } from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ScrollToTop from "./ScrollToTop";

export type DrawerLayoutProps = {
    children: React.ReactNode;
    drawer: ReactNode;
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
    },
});

export const DrawerLayout: React.FC<DrawerLayoutProps> = (props) => {
    const { children, drawer } = props;
    const classes = useStyles(useTheme());
    return (
        <ScrollToTop>
            <div className={classes.root}>
                <div className={classes.drawer}>{drawer}</div>
                <div className={classes.content}>{children}</div>
            </div>
        </ScrollToTop>
    );
};

DrawerLayout.displayName = 'DrawerLayout';
DrawerLayout.propTypes = {
    children: PropTypes.element.isRequired,
    drawer: PropTypes.element.isRequired,
};
