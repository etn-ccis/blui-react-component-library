import React from 'react';
import Box from '@mui/material/Box';
import { ThreeLiner, ToolbarMenu } from '@brightlayer-ui/react-components';

export const ThreeLinerWithCustomContentExample = (): JSX.Element => (
    <Box>
        <ThreeLiner
            title="title"
            subtitle="subtitle"
            info={
                <ToolbarMenu
                    label="info"
                    menuGroups={[
                        {
                            items: [{ title: 'Menu Item 1' }, { title: 'Menu Item 2' }, { title: 'Menu Item 3' }],
                        },
                    ]}
                />
            }
        />
    </Box>
);
