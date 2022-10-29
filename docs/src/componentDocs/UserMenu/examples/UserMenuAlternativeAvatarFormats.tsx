import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { UserMenuAlternativeAvatarFormatsExample } from './UserMenuAlternativeAvatarFormatsExample';

const codeSnippet = `<UserMenu
    avatar={<Avatar src='../images/tRex.png' alt={'User Avatar'} />}
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
/>
<UserMenu
    avatar={
        <Avatar>
            <Pets />
        </Avatar>
    }
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
/>`;

export const UserMenuAlternativeAvatarFormats = (): JSX.Element => (
    <Box>
        <UserMenuAlternativeAvatarFormatsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2, 15-19" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuAlternativeAvatarFormatsExample.tsx"
        />
    </Box>
);
