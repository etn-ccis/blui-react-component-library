import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../codeSnippet/codeBlock';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

const htmlCode = `<DrawerBody>
  <DrawerNavGroup>
    <DrawerNavItem title="Dashboard" icon={<Dashboard/>} itemID="1" />
    <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
    <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
  </DrawerNavGroup>
</DrawerBody>
`;
export const BasicDrawerNavItem = (): JSX.Element => {
    return (
        <Box>
            <Box sx={{ m: '32px 0', backgroundColor: colors.white[600], p: 4 }}>
                <Drawer open={true} width={250} sx={{ height: '156px', margin: '0 auto' }} noLayout>
                    <DrawerBody>
                        <DrawerNavGroup hidePadding divider>
                            <DrawerNavItem title="Dashboard" itemID="1" />
                            <DrawerNavItem title="Locations" itemID="2" />
                            <DrawerNavItem title="Legal" itemID="3" />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            </Box>
            <CodeBlock code={htmlCode} language="html" />
        </Box>
    );
};
