import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';
import Box from '@mui/material/Box';
import { ExampleShowcase } from '../../../shared';

export const ListItemTagWithVariantsExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
            sx={{ display: 'flex', flexDirection: 'column', '& .BluiListItemTag-root': { mb: 1, textAlign: 'center' } }}
        >
            <ListItemTag variant="overline" label="overline" />
            <ListItemTag variant="button" label="button" />
            <ListItemTag variant="h6" label="h6" />
        </Box>
    </ExampleShowcase>
);
