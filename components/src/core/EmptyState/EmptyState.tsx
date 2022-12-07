import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { cx } from '@emotion/css';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Box, { BoxProps } from '@mui/material/Box';
import { EmptyStateClasses, EmptyStateClassKey, getEmptyStateUtilityClass } from './EmptyStateClasses';
import { unstable_composeClasses as composeClasses } from '@mui/base';

const useUtilityClasses = (ownerState: EmptyStateProps): Record<EmptyStateClassKey, string> => {
    const { classes } = ownerState;
    const slots = {
        root: ['root'],
        actions: ['actions'],
        description: ['description'],
        icon: ['icon'],
        title: ['title'],
    };

    return composeClasses(slots, getEmptyStateUtilityClass, classes);
};

export type EmptyStateProps = BoxProps & {
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

const Root = styled(Box, {
    name: 'empty-state',
    slot: 'root',
})(({ theme }) => ({
    color: theme.palette.text.primary,
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    padding: '1rem',
}));

const Icon = styled(Box, {
    name: 'empty-state',
    slot: 'icon',
})(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: '1rem',
    display: 'flex',
    fontSize: 96,
}));

const Description = styled(Typography, {
    name: 'empty-state',
    slot: 'description',
})(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
}));

const Actions = styled(Box, {
    name: 'empty-state',
    slot: 'action',
})(() => ({
    marginTop: '1rem',
}));

const EmptyStateRender: React.ForwardRefRenderFunction<unknown, EmptyStateProps> = (
    props: EmptyStateProps,
    ref: any
) => {
    const { actions, classes, className: userClassName, description, icon, title, ...otherProps } = props;
    const defaultClasses = useUtilityClasses(props);

    return (
        <Root
            ref={ref}
            className={cx(defaultClasses.root, classes.root, userClassName)}
            data-testid={'blui-empty-state-root'}
            {...otherProps}
        >
            {icon && <Icon className={cx(defaultClasses.icon, classes.icon)}>{icon}</Icon>}
            {title &&
                (typeof title === 'string' ? (
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        {title}
                    </Typography>
                ) : (
                    title
                ))}
            {description &&
                (typeof description === 'string' ? (
                    <Description
                        variant="subtitle2"
                        color={'textSecondary'}
                        className={cx(defaultClasses.description, classes.description)}
                    >
                        {description}
                    </Description>
                ) : (
                    description
                ))}
            {actions && <Actions className={cx(defaultClasses.actions, classes.actions)}>{actions}</Actions>}
        </Root>
    );
};
/**
 * [EmptyState](https://brightlayer-ui-components.github.io/react/components/empty-state) component
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
