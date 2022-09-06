import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';

const codeSnippet = `<Drawer open={true} activeItem={selected}>
    <DrawerBody>
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
`;

export const DrawerNavItemSelectedItems = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '32px 0', backgroundColor: colors.white[600], p: 4 }}></Box>
        <CodeBlock
            code={codeSnippet}
            language="jsx"
            dataLine="4-29"
            copyText={codeSnippet}
            url="componentDocs/DrawerNavItem/examples/DrawerNavItemSelectedItemsExample.tsx"
        />
    </Box>
);
