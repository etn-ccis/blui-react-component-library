import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuWithBottomSheetExample } from './UserMenuWithBottomSheetExample';

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
    useBottomSheetAt={100000}
/>`;

export const UserMenuWithBottomSheet = (): JSX.Element => (
    <Box>
        <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuWithBottomSheetExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="21" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithBottomSheetExample.tsx"
        />
    </Box>
);
