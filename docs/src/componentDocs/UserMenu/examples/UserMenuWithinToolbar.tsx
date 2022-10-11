import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuWithinToolbarExample } from './UserMenuWithinToolbarExample';

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

export const UserMenuWithinToolbar = (): JSX.Element => (
    <Box>
        <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuWithinToolbarExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-17" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithinToolbarExample.tsx"
        />
    </Box>
);
