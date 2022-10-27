import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { EmptyStateInCardExample } from './EmptyStateInCardExample';

const codeSnippet = `<Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Device Usage</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <EmptyState
            icon={<LocationOff fontSize={'inherit'} />}
            title={'No Devices Found'}
            description={'Enable Location Services via Settings to receive GPS information'}
            actions={
                <Button variant={'contained'} color={'primary'} startIcon={<Add />}>
                    Learn More
                </Button>
            }
        />
    </AccordionDetails>
</Accordion>`;

export const EmptyStateInCard = (): JSX.Element => (
    <Box>
        <EmptyStateInCardExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/EmptyStateInCardExample.tsx"
        />
    </Box>
);
