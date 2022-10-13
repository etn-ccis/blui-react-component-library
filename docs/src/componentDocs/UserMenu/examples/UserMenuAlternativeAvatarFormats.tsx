import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuAlternativeAvatarFormatsExample } from './UserMenuAlternativeAvatarFormatsExample';

const codeSnippet = `<Box sx={{ display: 'flex', justifyContent: 'space-between', width: 150 }}>
    <UserMenu
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
    />
</Box>`;

export const UserMenuAlternativeAvatarFormats = (): JSX.Element => (
    <Box>
        <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuAlternativeAvatarFormatsExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3, 16-20" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuAlternativeAvatarFormatsExample.tsx"
        />
    </Box>
);
