import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
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
        <UserMenuWithCustomHeaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4-19" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithCustomHeaderExample.tsx"
        />
    </Box>
);
