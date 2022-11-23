import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
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
        <UserMenuWithMenuHeaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="13-14" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithMenuHeaderExample.tsx"
        />
    </Box>
);
