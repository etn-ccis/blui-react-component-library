import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ToolbarMenuWithinToolbarExample } from './ToolbarMenuWithinToolbarExample';

const codeSnippet = `<AppBar variant="collapsed">
    <Toolbar>
        <IconButton color="inherit" edge="start">
            <Menu />
        </IconButton>
        <ListItemText
            primary={<Typography variant="h6">Title</Typography>}
            secondary={
                <ToolbarMenu
                    label="Subtitle"
                    menuGroups={[
                        {
                            items: [
                                { title: 'Menu Item 1' },
                                { title: 'Menu Item 2' },
                                { title: 'Menu Item 3' },
                            ],
                        },
                    ]}
                />
            }
        />
    </Toolbar>
</AppBar>`;

export const ToolbarMenuWithinToolbar = (): JSX.Element => (
    <Box>
            <ToolbarMenuWithinToolbarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-23" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ToolbarMenu/examples/ToolbarMenuWithinToolbarExample.tsx"
        />
    </Box>
);
