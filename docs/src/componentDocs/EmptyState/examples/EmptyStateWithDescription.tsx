import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { EmptyStateWithDescriptionExample } from './EmptyStateWithDescriptionExample';

const codeSnippet = `<EmptyState
    icon={<LocationOff fontSize={'inherit'} />}
    title={'Location Services Disabled'}
    description={'Enable Location Services via Settings to receive GPS information'}
/>`;

export const EmptyStateWithDescription = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <EmptyStateWithDescriptionExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'4'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/EmptyStateWithDescriptionExample.tsx"
        />
    </Box>
);
