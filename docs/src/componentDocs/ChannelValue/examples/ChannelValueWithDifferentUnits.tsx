import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
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
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ChannelValueWithDifferentUnitsExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ChannelValue/examples/ChannelValueWithDifferentUnitsExample.tsx"
        />
    </Box>
);
