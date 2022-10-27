import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Theme, SxProps } from '@mui/material/styles';
import * as colors from '@brightlayer-ui/colors';

export type ExampleShowcaseProps = BoxProps & {
    sx?: SxProps<Theme>;
};

export const ExampleShowcase = (props: ExampleShowcaseProps): JSX.Element => (
    <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, borderRadius: '4px', ...props.sx }}>
        {props.children}
    </Box>
);