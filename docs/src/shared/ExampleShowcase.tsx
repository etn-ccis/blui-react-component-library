import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Theme, SxProps, useTheme } from '@mui/material/styles';
import * as colors from '@brightlayer-ui/colors';

export type ExampleShowcaseProps = BoxProps & {
    sx?: SxProps<Theme>;
};

export const ExampleShowcase = React.forwardRef((props: ExampleShowcaseProps, ref): JSX.Element => {
    const theme = useTheme();
    return (
        <Box
            ref={ref}
            sx={{
                my: 2,
                backgroundColor: colors.white[600],
                ...theme.applyStyles('dark', {
                    backgroundColor: colors.darkBlack[300],
                }),
                p: 4,
                color: 'text.primary',
                borderRadius: '4px',
                ...props.sx,
            }}
        >
            {props.children}
        </Box>
    );
});
