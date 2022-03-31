import React, { HTMLAttributes } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Divider from '@mui/material/Divider';
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
    /** Whether to show the line separator */
    divider?: boolean;
    /** Max number of children to display */
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
/**
 * [HeroBanner](https://brightlayer-ui-components.github.io/react/?path=/info/components-hero--get-read-me-story) component
 *
 * The `<HeroBanner>` component is a simple wrapper component that is used to contain `<Hero>`s. It creates the flex container and sets up the spacing rules to display them. It accepts up to four `<Hero>` components as its children.
 */
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
