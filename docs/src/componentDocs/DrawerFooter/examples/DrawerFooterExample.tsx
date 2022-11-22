import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Drawer, DrawerBody, DrawerFooter, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import EatonFooterLogoLight from '../images/EatonLogoLight.png';
import { ExampleShowcase } from '../../../shared';

export const DrawerFooterExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup hidePadding>
                    <DrawerNavItem title="Dashboard" itemID="1" />
                    <DrawerNavItem title="Locations" itemID="2" />
                    <DrawerNavItem title="Legal" itemID="3" />
                </DrawerNavGroup>
            </DrawerBody>
            <DrawerFooter sx={{ p: 2 }}>
                <Box>
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="caption" color="text.disabled" sx={{ display: 'block' }}>
                            v2.4.0
                        </Typography>
                        <Typography variant="caption" color="text.disabled" sx={{ display: 'block' }}>
                            10:33:05 03/12/22
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                        <Box sx={{ width: 83 }} component="img" src={EatonFooterLogoLight} />
                        <Box>
                            <Typography variant="caption" sx={{ display: 'block' }}>
                                Copyright © Eaton
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block' }}>
                                All Rights Reserved
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DrawerFooter>
        </Drawer>
    </ExampleShowcase>
);
