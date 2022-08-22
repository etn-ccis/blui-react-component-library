import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup>
        <DrawerNavItem title="Locations" itemID="Locations" hidePadding={true}>
            <DrawerNavItem title="By Type" itemID="By Type" hidePadding={false}/>
            <DrawerNavItem title="By State" itemID="By State" hidePadding={false}/>
        </DrawerNavItem>
        <DrawerNavItem title="Reports" itemID="Reports" hidePadding={true}>
            <DrawerNavItem title="Local" itemID="Local" hidePadding={false}/>
            <DrawerNavItem title="Regional" itemID="Regional" hidePadding={false}/>
        </DrawerNavItem>
        <DrawerNavItem title="Users" itemID="Users" hidePadding={true}/>
    </DrawerNavGroup>
</DrawerBody>
`;
export const DrawerNavItemNestedItems = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '32px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup hidePadding={true}>
                        <DrawerNavItem title="Locations" itemID="Locations">
                            <DrawerNavItem title="By Type" itemID="By Type" hidePadding={false} />
                            <DrawerNavItem title="By State" itemID="By State" hidePadding={false} />
                        </DrawerNavItem>
                        <DrawerNavItem title="Reports" itemID="Reports">
                            <DrawerNavItem title="Local" itemID="Local" hidePadding={false} />
                            <DrawerNavItem title="Regional" itemID="Regional" hidePadding={false} />
                        </DrawerNavItem>
                        <DrawerNavItem title="Users" itemID="Users" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-11" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
