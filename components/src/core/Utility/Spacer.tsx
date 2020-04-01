import { CSSProperties } from '@material-ui/styles';
import React from 'react';
import clsx from 'clsx';

export type SpacerProps = {
    flex?: number;
    height?: number;
    width?: number;
    classes?: SpacerClasses;
    style?: CSSProperties;
};
export type SpacerClasses = {
    root?: string;
};

export const Spacer: React.FC<SpacerProps> = (props) => {
    const { children, classes = {}, flex = 1, height, style, width } = props;

    return (
        <div
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
        >
            {children}
        </div>
    );
};

Spacer.displayName = 'Spacer';
