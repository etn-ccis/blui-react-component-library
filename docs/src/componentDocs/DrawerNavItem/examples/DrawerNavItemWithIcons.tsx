import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { DrawerNavItemWithIconsExample } from './DrawerNavItemWithIconsExample';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup>
        <DrawerNavItem title="Dashboard" icon={<Dashboard/>} itemID="1" />
        <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
        <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
    </DrawerNavGroup>
</DrawerBody>
`;

export const DrawerNavItemWithIcons = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '32px 0', backgroundColor: colors.white[600], p: 4 }}>
            <DrawerNavItemWithIconsExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavItem/examples/DrawerNavItemWithIconsExample.tsx"
        />
    </Box>
);
