import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../../shared';
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
                <FormHelperText>v2.4.0</FormHelperText>
            </Box>
            <Box>
                <FormHelperText>10:33:05 03/12/22</FormHelperText>
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
        <CodeBlock
            code={codeSnippet}
            language="jsx"
            dataLine="9-30"
            copyText={codeSnippet}
            url="componentDocs/DrawerFooter/examples/ComplexDrawerFooterExample.tsx"
        />
    </Box>
);
