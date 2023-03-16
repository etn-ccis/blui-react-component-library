import React, { HTMLAttributes, useMemo } from 'react';
import { PAGE_WIDTH, PADDING } from '../shared';

export type PageContentProps = HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean;
    backgroundColor?: string;
    wideLayout?: boolean;
};

export const PageContent: React.FC<PageContentProps> = (props): JSX.Element => {
    const { noPadding, children, style, wideLayout, ...other } = props;
    const pageBodyWidth = useMemo((): number => {
        if (wideLayout) {
            return PAGE_WIDTH.WIDE;
        }
        return PAGE_WIDTH.REGULAR;
    }, [wideLayout]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
                style={Object.assign(
                    {
                        width: '100%',
                        padding: noPadding ? 0 : PADDING,
                        maxWidth: pageBodyWidth,
                    },
                    style
                )}
                {...other}
            >
                {children}
            </div>
        </div>
    );
};
