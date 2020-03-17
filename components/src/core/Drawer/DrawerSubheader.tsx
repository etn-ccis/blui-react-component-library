import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

type DrawerSubheaderClasses = {
    root?: string;
};
export type DrawerSubheaderProps = {
    classes: DrawerSubheaderClasses;
    open?: boolean;
};

export const DrawerSubheader: React.FC<DrawerSubheaderProps> = (props) => (
    <>
        <div style={{ visibility: props.open ? 'inherit' : 'hidden' }} className={props.classes.root}>
            {props.children}
        </div>
        <Divider />
    </>
);

DrawerSubheader.displayName = 'DrawerSubheader';

DrawerSubheader.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    open: PropTypes.bool,
};

DrawerSubheader.defaultProps = {
    classes: {},
};
