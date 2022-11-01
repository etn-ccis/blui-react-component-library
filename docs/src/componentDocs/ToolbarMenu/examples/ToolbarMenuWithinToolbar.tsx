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
            disableTypography
            primary={<Typography variant="h6">Alarms</Typography>}
            secondary={
                <ToolbarMenu
                    label="Location"
                    menuGroups={[
                        {
                            items: [
                                { title: 'Location 1' },
                                { title: 'Location 2' },
                                { title: 'Location 3' },
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
