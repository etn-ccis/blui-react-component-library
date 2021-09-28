import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { useDrawerContext } from './DrawerContext';
import clsx from 'clsx';

export type DrawerFooterProps = HTMLAttributes<HTMLDivElement> & {
    /** The color used for the background  */
    backgroundColor?: string;
    /** Optional divider which appears above footer
     *
     * Default: true
     */
    divider?: boolean;
    /** Hide footer contents when drawer is closed
     *
     * Default: true
     */
    hideContentOnCollapse?: boolean;
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: (props: DrawerFooterProps): string => props.backgroundColor,
    },
    hidden: {
        visibility: 'hidden',
    },
});

const DrawerFooterRender: React.ForwardRefRenderFunction<unknown, DrawerFooterProps> = (
    props: DrawerFooterProps,
    ref: any
) => {
    const classes = useStyles(props);
    const {
        children,
        divider = true,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        hideContentOnCollapse,
        ...otherDivProps
    } = props;
    const { open: drawerOpen = true } = useDrawerContext();
    return (
        <>
            {divider && <Divider />}
            <div
                ref={ref}
                className={clsx(classes.root, { [classes.hidden]: !drawerOpen && hideContentOnCollapse })}
                {...otherDivProps}
            >
                {children}
            </div>
        </>
    );
};

/**
 * [DrawerFooter](https://pxblue-components.github.io/react/?path=/info/components-drawer--get-read-me-story) component
 *
 * The `<DrawerFooter>` is an optional section that renders at the bottom of the `<Drawer>`. It can be used to add any custom content (as children).
 */
export const DrawerFooter = React.forwardRef(DrawerFooterRender);
DrawerFooter.displayName = 'DrawerFooter';
DrawerFooter.propTypes = {
    backgroundColor: PropTypes.string,
    divider: PropTypes.bool,
    hideContentOnCollapse: PropTypes.bool,
};
DrawerFooter.defaultProps = {
    divider: true,
    hideContentOnCollapse: true,
};
