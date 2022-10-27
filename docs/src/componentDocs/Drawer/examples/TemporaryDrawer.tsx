import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { TemporaryDrawerExample } from './TemporaryDrawerExample';

const codeSnippet = `<Box>
    <Drawer open={open} variant="temporary">
        <DrawerHeader
            title="Title"
            icon={<Close />}
            onClick={(): void => setOpen(false)}
        />
        <DrawerBody>
            <DrawerNavGroup>
                <DrawerNavItem title="Dashboard" itemID="1" />
                <DrawerNavItem title="Locations" itemID="2" />
                <DrawerNavItem title="Legal" itemID="3" />
            </DrawerNavGroup>
        </DrawerBody>
        </Drawer>
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={(): void => setOpen(true)}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">Toolbar</Typography>
                </Toolbar>
            </AppBar>
            <Box>App Content Here. </Box>
    </Box>
</Box>`;

export const TemporaryDrawer = (): JSX.Element => (
    <Box>
            <TemporaryDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Drawer/examples/TemporaryDrawerExample.tsx"
        />
    </Box>
);
