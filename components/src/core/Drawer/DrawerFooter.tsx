import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

type DrawerFooterClasses = {
    root?: string;
};

export type DrawerFooterProps = {
    backgroundColor?: string;
    classes: DrawerFooterClasses;
    open?: boolean;
};

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
    const defaultClasses = useStyles(props);
    const { backgroundColor, children, classes, open } = props;
    return (
        <div
            className={clsx(defaultClasses.root, classes.root)}
            style={{
                visibility: open ? 'inherit' : 'hidden',
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </div>
    );
};

DrawerFooter.displayName = 'DrawerFooter';

DrawerFooter.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    open: PropTypes.bool,
};

DrawerFooter.defaultProps = {
    classes: {},
};
