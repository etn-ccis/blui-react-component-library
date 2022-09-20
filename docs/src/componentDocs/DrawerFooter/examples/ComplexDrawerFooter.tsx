import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ComplexDrawerFooterExample } from './ComplexDrawerFooterExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerBody>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter sx={{ p: 2 }}>
        <Box sx={{ mb: 1 }}>
            <Box>
                <Typography variant="caption">
                    v2.4.0
                </Typography>
            </Box>
            <Box>
                <Typography variant="caption">
                    10:33:05 03/12/22
                </Typography>
            </Box>
        </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                <Box sx={{ width: 83 }} component="img" src={EatonFooterLogoLight} />
                <Box>
                    <Typography sx={{ display: 'block' }} variant="caption">
                        Copyright © Eaton
                    </Typography>
                    <Typography sx={{ display: 'block' }} variant="caption">
                        All Rights Reserved
                    </Typography>
                </Box>
            </Box>
        </Box>
    </DrawerFooter>
</Drawer>
`;

export const ComplexDrawerFooter = (): JSX.Element => (
    <Box>
        <ComplexDrawerFooterExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-34" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerFooter/examples/ComplexDrawerFooterExample.tsx"
        />
    </Box>
);
