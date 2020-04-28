import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export type DrawerFooterProps = {
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
    const { children, drawerOpen } = props;
    return (
        <div
            className={classes.root}
            style={{
                visibility: drawerOpen ? 'inherit' : 'hidden',
            }}
        >
            {children}
        </div>
    );
};

DrawerFooter.displayName = 'DrawerFooter';
