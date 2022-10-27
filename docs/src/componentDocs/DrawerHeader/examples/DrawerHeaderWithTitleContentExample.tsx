import React from 'react';
import { Box, Typography } from '@mui/material';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import { ExampleShowcase } from '../../../shared';

export const DrawerHeaderWithTitleContentExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader
                icon={<Menu />}
                titleContent={
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', ml: 2 }}>
                        <Typography variant="subtitle1" sx={{ mb: -1 }}>
                            Customizable
                        </Typography>
                        <Typography variant="h6">Header Content</Typography>
                    </Box>
                }
            />
        </Drawer>
    </ExampleShowcase>
);
