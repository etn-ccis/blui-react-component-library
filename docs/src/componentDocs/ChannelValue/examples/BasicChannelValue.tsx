import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicChannelValueExample } from './BasicChannelValueExample';

const codeSnippet = `<ChannelValue value="123" units="hz" />`;

export const BasicChannelValue = (): JSX.Element => (
    <Box>
        <BasicChannelValueExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ChannelValue/examples/BasicChannelValueExample.tsx"
        />
    </Box>
);
