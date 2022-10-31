import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerHeaderWithTitleContentExample } from './DrawerHeaderWithTitleContentExample';

const codeSnippet = `<Drawer open width={250}>
    <DrawerHeader
        backgroundImage='../../../shared/images/topology_40.png'
        icon={<Menu />}
        titleContent={
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography variant="subtitle2">
                    API Documentation
                </Typography>
                <ListItemTag
                    label="v1.50.8"
                    backgroundColor={colors.white[50]}
                    fontColor={colors.blue[500]}
                />
            </Box>
        }
    />
</Drawer>
`;

export const DrawerHeaderWithTitleContent = (): JSX.Element => (
    <Box>
        <DrawerHeaderWithTitleContentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-16" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerHeader/examples/DrawerHeaderWithTitleContentExample.tsx"
        />
    </Box>
);
