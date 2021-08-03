import React, { HTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export type HeroBannerClasses = {
    root?: string;
};

export type HeroBannerProps = HTMLAttributes<HTMLDivElement> & {
    /** Custom classes for default style overrides */
    classes?: HeroBannerClasses;
    divider?: boolean;
    limit?: number;
};

const HeroBannerRender: React.ForwardRefRenderFunction<unknown, HeroBannerProps> = (
    props: HeroBannerProps,
    ref: any
) => {
    const { classes, divider, limit, ...otherDivProps } = props;
    const defaultClasses = useStyles(props);
    const isArray = Array.isArray(props.children);
    return (
        <>
            <div ref={ref} className={clsx(defaultClasses.root, classes.root)} {...otherDivProps}>
                {props.children &&
                    isArray &&
                    (props.children as React.ReactNodeArray).slice(0, limit).map((child: any) => child)}
                {props.children && !isArray && <>{props.children}</>}
            </div>
            {divider && <Divider />}
        </>
    );
};

export const HeroBanner = React.forwardRef(HeroBannerRender);

HeroBanner.displayName = 'HeroBanner';
HeroBanner.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    divider: PropTypes.bool,
    limit: PropTypes.number,
};
HeroBanner.defaultProps = {
    classes: {},
    divider: false,
    limit: 4,
};
