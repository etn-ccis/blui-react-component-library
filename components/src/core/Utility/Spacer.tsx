import { CSSProperties } from '@material-ui/styles';
import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type SpacerProps = HTMLAttributes<HTMLDivElement> & {
    flex?: number;
    height?: number | string;
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
