import React, { HTMLAttributes } from 'react';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

export type DrawerSubheaderProps = HTMLAttributes<HTMLDivElement> & {
    drawerOpen?: boolean;
};

export const DrawerSubheader: React.FC<DrawerSubheaderProps> = (props) => {
    const { children, drawerOpen, ...otherDivProps } = props;
    return (
        <>
            <div style={{ visibility: drawerOpen ? 'inherit' : 'hidden' }} {...otherDivProps}>
                {children}
            </div>
            <Divider />
        </>
    );
};

DrawerSubheader.displayName = 'DrawerSubheader';

DrawerSubheader.propTypes = {
    drawerOpen: PropTypes.bool,
};
