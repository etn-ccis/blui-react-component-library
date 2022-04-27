import React, { ReactNode } from 'react';
import { cx } from '@emotion/css';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThreeLinerClasses, ThreeLinerClassKey, getThreeLinerUtilityClass } from './ThreeLinerClasses';
import { unstable_composeClasses as composeClasses } from '@mui/base';

const useUtilityClasses = (ownerState: ThreeLinerProps): Record<ThreeLinerClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        title: ['title'],
        subtitle: ['subtitle'],
        info: ['info'],
    };

    return composeClasses(slots, getThreeLinerUtilityClass, classes);
};

export type ThreeLinerProps = BoxProps & {
    /** First Line Content */
    title?: ReactNode;

    /** Second Line Content */
    subtitle?: ReactNode;

    /** Third Line Content */
    info?: ReactNode;

    /** Time in milliseconds to transition between states
     *
     * Default: theme.transitions.duration.standard
     */
    animationDuration?: number;

    /** Custom classes for default style overrides */
    classes?: Partial<ThreeLinerClasses>;
};

const Root = styled(Box, {
    name: 'three-liner',
    slot: 'root',
})<Pick<ThreeLinerProps, 'animationDuration'>>(({ animationDuration, theme }) => ({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: theme.transitions.create(['all'], {
        duration: animationDuration || theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
    }),
}));

const Title = styled('div', {
    name: 'three-liner',
    slot: 'title',
})<Pick<ThreeLinerProps, 'animationDuration'>>(({ animationDuration, theme }) => ({
    fontSize: '1.875rem',
    transition: theme.transitions.create(['all'], {
        duration: animationDuration || theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
    }),
}));

const Subtitle = styled('div', {
    name: 'three-liner',
    slot: 'subtitle',
})<Pick<ThreeLinerProps, 'animationDuration'>>(({ animationDuration, theme }) => ({
    fontSize: '1rem',
    transition: theme.transitions.create(['all'], {
        duration: animationDuration || theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
    }),
}));

const Info = styled('div', {
    name: 'three-liner',
    slot: 'info',
})<Pick<ThreeLinerProps, 'animationDuration'>>(({ animationDuration, theme }) => ({
    fontSize: '0.875rem',
    transition: theme.transitions.create(['all'], {
        duration: animationDuration || theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
    }),
    fontWeight: 300,
}));

const ThreeLinerRenderer: React.ForwardRefRenderFunction<unknown, ThreeLinerProps> = (
    props: ThreeLinerProps,
    ref: any
) => {
    const {
        title,
        subtitle,
        info,
        classes = {},
        className: userClassName,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        animationDuration,
        ...otherProps
    } = props;
    const defaultClasses = useUtilityClasses(props);
    //const animationDuration = durationProp || theme.transitions.duration.standard;
    return (
        <Root
            ref={ref}
            {...otherProps}
            animationDuration={animationDuration}
            className={cx(defaultClasses.root, classes.root, userClassName)}
        >
            <Title className={cx(defaultClasses.title, classes.title)}>{title}</Title>
            <Subtitle className={cx(defaultClasses.subtitle, classes.subtitle)}>{subtitle}</Subtitle>
            <Info className={cx(defaultClasses.info, classes.info)}>{info}</Info>
        </Root>
    );
};
/**
 * [ThreeLiner](https://brightlayer-ui-components.github.io/react/?path=/info/components-three-liner--get-read-me-story) component
 *
 * The `ThreeLiner` can display up to three lines of stylized text or other custom content. It is most commonly used within the context of a [`AppBar`](./AppBar.md) component where the text can grow / shrink as the App Bar is expanded and collapsed.
 */
export const ThreeLiner = React.forwardRef(ThreeLinerRenderer);
ThreeLiner.displayName = 'ThreeLiner';
