import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuExample } from './UserMenuExample';

const codeSnippet = `<AppBar position="relative" color="primary">
    <Toolbar>
        <Typography variant="h6">Toolbar Title</Typography>
        <Spacer />
        <UserMenu
            avatar={<Avatar>AV</Avatar>}
            menuGroups={[
                {
                    items: [
                        {
                            title: 'Log Out',
                            icon: <ExitToApp />,
                        },
                    ],
                },
            ]}
        />
    </Toolbar>
</AppBar>`;

export const UserMenu = (): JSX.Element => (
    <Box>
        <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-17" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/UserMenu/examples/UserMenuExample.tsx" />
    </Box>
);
