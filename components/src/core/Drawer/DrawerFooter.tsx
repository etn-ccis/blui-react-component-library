import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement> & {
    backgroundColor?: string;
    drawerOpen?: boolean;
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: (props: DrawerFooterProps): string => props.backgroundColor,
    },
});

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
    const classes = useStyles(props);
    const {
        children,
        drawerOpen,
        // leaving those here to allow prop transferring
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        /* eslint-disable @typescript-eslint/no-unused-vars */
        ...otherDivProps
    } = props;
    return (
        <div
            className={classes.root}
            style={{
                visibility: drawerOpen ? 'inherit' : 'hidden',
            }}
            {...otherDivProps}
        >
            {children}
        </div>
    );
};

DrawerFooter.displayName = 'DrawerFooter';
