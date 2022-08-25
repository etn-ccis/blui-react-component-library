import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup hidePadding divider>
            <DrawerNavItem title="Item 1" itemID="1" />
            <DrawerNavItem title="Item 2" itemID="2" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;
export const BasicDrawerNavGroup = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup title="Group 1" hidePadding>
                        <DrawerNavItem title="Item 1" itemID="1" />
                        <DrawerNavItem title="Item 2" itemID="2" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-6" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
