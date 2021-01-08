import React, { ReactElement, HTMLAttributes, useState } from 'react';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { DrawerComponentProps } from '../Drawer/Drawer';
import { DrawerLayoutContext } from './contexts/DrawerLayoutContextProvider';

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
            zIndex: 1000,
        },
        content: {
            width: '100%',
            transition: theme.transitions.create('padding'),
            zIndex: 0,
        },
    })
);

export type DrawerLayoutClasses = {
    root?: string;
    content?: string;
    drawer?: string;
};

export type DrawerLayoutProps = HTMLAttributes<HTMLDivElement> & {
    classes?: DrawerLayoutClasses;
    // Drawer component to be embedded
    drawer: ReactElement<DrawerComponentProps>;
};

const DrawerLayoutRender: React.ForwardRefRenderFunction<unknown, DrawerLayoutProps> = (
    props: DrawerLayoutProps,
    ref: any
) => {
    const { children, drawer, classes, ...otherDivProps } = props;
    const theme = useTheme();
    const [padding, setPadding] = useState(0);
    const defaultClasses = useStyles();

    const style = { paddingLeft: 0, paddingRight: 0 };
    style.paddingLeft = theme.direction === 'ltr' ? padding : 0;
    style.paddingRight = theme.direction === 'rtl' ? padding : 0;

    return (
        <DrawerLayoutContext.Provider
            value={{
                onPaddingChange: (width: number): void => {
                    setPadding(width);
                },
            }}
        >
            <div ref={ref} className={clsx(defaultClasses.root, classes.root)} {...otherDivProps}>
                <div className={clsx(defaultClasses.drawer, classes.drawer)}>{drawer}</div>
                <div className={clsx(defaultClasses.content, classes.content)} style={style}>
                    {children}
                </div>
            </div>
        </DrawerLayoutContext.Provider>
    );
};

export const DrawerLayout = React.forwardRef(DrawerLayoutRender);
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
