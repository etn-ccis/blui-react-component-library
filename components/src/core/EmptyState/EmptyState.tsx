import React, { HTMLAttributes, ReactNode } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export type EmptyStateClasses = {
    root?: string;
    actions?: string;
    description?: string;
    icon?: string;
    title?: string;
};

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
    actions?: ReactNode;
    classes?: EmptyStateClasses;
    description?: ReactNode;
    icon: ReactNode;
    title: ReactNode;
};

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        color: theme.palette.text.primary,
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.palette.text.secondary,
        marginBottom: '1rem', //theme.spacing(2),
        display: 'flex',
        fontSize: 96,
    },
    description: {
        color: theme.palette.type === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
    },
    actions: {
        marginTop: '1rem', // theme.spacing(2)
    },
}));

const EmptyStateRender: React.ForwardRefRenderFunction<unknown, EmptyStateProps> = (
    props: EmptyStateProps,
    ref: any
) => {
    const { actions, classes, description, icon, title, ...otherDivProps } = props;
    const defaultClasses = useStyles(useTheme());
    return (
        <div ref={ref} className={clsx(defaultClasses.root, classes.root)} data-test={'frame'} {...otherDivProps}>
            {icon && <div className={clsx(defaultClasses.icon, classes.icon)}>{icon}</div>}
            <Typography variant="h6" color="inherit" className={classes.title}>
                {title}
            </Typography>
            {description && (
                <Typography
                    variant="subtitle2"
                    color={'textSecondary'}
                    className={clsx(defaultClasses.description, classes.description)}
                >
                    {description}
                </Typography>
            )}
            {actions && <div className={clsx(defaultClasses.actions, classes.actions)}>{actions}</div>}
        </div>
    );
};

export const EmptyState = React.forwardRef(EmptyStateRender);

EmptyState.displayName = 'EmptyState';
EmptyState.propTypes = {
    actions: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        actions: PropTypes.string,
    }),
    description: PropTypes.node,
    icon: PropTypes.node.isRequired,
    //  @ts-ignore should be node but typescript throws an error here
    title: PropTypes.node.isRequired,
};
EmptyState.defaultProps = {
    classes: {},
};
