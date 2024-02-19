import React from 'react';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';
import { getHeroBannerUtilityClass, HeroBannerClasses, HeroBannerClassKey } from './HeroBannerClasses';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/base';

const useUtilityClasses = (ownerState: HeroBannerProps): Record<HeroBannerClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
    };

    return composeClasses(slots, getHeroBannerUtilityClass, classes);
};

export type HeroBannerProps = BoxProps & {
    /** Custom classes for default style overrides */
    classes?: HeroBannerClasses;
    /** Whether to show the line separator */
    divider?: boolean;
    /** Max number of children to display */
    limit?: number;
};

const Root = styled(
    Box,
    {}
)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const HeroBannerRender: React.ForwardRefRenderFunction<unknown, HeroBannerProps> = (
    props: HeroBannerProps,
    ref: any
) => {
    const { className: userClassName, divider, limit, ...otherProps } = props;
    const defaultClasses = useUtilityClasses(props);
    const isArray = Array.isArray(props.children);
    return (
        <>
            <Root
                ref={ref}
                data-testid={'blui-hero-banner-root'}
                className={cx(defaultClasses.root, userClassName)}
                {...otherProps}
            >
                {props.children &&
                    isArray &&
                    (props.children as React.ReactNode[]).slice(0, limit).map((child: any) => child)}
                {props.children && !isArray && <>{props.children}</>}
            </Root>
            {divider && <Divider />}
        </>
    );
};
/**
 * [HeroBanner](https://brightlayer-ui-components.github.io/react/components/hero) component
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
