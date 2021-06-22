import React, { HTMLAttributes, ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

export type ThreeLinerClasses = {
    root?: string;
    title?: string;
    subtitle?: string;
    info?: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: (props: ThreeLinerProps): string =>
                theme.transitions.create(['all'], {
                    duration: props.animationDuration || theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                }),
        },
        title: {
            fontSize: '1.875rem',
            transition: (props: ThreeLinerProps): string =>
                theme.transitions.create(['all'], {
                    duration: props.animationDuration || theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                }),
        },
        subtitle: {
            fontSize: '1rem',
            transition: (props: ThreeLinerProps): string =>
                theme.transitions.create(['all'], {
                    duration: props.animationDuration || theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                }),
        },
        info: {
            fontSize: '0.875rem',
            transition: (props: ThreeLinerProps): string =>
                theme.transitions.create(['all'], {
                    duration: props.animationDuration || theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                }),
            fontWeight: 300,
        },
    })
);

export type ThreeLinerProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * First Line Content
     */
    title?: ReactNode;

    /**
     * Second Line Content
     */
    subtitle?: ReactNode;

    /**
     * Third Line Content
     */
    info?: ReactNode;

    /**
     * Animation Duration
     */
    animationDuration?: number;

    /**
     * Custom classes to add to app bar elements
     * Default: none
     */
    classes?: Partial<ThreeLinerClasses>;
};

const ThreeLinerRenderer: React.ForwardRefRenderFunction<unknown, ThreeLinerProps> = (props: ThreeLinerProps) => {
    const {
        title,
        subtitle,
        info,
        classes = {},
        className,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        animationDuration,
        ...otherDivProps
    } = props;
    const defaultClasses = useStyles(props);
    //const animationDuration = durationProp || theme.transitions.duration.standard;
    return (
        <div {...otherDivProps} className={clsx(defaultClasses.root, classes.root, className)}>
            <div className={clsx(defaultClasses.title, classes.title)}>{title}</div>
            <div className={clsx(defaultClasses.subtitle, classes.subtitle)}>{subtitle}</div>
            <div className={clsx(defaultClasses.info, classes.info)}>{info}</div>
        </div>
    );
};
export const ThreeLiner = React.forwardRef(ThreeLinerRenderer);
ThreeLiner.displayName = 'ThreeLiner';
