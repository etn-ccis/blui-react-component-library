import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ChannelValueUnitsSpacingExample } from './ChannelValueUnitsSpacingExample';

const codeSnippet = `<Box sx={{ display: 'flex', flexDirection: 'column', '& .BluiChannelValue-root': { my: 0.25 } }}>
    <ChannelValue value="85" units="kWh" unitSpace="hide" />
    <ChannelValue value="85" units="kWh" unitSpace="show" />
    <ChannelValue value="97" units="°F" />
    <ChannelValue value="32" units="°C" />
    <ChannelValue value="100" units="%" />
    <ChannelValue value="13.62" units="$" prefix />
</Box>`;

export const ChannelValueUnitsSpacing = (): JSX.Element => (
    <Box>
        <ChannelValueUnitsSpacingExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ChannelValue/examples/ChannelValueUnitsSpacingExample.tsx"
        />
    </Box>
);
