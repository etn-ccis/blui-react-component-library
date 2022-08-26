import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { ComplexDrawerFooterExample } from './ComplexDrawerFooterExample';

const codeSnippet = ` <Drawer>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        <Typography variant="caption">v2.4.0</Typography>
        <Typography variant="caption">10:33:05 03/12/22</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <Box sx={{ width: 83 }} component="img" src={EatonFooterLogoLight} />
            <Box>
                <Typography variant="caption">
                    Copyright © Eaton
                </Typography>
                <Typography variant="caption">
                    All Rights Reserved
                </Typography>
            </Box>
        </Box>
    </DrawerFooter>
</Drawer>
`;

export const ComplexDrawerFooter = (): JSX.Element => (
    <Box>
        <ComplexDrawerFooterExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-24" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/DrawerFooter/examples/ComplexDrawerFooterExample.tsx" />
        </Box>
    </Box>
);
