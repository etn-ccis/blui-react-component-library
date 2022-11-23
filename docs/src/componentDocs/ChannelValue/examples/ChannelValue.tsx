import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ChannelValueExample } from './ChannelValueExample';

const codeSnippet = `<ChannelValue value="123" units="hz" />`;

export const ChannelValue = (): JSX.Element => (
    <Box>
        <ChannelValueExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ChannelValue/examples/ChannelValueExample.tsx"
        />
    </Box>
);
