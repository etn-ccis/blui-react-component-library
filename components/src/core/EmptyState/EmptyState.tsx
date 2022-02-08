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
    /** Additional components to render below */
    actions?: ReactNode;
    /** Custom classes for default style overrides */
    classes?: EmptyStateClasses;
    /** The secondary text to display */
    description?: ReactNode;
    /** The primary icon  */
    icon: ReactNode;
    /** The main text to display */
    title: ReactNode;
};

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
        height: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        padding: '1rem',
    },
    icon: {
        color: theme.palette.text.secondary,
        marginBottom: '1rem',
        display: 'flex',
        fontSize: 96,
    },
    description: {
        color: theme.palette.type === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
    },
    actions: {
        marginTop: '1rem',
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
/**
 * [EmptyState](https://brightlayer-ui-components.github.io/react/?path=/info/components-empty-state--get-read-me-story) component
 *
 * The `<EmptyState>` component is an element that can be used as a placeholder when no data is present (such as an empty list, or a placeholder page for future content). This is only used when no data is available, rather than during loading (see [empty states pattern](https://brightlayer-ui.github.io/patterns/empty-states)).
 */
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
