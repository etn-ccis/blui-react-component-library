import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import clsx from 'clsx';

type EmptyStateClasses = {
    root?: string;
    icon?: string;
    title?: string;
    description?: string;
    actions?: string;
};

export type EmptyStateProps = {
    actions?: JSX.Element;
    classes?: EmptyStateClasses;
    description?: string;
    icon: JSX.Element;
    title: string;
};

const useStyles = makeStyles({
    root: {
        height: '100%',
        color: Colors.gray[500],
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
    },
    icon: {
        marginBottom: 15,
        display: 'flex',
        fontSize: 100,
    },
    actions: {
        marginTop: 10,
    },
});

export const EmptyState: React.FC<EmptyStateProps> = (props) => {
    const { actions, classes, description, icon, title } = props;
    const defaultClasses = useStyles(props);
    return (
        <div className={clsx(defaultClasses.root, classes.root)} data-test={'frame'}>
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
