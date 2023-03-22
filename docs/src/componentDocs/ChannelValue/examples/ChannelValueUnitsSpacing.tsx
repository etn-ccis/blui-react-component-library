import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ChannelValueUnitsSpacingExample } from './ChannelValueUnitsSpacingExample';

const codeSnippet = `<Stack direction={'column'} spacing={0.25} alignItems={'center'}>
    <ChannelValue value="85" units="kWh" unitSpace="hide" />
    <ChannelValue value="85" units="kWh" unitSpace="show" />
    <ChannelValue value="97" units="°F" />
    <ChannelValue value="32" units="°C" />
    <ChannelValue value="100" units="%" />
    <ChannelValue value="13.62" units="$" prefix />
</Stack>`;

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
