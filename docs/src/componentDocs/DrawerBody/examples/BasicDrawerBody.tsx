import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../../shared';
import { BasicDrawerBodyExample } from './BasicDrawerBodyExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerBody>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const BasicDrawerBody = (): JSX.Element => (
    <Box>
        <BasicDrawerBodyExample />
        <CodeBlock
            code={codeSnippet}
            language="jsx"
            dataLine="2-8"
            copyText={codeSnippet}
            url="componentDocs/DrawerBody/examples/BasicDrawerBodyExample.tsx"
        />
    </Box>
);
