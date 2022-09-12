import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';

export const DrawerNavItemSelectedItemsExample = (): JSX.Element => {
    const [selected, setSelected] = useState('Item 1');

    return (
        <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout activeItem={selected}>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup hidePadding={true}>
                    <DrawerNavItem
                        activeItemBackgroundShape="square"
                        title="Item 1"
                        subtitle="with square highlight"
                        itemID="Item 1"
                        onClick={(): void => {
                            setSelected('Item 1');
                        }}
                    />
                    <DrawerNavItem
                        activeItemBackgroundShape="round"
                        title="Item 2"
                        subtitle="with round highlight"
                        itemID="Item 2"
                        onClick={(): void => {
                            setSelected('Item 2');
                        }}
                    />
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
    );
};
