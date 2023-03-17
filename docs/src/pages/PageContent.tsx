import React, { HTMLAttributes, useMemo } from 'react';
import * as Colors from '@brightlayer-ui/colors';
import { useBackgroundColor } from '../hooks/useBackgroundColor';
import { PAGE_WIDTH, PADDING } from '../shared';

export type PageContentProps = HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean;
    backgroundColor?: string;
    wideLayout?: boolean;
};

export const PageContent: React.FC<PageContentProps> = (props): JSX.Element => {
    const { noPadding, children, style, backgroundColor, wideLayout, ...other } = props;
    const pageBodyWidth = useMemo((): number => {
        if (wideLayout) {
            return PAGE_WIDTH.WIDE;
        }
        return PAGE_WIDTH.REGULAR;
    }, [wideLayout]);

    useBackgroundColor(backgroundColor);

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
PageContent.displayName = 'PageContent';
PageContent.defaultProps = {
    backgroundColor: Colors.white[50],
};
