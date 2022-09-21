import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemWithRightComponentExample } from './InfoListItemWithRightComponentExample';

const codeSnippet = ` <InfoListItem
    title="Info List Item"
    subtitle="with a ChannelValue component to the right"
    icon={<BatteryChargingFull />}
    rightComponent={<ChannelValue value={'15'} units={'A'} />}
/>`;

export const InfoListItemWithRightComponent = (): JSX.Element => (
    <Box>
        <InfoListItemWithRightComponentExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemWithRightComponentExample.tsx"
        />
    </Box>
);
