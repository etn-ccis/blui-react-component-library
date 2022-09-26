import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { ResponsiveUserMenuExample } from './ResponsiveUserMenuExample';

const codeSnippet = `<UserMenu
    avatar={<Avatar>BS</Avatar>}
    menuGroups={[
        {
            items: [
                {
                    title: 'Settings',
                    icon: <Settings />,
                },

                {
                    title: 'Contact Us',
                    icon: <Email />,
                },
                {
                    title: 'Log Out',
                    icon: <ExitToApp />,
                },
            ],
        },
    ]}
    useBottomSheetAt={3000}
/>`;

export const ResponsiveUserMenu = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ResponsiveUserMenuExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/ResponsiveUserMenuExample.tsx"
        />
    </Box>
);
