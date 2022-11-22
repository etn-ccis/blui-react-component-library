import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ChannelValueWithIconExample } from './ChannelValueWithIconExample';

const codeSnippet = `<ChannelValue value="123" units="hz" icon={<TrendingUp />} />`;

export const ChannelValueWithIcon = (): JSX.Element => (
    <Box>
        <ChannelValueWithIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ChannelValue/examples/ChannelValueWithIconExample.tsx"
        />
    </Box>
);
