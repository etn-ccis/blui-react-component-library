import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { EmptyStateWithActionsExample } from './EmptyStateWithActionsExample';

const codeSnippet = `<EmptyState
    icon={<Devices fontSize={'inherit'} />}
    title={'No Devices'}
    description={'Check your network connection or add a new device'}
    actions={
        <Button variant={'outlined'} color={'primary'} startIcon={<Add />}>
            Add Device
        </Button>
    }
/>`;

export const EmptyStateWithActions = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <EmptyStateWithActionsExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'5, 6-9'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/EmptyStateWithActionsExample.tsx"
        />
    </Box>
);
