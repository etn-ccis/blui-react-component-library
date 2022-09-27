import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemWithIconExample } from './InfoListItemWithIconExample';

const codeSnippet = `<InfoListItem title="Info List Item" subtitle="with an icon" icon={<Alarm />} />`;

export const InfoListItemWithIcon = (): JSX.Element => (
    <Box>
        <InfoListItemWithIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemWithIconExample.tsx"
        />
    </Box>
);
