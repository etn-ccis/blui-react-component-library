import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuWithCustomHeaderExample } from './UserMenuWithCustomHeaderExample';

const codeSnippet = `<UserMenu
    onClick={(): void => setOpen(!open)}
    avatar={<Avatar src='../images/tRex.png' alt="User Avatar" />}
    menu={
        <Menu open={open} onClose={(): void => setOpen(false)}>
            <Box>
                <Typography variant="h6">Welcome, </Typography>
                <Typography variant="h3">T-Rex</Typography>
                <Box sx={{ backgroundImage: \`url('../images/tRex.png')\` }} />
            </Box>
            <Divider />
            <MenuItem onClick={(): void => setOpen(false)}>
                My Account
            </MenuItem>
            <MenuItem onClick={(): void => setOpen(false)}>
                Logout
            </MenuItem>
        </Menu>
    }
/>`;

export const UserMenuWithCustomHeader = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuWithCustomHeaderExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4-19" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithCustomHeaderExample.tsx"
        />
    </Box>
);
