import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { Drawer, DrawerBody, DrawerFooter, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup hidePadding divider>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        Footer Content Here
    </DrawerFooter>
</Drawer>
`;
export const BasicDrawerFooter = (): JSX.Element => (
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
                <DrawerFooter sx={{ p: 2 }}>Footer Content Here</DrawerFooter>
            </Drawer>
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-11" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
