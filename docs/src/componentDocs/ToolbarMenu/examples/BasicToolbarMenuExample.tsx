import React from 'react';
import Box from '@mui/material/Box';
import { ToolbarMenu } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicToolbarMenuExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
            <ToolbarMenu
                label="label"
                menuGroups={[
                    {
                        items: [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }],
                    },
                ]}
            />
        </Box>
    </ExampleShowcase>
);
