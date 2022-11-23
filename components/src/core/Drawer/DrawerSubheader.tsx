import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useDrawerContext } from './DrawerContext';
import Divider from '@mui/material/Divider';

export type DrawerSubheaderProps = HTMLAttributes<HTMLDivElement> & {
    /** Optional divider which appears below the Subheader
     *
     * Default: true
     */
    divider?: boolean;
    /** Hide subheader contents when drawer is closed
     *
     * Default: true
     */
    hideContentOnCollapse?: boolean;
};

const DrawerSubheaderRender: React.ForwardRefRenderFunction<unknown, DrawerSubheaderProps> = (
    props: DrawerSubheaderProps,
    ref: any
) => {
    const { children, divider = true, hideContentOnCollapse = true, ...otherDivProps } = props;
    const { open: drawerOpen = true } = useDrawerContext();
    return (
        <>
            <div
                ref={ref}
                data-testid={'drawer-sub-header'}
                style={{ visibility: drawerOpen || !hideContentOnCollapse ? 'inherit' : 'hidden' }}
                {...otherDivProps}
            >
                {children}
            </div>
            {divider && <Divider />}
        </>
    );
};
/**
 * [DrawerSubheader](https://brightlayer-ui-components.github.io/react/components/drawer-subheader) component
 *
 * The `<DrawerSubheader>` is an optional section that renders below the header and above the body of the `<Drawer>`. It can be used to support custom content (passed as children), such as filtering options or to display additional information.
 */
export const DrawerSubheader = React.forwardRef(DrawerSubheaderRender);

DrawerSubheader.displayName = 'DrawerSubheader';
DrawerSubheader.propTypes = {
    divider: PropTypes.bool,
    hideContentOnCollapse: PropTypes.bool,
};
