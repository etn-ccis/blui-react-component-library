import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { TemporaryDrawerExample } from './TemporaryDrawerExample';

const codeSnippet = `<Drawer open={open} width={250} variant="temporary">
    <DrawerHeader
        title="Title"
        icon={<Close />}
        onClick={(): void => setOpen(false)}
    />
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
            <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
            <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
<AppBar position="static">
    <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(): void => setOpen(true)}
        >
            <Menu />
        </IconButton>
    </Toolbar>
</AppBar>`;

export const TemporaryDrawer = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <TemporaryDrawerExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Drawer/examples/TemporaryDrawerExample.tsx"
        />
    </Box>
);
