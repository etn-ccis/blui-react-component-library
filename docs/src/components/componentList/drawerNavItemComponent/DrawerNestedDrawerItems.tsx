import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../codeSnippet/codeBlock';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';

const htmlCode = `<DrawerBody>
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
export const DrawerNestedDrawerItems = (): JSX.Element => {
    return (
        <Box>
            <Drawer open={true} width={250} sx={{ height: '156px', margin: '0 auto' }} noLayout>
                <DrawerBody>
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
            <CodeBlock code={htmlCode} language="html" />
        </Box>
    );
};
