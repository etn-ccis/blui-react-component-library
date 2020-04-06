import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export type DrawerFooterProps = {
    backgroundColor?: string;
    drawerOpen?: boolean;
};

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
    const classes = useStyles(props);
    const { children, backgroundColor, drawerOpen } = props;
    return (
        <div
            className={classes.root}
            style={{
                visibility: drawerOpen ? 'inherit' : 'hidden',
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </div>
    );
};

DrawerFooter.displayName = 'DrawerFooter';
