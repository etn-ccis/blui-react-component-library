import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuWithMenuHeaderExample } from './UserMenuWithMenuHeaderExample';

const codeSnippet = `<UserMenu
    avatar={<Avatar>MH</Avatar>}
    menuGroups={[
        {
            items: [
                {
                    title: 'Settings',
                    icon: <Settings />,
                },
            ],
        },
    ]}
    menuTitle="Sample Title"
    menuSubtitle="Sample Subtitle"
/>`;

export const UserMenuWithMenuHeader = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuWithMenuHeaderExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="13-14" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithMenuHeaderExample.tsx"
        />
    </Box>
);
