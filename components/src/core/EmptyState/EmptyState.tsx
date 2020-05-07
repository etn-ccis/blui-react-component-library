import React, { HTMLAttributes } from 'react';
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
    actions?: JSX.Element;
    classes?: EmptyStateClasses;
    description?: string;
    icon: JSX.Element;
    title: string;
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
        marginBottom: theme.spacing(2),
        display: 'flex',
        fontSize: 100,
    },
    actions: {
        marginTop: theme.spacing(1),
    },
}));

export const EmptyState: React.FC<EmptyStateProps> = (props) => {
    const { actions, classes, description, icon, title, ...otherDivProps } = props;
    const defaultClasses = useStyles(useTheme());
    return (
        <div className={clsx(defaultClasses.root, classes.root)} data-test={'frame'} {...otherDivProps}>
            {icon && <div className={clsx(defaultClasses.icon, classes.icon)}>{icon}</div>}
            <Typography variant="h6" color="inherit" className={classes.title}>
                {title}
            </Typography>
            {description && (
                <Typography variant="subtitle2" color="primary" className={classes.description}>
                    {description}
                </Typography>
            )}
            {actions && <div className={clsx(defaultClasses.actions, classes.actions)}>{actions}</div>}
        </div>
    );
};
EmptyState.displayName = 'EmptyState';
EmptyState.propTypes = {
    actions: PropTypes.element,
    classes: PropTypes.shape({
        root: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        actions: PropTypes.string,
    }),
    description: PropTypes.string,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
};
EmptyState.defaultProps = {
    classes: {},
};
