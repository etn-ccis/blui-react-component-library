import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuWithPlacementOptionsExample } from './UserMenuWithPlacementOptionsExample';

const codeSnippet = `<UserMenu
    avatar={<Avatar>PO</Avatar>}
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
    MenuProps={{
        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
        transformOrigin: { horizontal: 'left', vertical: 'top' },
    }}
/>`;

export const UserMenuWithPlacementOptions = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuWithPlacementOptionsExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="13-16" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithPlacementOptionsExample.tsx"
        />
    </Box>
);
