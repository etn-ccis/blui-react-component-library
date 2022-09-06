import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { BasicDrawerNavItemExample } from './BasicDrawerNavItemExample';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup hidePadding divider>
        <DrawerNavItem title="Dashboard" itemID="1" />
        <DrawerNavItem title="Locations" itemID="2" />
        <DrawerNavItem title="Legal" itemID="3" />
    </DrawerNavGroup>
</DrawerBody>
`;
export const BasicDrawerNavItem = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <BasicDrawerNavItemExample />
        </Box>
        <CodeBlock
            code={codeSnippet}
            language="jsx"
            dataLine="3-5"
            copyText={codeSnippet}
            url="componentDocs/DrawerNavItem/examples/BasicDrawerNavItemExample.tsx"
        />
    </Box>
);
