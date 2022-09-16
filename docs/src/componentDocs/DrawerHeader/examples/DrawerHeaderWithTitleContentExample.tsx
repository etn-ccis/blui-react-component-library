import React from 'react';
import { Box, Typography } from '@mui/material';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import Menu from '@mui/icons-material/Menu';

export const DrawerHeaderWithTitleContentExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
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
    </Box>
);
