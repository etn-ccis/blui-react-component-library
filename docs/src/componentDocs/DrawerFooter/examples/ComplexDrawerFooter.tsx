import React from 'react';
import { Box, Typography } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { Drawer, DrawerBody, DrawerFooter, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import EatonFooterLogoLight from '../images/EatonLogoLight.png';

const codeSnippet = ` <Drawer>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        <Typography variant="caption">v2.4.0</Typography>
        <Typography variant="caption">10:33:05 03/12/22</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <Box component="img" src={EatonFooterLogoLight} />
            <Box>
                <Typography variant="caption">
                    Copyright © Eaton
                </Typography>
                <Typography variant="caption">
                    All Rights Reserved
                </Typography>
            </Box>
        </Box>
    </DrawerFooter>
</Drawer>
`;
export const ComplexDrawerFooter = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup hidePadding>
                        <DrawerNavItem title="Dashboard" itemID="1" />
                        <DrawerNavItem title="Locations" itemID="2" />
                        <DrawerNavItem title="Legal" itemID="3" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter sx={{ p: 2 }}>
                    <Box sx={{ mb: 1 }}>
                        <Box>
                            <Typography variant="caption">v2.4.0</Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption">10:33:05 03/12/22</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                            <Box component="img" src={EatonFooterLogoLight} />
                            <Box>
                                <Typography sx={{ display: 'block' }} variant="caption">
                                    Copyright © Eaton
                                </Typography>
                                <Typography sx={{ display: 'block' }} variant="caption">
                                    All Rights Reserved
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </DrawerFooter>
            </Drawer>
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
