import React from 'react';
import PropTypes from 'prop-types';
import { Box, BoxProps } from '@mui/material';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { SpacerClasses, getSpacerUtilityClass, SpacerClassKey } from './SpacerClasses';
import { cx } from '@emotion/css';
import { styled } from '@mui/material/styles';

const useUtilityClasses = (ownerState: SpacerProps): Record<SpacerClassKey, string> => {
    const { classes } = ownerState;
    const slots = {
        root: ['root'],
    };

    return composeClasses(slots, getSpacerUtilityClass, classes);
};

export type SpacerProps = BoxProps & {
    /** Flex grow/shrink value for flex layouts
     *
     * Default: 1
     */
    flex?: number;
    /** Height (in px) for static layouts */
    height?: number | string;
    /** Width (in px) for static layouts */
    width?: number | string;
    /** Custom classes for default style overrides */
    classes?: SpacerClasses;
};

const Root = styled(Box, {
    name: 'spacer',
    slot: 'root',
})<Pick<SpacerProps, 'flex' | 'height' | 'width'>>(({ flex, height, width }) => ({
    flex: `${flex} ${flex} ${flex === 0 ? 'auto' : '0px'}`,
    height: height || 'auto',
    width: width || 'auto',
}));

const SpacerRender: React.ForwardRefRenderFunction<unknown, SpacerProps> = (props: SpacerProps, ref: any) => {
    const { children, classes, flex, height, width, ...otherProps } = props;
    const ownerState = {
        ...props,
    };
    const defaultClasses = useUtilityClasses(ownerState);

    return (
        <Root
            ref={ref}
            data-testid={'spacer-root'}
            flex={flex}
            height={height}
            width={width}
            className={cx(defaultClasses.root, classes.root)}
            {...otherProps}
        >
            {children}
        </Root>
    );
};
/**
 * [Spacer](https://brightlayer-ui-components.github.io/react/components/spacer) component
 *
 * An invisible utility component that acts as a spacer element in various layouts. It works with flexbox sizing or fixed sizing.
 */
export const Spacer = React.forwardRef(SpacerRender);

Spacer.displayName = 'Spacer';
Spacer.propTypes = {
    flex: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
};
Spacer.defaultProps = {
    flex: 1,
    classes: {},
};
