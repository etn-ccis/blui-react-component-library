import React from 'react';
import {createStyles, makeStyles, Theme,} from '@material-ui/core';
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
            transition: (props: ThreeLinerProps): string =>
                theme.transitions.create(['all'], {
                    duration: props.animationDuration || theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                }),
        },
        title: {
            fontSize: 30
        },
        subtitle: {
            fontSize: 16
        },
        info: {
            fontSize: 14,
            fontWeight: 300
        }
    })
);

export type ThreeLinerProps = {
    /**
     * First Line Content
     */
    title?: string | JSX.Element;

    /**
     * Second Line Content
     */
    subtitle?: string | JSX.Element;

    /**
     * Third Line Content
     */
    info?: string | JSX.Element;

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
    const {title, subtitle, info, classes = {}  } = props;
    const defaultClasses = useStyles(props);
    //const animationDuration = durationProp || theme.transitions.duration.standard;
    return (
        <div className={clsx(defaultClasses.root, classes.root)}>
            <div className={clsx(defaultClasses.title, classes.title)}>{title}</div>
            <div className={clsx(defaultClasses.subtitle, classes.subtitle)}>{subtitle}</div>
            <div className={clsx(defaultClasses.info, classes.info)}>{info}</div>
        </div>
    );
};
export const ThreeLiner = React.forwardRef(ThreeLinerRenderer);
ThreeLiner.displayName = 'ThreeLiner';