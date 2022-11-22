import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerFooterExample } from './DrawerFooterExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerBody>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        <Box>
            <Typography variant="caption" color={'text.disabled'} sx={{ display: 'block' }}>
                v2.4.0
            </Typography>
            <Typography variant="caption" color={'text.disabled'} sx={{ display: 'block' }}>
                10:33:05 03/12/22
            </Typography>
        </Box>
            <Box>
                <Box component="img" src={EatonFooterLogoLight} />
                <Box>
                    <Typography variant="caption" sx={{ display: 'block' }} >
                        Copyright © Eaton
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block' }} >
                        All Rights Reserved
                    </Typography>
                </Box>
            </Box>
        </Box>
    </DrawerFooter>
</Drawer>
`;

export const DrawerFooter = (): JSX.Element => (
    <Box>
        <DrawerFooterExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-30" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerFooter/examples/DrawerFooterExample.tsx"
        />
    </Box>
);
