import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ChannelValueWithDifferentUnitsExample } from './ChannelValueWithDifferentUnitsExample';

const codeSnippet = `<Box sx={{ display: 'flex', flexDirection: 'column', '& .BluiChannelValue-root': { my: 0.25 } }}>
    <ChannelValue value="85" units="kWh" unitSpace="hide" />
    <ChannelValue value="85" units="kWh" unitSpace="show" />
    <ChannelValue value="97" units="°F" />
    <ChannelValue value="32" units="°C" />
    <ChannelValue value="100" units="%" />
    <ChannelValue value="13.62" units="$" prefix />
</Box>`;

export const ChannelValueWithDifferentUnits = (): JSX.Element => (
    <Box>
        <ChannelValueWithDifferentUnitsExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ChannelValue/examples/ChannelValueWithDifferentUnitsExample.tsx"
        />
    </Box>
);
