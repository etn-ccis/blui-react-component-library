import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup title="Locations" hidePadding divider>
            <DrawerNavItem title="Regional" itemID="1" />
            <DrawerNavItem title="National" itemID="2" />
        </DrawerNavGroup>
        <DrawerNavGroup title="Status" hidePadding divider>
            <DrawerNavItem title="Network" itemID="1" />
            <DrawerNavItem title="Node" itemID="2" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;
export const MultipleDrawerNavGroups = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup title="Locations" hidePadding divider>
                        <DrawerNavItem title="Regional" itemID="1" divider={false} />
                        <DrawerNavItem title="National" itemID="2" divider={false} />
                    </DrawerNavGroup>
                    <DrawerNavGroup title="Status" hidePadding divider>
                        <DrawerNavItem title="Network" itemID="1" divider={false} />
                        <DrawerNavItem title="Node" itemID="2" divider={false} />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-10" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
