import React, { ReactNode, HTMLAttributes } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
        },
        drawer: {
            display: 'flex',
            position: 'fixed',
            height: '100%',
            alignItems: 'stretch',
        },
        content: {
            width: '100%',
            transition: 'padding 175ms cubic-bezier(.4, 0, .2, 1)',
            [theme.breakpoints.down('xs')]: {
                paddingLeft: '0!important',
            },
        },
    })
);

type DrawerLayoutClasses = {
    root?: string;
    content?: string;
    drawer?: string;
};

export type DrawerLayoutProps = HTMLAttributes<HTMLDivElement> & {
    classes?: DrawerLayoutClasses;
    // Drawer component to be embedded
    drawer: ReactNode;
};

export const DrawerLayout: React.FC<DrawerLayoutProps> = (props) => {
    const { children, drawer, classes, ...otherDivProps } = props;
    const defaultClasses = useStyles(useTheme());
    return (
        <div className={clsx(defaultClasses.root, classes.root)} {...otherDivProps}>
            <div className={clsx(defaultClasses.drawer, classes.drawer)}>{drawer}</div>
            <div id={'@@pxb-drawerlayout-content'} className={clsx(defaultClasses.content, classes.content)}>
                {children}
            </div>
        </div>
    );
};

DrawerLayout.displayName = 'DrawerLayout';
DrawerLayout.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        content: PropTypes.string,
        drawer: PropTypes.string,
    }),
    drawer: PropTypes.element.isRequired,
};
DrawerLayout.defaultProps = {
    classes: {},
};
