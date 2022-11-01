import React from 'react';
import { Box, Typography } from '@mui/material';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem, ListItemTag } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const CustomNavGroupTitleContentExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup
                    hidePadding
                    divider
                    titleContent={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                            <Typography variant="subtitle2">Nav Group Title Content</Typography>
                            <ListItemTag label="v1.0.3" />
                        </Box>
                    }
                >
                    <DrawerNavItem title="Item 1" itemID="1" divider={false} />
                    <DrawerNavItem title="Item 2" itemID="2" divider={false} />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
