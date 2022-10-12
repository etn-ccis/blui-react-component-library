import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';
import Box from '@mui/material/Box';

export const ListItemTagExample = (): JSX.Element => (
    <Box>
        <ListItemTag label="Default Tag" />
        <ListItemTag sx={{ ml: 4 }} label="Custom Tag" fontColor="#424e54" backgroundColor="#f0cb2f" />
    </Box>
);
