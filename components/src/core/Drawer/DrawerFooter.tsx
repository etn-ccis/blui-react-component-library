import React, { HTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

export type DrawerFooterProps = HTMLAttributes<HTMLDivElement> & {
    backgroundColor?: string;
    drawerOpen?: boolean;
    divider?: boolean;
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: (props: DrawerFooterProps): string => props.backgroundColor,
        visibility: (props: DrawerFooterProps): 'inherit' | 'hidden' => (props.drawerOpen ? 'inherit' : 'hidden'),
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
        drawerOpen,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherDivProps
    } = props;
    return (
        <>
            {divider && <Divider />}
            <div ref={ref} className={classes.root} {...otherDivProps}>
                {children}
            </div>
        </>
    );
};

export const DrawerFooter = React.forwardRef(DrawerFooterRender);
DrawerFooter.displayName = 'DrawerFooter';
