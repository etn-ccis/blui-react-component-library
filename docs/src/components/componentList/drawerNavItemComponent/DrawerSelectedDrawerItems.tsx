import React, { useState } from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../codeSnippet/codeBlock';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';

const htmlCode = `<Drawer open={true} activeItem={selected}>
    <DrawerBody>
        <DrawerNavGroup hidePadding={true}>
            <DrawerNavItem title="Item 1"
                subtitle="with square highlight" itemID="Item 1" onClick={(): void => {
                    setSelected("Item 1");
                }}>
            </DrawerNavItem>
            <DrawerNavItem title="Item 2"
                subtitle="with round highlight" itemID="Item 2" onClick={(): void => {
                    setSelected("Item 2");
                }}>
            </DrawerNavItem>
            <DrawerNavItem title="Item 3"
                subtitle="with default highlight" itemID="Item 3" onClick={(): void => {
                    setSelected("Item 3");
                }} />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;
export const DrawerSelectedDrawerItems = (): JSX.Element => {
    const [selected, setSelected] = useState('Item 1');
    return (
        <Box>
            <Drawer open={true} width={250} sx={{ height: '156px', margin: '0 auto' }} noLayout activeItem={selected}>
                <DrawerBody>
                    <DrawerNavGroup hidePadding={true}>
                        <DrawerNavItem
                            title="Item 1"
                            subtitle="with square highlight"
                            itemID="Item 1"
                            onClick={(): void => {
                                setSelected('Item 1');
                            }}
                        ></DrawerNavItem>
                        <DrawerNavItem
                            title="Item 2"
                            subtitle="with round highlight"
                            itemID="Item 2"
                            onClick={(): void => {
                                setSelected('Item 2');
                            }}
                        ></DrawerNavItem>
                        <DrawerNavItem
                            title="Item 3"
                            subtitle="with default highlight"
                            itemID="Item 3"
                            onClick={(): void => {
                                setSelected('Item 3');
                            }}
                        />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
            <CodeBlock code={htmlCode} language="html" />
        </Box>
    );
};
