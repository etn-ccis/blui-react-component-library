import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

export type EmptyStateClasses = {
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

const useStyles = makeStyles((theme) => ({
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
        marginBottom: theme.spacing(2),
        display: 'flex',
        fontSize: 100,
    },
    actions: {
        marginTop: theme.spacing(1),
    },
}));

export const EmptyState: React.FC<EmptyStateProps> = (props) => {
    const { actions, classes = {}, description, icon, title } = props;
    const defaultClasses = useStyles(useTheme());
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
