import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { UserMenuWithinToolbarExample } from './UserMenuWithinToolbarExample';

const codeSnippet = `<Box sx={{ width: 300 }}>
    <AppBar position={'relative'} color={'primary'}>
        <Toolbar sx={{ px: 2, minHeight: 'unset', height: '4rem' }}>
            <Typography variant={'h6'}>Toolbar Title</Typography>
            <Spacer flex={1} />
            <UserMenu
                avatar={<Avatar />}
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
                                divider: true,
                            },
                            {
                                itemID: '4',
                                title: 'v1.03.54',
                                hidePadding: true,
                                sx: {
                                    '& .BluiInfoListItem-root': {
                                        height: 40,
                                    },
                                    '& .BluiInfoListItem-title': {
                                        fontSize: 12,
                                    },
                                },
                            },
                        ],
                    },
                ]}
                menuTitle={'Jane Doe'}
                menuSubtitle={'Account Manager'}
                onOpen={(): void => {}}
                onClose={(): void => {}}
            />
        </Toolbar>
    </AppBar>
    <Box
        sx={{
            height: 90,
            backgroundColor: 'background.paper',
            p: 2,
        }}
    >
        <Typography variant={'body1'}>Body Content Goes Here</Typography>
    </Box>
</Box>`;

export const UserMenuWithinToolbar = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <UserMenuWithinToolbarExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="6-44" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuWithinToolbarExample.tsx"
        />
    </Box>
);
