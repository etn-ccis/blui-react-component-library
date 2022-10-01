import React from 'react';
import Box from '@mui/material/Box';
import { ToolbarMenu } from '@brightlayer-ui/react-components';
import { Home } from '@mui/icons-material';

export const ToolbarMenuWithIconExample = (): JSX.Element => (
    <Box>
        <ToolbarMenu
            sx={{ maxWidth: 'inherit' }}
            label="My Home"
            icon={<Home />}
            menuGroups={[
                {
                    items: [{ title: 'London' }, { title: 'New York' }, { title: 'New Haven' }],
                },
            ]}
        />
    </Box>
);
