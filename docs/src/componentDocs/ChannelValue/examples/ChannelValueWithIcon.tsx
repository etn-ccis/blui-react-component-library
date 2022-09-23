import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { ChannelValueWithIconExample } from './ChannelValueWithIconExample';

const codeSnippet = `<ChannelValue value="123" units="hz" icon={<TrendingUp />} />`;

export const ChannelValueWithIcon = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ChannelValueWithIconExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ChannelValue/examples/ChannelValueWithIconExample.tsx"
        />
    </Box>
);
