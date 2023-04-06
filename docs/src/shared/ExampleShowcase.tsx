import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Theme, SxProps } from '@mui/material/styles';
import * as colors from '@brightlayer-ui/colors';

export type ExampleShowcaseProps = BoxProps & {
    sx?: SxProps<Theme>;
};

export const ExampleShowcase = React.forwardRef(
    (props: ExampleShowcaseProps, ref): JSX.Element => (
        <Box
            ref={ref}
            sx={{
                my: 2,
                backgroundColor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? colors.white[600] : colors.darkBlack[300],
                p: 4,
                color: 'text.primary',
                borderRadius: '4px',
                ...props.sx,
            }}
        >
            {props.children}
        </Box>
    )
);
