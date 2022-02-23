import { CSSProperties } from '@mui/styles';
import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type SpacerProps = HTMLAttributes<HTMLDivElement> & {
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
    style?: CSSProperties;
};
export type SpacerClasses = {
    root?: string;
};

const SpacerRender: React.ForwardRefRenderFunction<unknown, SpacerProps> = (props: SpacerProps, ref: any) => {
    const { children, classes, flex, height, style, width, ...otherDivProps } = props;

    return (
        <div
            ref={ref}
            data-test={'spacer-root'}
            className={clsx(classes.root)}
            style={Object.assign(
                {
                    flex: `${flex} ${flex} ${flex === 0 ? 'auto' : '0px'}`,
                    height: height || 'auto',
                    width: width || 'auto',
                },
                { ...style }
            )}
            {...otherDivProps}
        >
            {children}
        </div>
    );
};
/**
 * [Spacer](https://brightlayer-ui-components.github.io/react/?path=/info/components-spacer--get-read-me-story) component
 *
 * An invisible utility component that acts as a spacer element in various layouts. It works with flexbox sizing or fixed sizing.
 */
export const Spacer = React.forwardRef(SpacerRender);

Spacer.displayName = 'Spacer';
Spacer.propTypes = {
    flex: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
};
Spacer.defaultProps = {
    flex: 1,
    classes: {},
};
