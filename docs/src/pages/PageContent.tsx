import React, { HTMLAttributes, useMemo } from 'react';
// import * as Colors from '@brightlayer-ui/colors';
// import { useBackgroundColor } from '../hooks/useBackgroundColor';
import Box from '@mui/material/Box';
import { PAGE_WIDTH, PADDING } from '../shared';
import { useTheme } from '@mui/material/styles';

export type PageContentProps = HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean;
    wideLayout?: boolean;
};

export const PageContent: React.FC<PageContentProps> = (props): JSX.Element => {
    const theme = useTheme();
    const { noPadding, children, wideLayout, ...other } = props;
    const pageBodyWidth = useMemo((): number => {
        if (wideLayout) {
            return PAGE_WIDTH.WIDE;
        }
        return PAGE_WIDTH.REGULAR;
    }, [wideLayout]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: theme.palette.background.paper }}>
            <Box
                sx={{
                    width: '100%',
                    padding: noPadding ? 0 : `${PADDING}px`,
                    maxWidth: pageBodyWidth,
                }}
                {...other}
            >
                {children}
            </Box>
        </Box>
    );
};
