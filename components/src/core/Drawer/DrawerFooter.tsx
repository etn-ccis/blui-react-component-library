import React, { HTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export type DrawerFooterProps = HTMLAttributes<HTMLDivElement> & {
    backgroundColor?: string;
    drawerOpen?: boolean;
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: (props: DrawerFooterProps): string => props.backgroundColor,
        visibility: (props: DrawerFooterProps): 'inherit' | 'hidden' => (props.drawerOpen ? 'inherit' : 'hidden'),
    },
});

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
    const classes = useStyles(props);
    const {
        children,
        // leaving those here to allow prop transferring
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        drawerOpen,
        /* eslint-disable @typescript-eslint/no-unused-vars */
        ...otherDivProps
    } = props;
    return (
        <div className={classes.root} {...otherDivProps}>
            {children}
        </div>
    );
};

DrawerFooter.displayName = 'DrawerFooter';
