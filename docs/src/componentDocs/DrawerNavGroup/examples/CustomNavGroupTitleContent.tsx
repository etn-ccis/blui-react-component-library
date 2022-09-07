import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { CustomNavGroupTitleContentExample } from './CustomNavGroupTitleContentExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerBody>
        <DrawerNavGroup hidePadding divider
            titleContent={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                    <Typography variant="subtitle2">Nav Group Title Content</Typography>
                    <ListItemTag label="v1.0.3" />
                </Box>
            }
        >
            <DrawerNavItem title="Item 1" itemID="1" divider={false} />
            <DrawerNavItem title="Item 2" itemID="2" divider={false} />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const CustomNavGroupTitleContent = (): JSX.Element => (
    <Box>
        <CustomNavGroupTitleContentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-13" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavGroup/examples/CustomNavGroupTitleContentExample.tsx"
        />
    </Box>
);