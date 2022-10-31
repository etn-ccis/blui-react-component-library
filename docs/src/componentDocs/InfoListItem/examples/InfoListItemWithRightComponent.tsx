import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemWithRightComponentExample } from './InfoListItemWithRightComponentExample';

const codeSnippet = `<InfoListItem
    title="Battery Fully Charged"
    subtitle="Your device is ready to use"
    icon={<BatteryChargingFull />}
    leftComponent={
        <Box>
            <Typography variant="caption">
                <strong>8:32 </strong>AM
            </Typography>
            <Typography variant="caption">11/21/21</Typography>
        </Box>
    }
    rightComponent={<ChannelValue value={'15'} units={'A'} />}
/>`;

export const InfoListItemWithRightComponent = (): JSX.Element => (
    <Box>
        <InfoListItemWithRightComponentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-13" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemWithRightComponentExample.tsx"
        />
    </Box>
);
