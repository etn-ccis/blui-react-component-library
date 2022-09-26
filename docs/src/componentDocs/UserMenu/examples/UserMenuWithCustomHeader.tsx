import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuWithCustomHeaderExample } from './UserMenuWithCustomHeaderExample';

const codeSnippet = `<UserMenu
    onClick={(): void => setOpen(!open)}
    avatar={<Avatar src={tRex} alt={'User Avatar'} />}
    menu={
        <Menu open={open} onClose={(): void => setOpen(false)}>
            <Box sx={{ position: 'relative', p: '16px 8px 8px 8px' }}>
                <Typography variant={'h6'}>Welcome, </Typography>
                <Typography sx={{ fontWeight: 600, marginTop: '-10px' }} variant={'h3'}>
                    T-Rex
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: '100%',
                        width: '100%',
                        opacity: 0.2,
                        backgroundSize: 'cover',
                        backgroundImage: \`url(\${tRex})\`,
                    }}
                />
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
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithCustomHeaderExample.tsx"
        />
    </Box>
);
