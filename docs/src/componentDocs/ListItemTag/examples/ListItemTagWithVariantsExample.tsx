import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';
import Box from '@mui/material/Box';

export const ListItemTagWithVariantsExample = (): JSX.Element => (
    <Box sx={{ display: 'flex', flexDirection: 'column', '& .BluiListItemTag-root': { mb: 1, textAlign: 'center' } }}>
        <ListItemTag variant="overline" label="overline" />
        <ListItemTag variant="button" label="button" />
        <ListItemTag variant="h6" label="h6" />
    </Box>
);
