import React, { HTMLAttributes } from 'react';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

export type DrawerSubheaderProps = HTMLAttributes<HTMLDivElement> & {
    drawerOpen?: boolean;
    hideContentOnCollapse?: boolean;
};

const DrawerSubheaderRender: React.ForwardRefRenderFunction<unknown, DrawerSubheaderProps> = (
    props: DrawerSubheaderProps,
    ref: any
) => {
    const { children, drawerOpen, hideContentOnCollapse = true, ...otherDivProps } = props;
    return (
        <>
            <div
                ref={ref}
                style={{ visibility: drawerOpen || !hideContentOnCollapse ? 'inherit' : 'hidden' }}
                {...otherDivProps}
            >
                {children}
            </div>
            <Divider />
        </>
    );
};
export const DrawerSubheader = React.forwardRef(DrawerSubheaderRender);

DrawerSubheader.displayName = 'DrawerSubheader';

DrawerSubheader.propTypes = {
    drawerOpen: PropTypes.bool,
};
