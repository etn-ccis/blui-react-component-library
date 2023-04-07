import React from 'react';
import { Divider as MuiDivider, DividerProps as MuiDividerProps } from '@mui/material';
import { PAGE_WIDTH } from '../shared';

type DividerProps = MuiDividerProps & {
    wide?: true;
};

export const Divider: React.FC<DividerProps> = (props): JSX.Element => (
    <MuiDivider
        sx={{
            width: props.wide ? PAGE_WIDTH.WIDE : PAGE_WIDTH.REGULAR,
            maxWidth: '100%',
            my: 5,
            mx: 'auto',
        }}
        {...props}
    />
);
