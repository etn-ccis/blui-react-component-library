import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Divider, makeStyles } from '@material-ui/core';
import { useDrawerContext } from './DrawerContext';
import clsx from 'clsx';

export type DrawerFooterProps = HTMLAttributes<HTMLDivElement> & {
    backgroundColor?: string;
    divider?: boolean;
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
        hideContentOnCollapse,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherDivProps
    } = props;
    const { open: drawerOpen } = useDrawerContext();
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

// TODO FIX ME
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
