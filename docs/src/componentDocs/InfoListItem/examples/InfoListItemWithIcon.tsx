import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemWithIconExample } from './InfoListItemWithIconExample';

const codeSnippet = `<InfoListItem 
    title="Info List Item Title" 
    subtitle="Info List Item Subtitle" 
    icon={<Alarm />} 
/>`;

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
