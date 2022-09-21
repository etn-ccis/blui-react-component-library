import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemWithRightComponentExample } from './InfoListItemWithRightComponentExample';

const codeSnippet = `<InfoListItem
    title="Info List Item"
    subtitle="with a timestamp as a left component"
    icon={<BatteryChargingFull />}
    leftComponent={
        <Box>
            <Typography variant="caption">
                <strong>8:32 </strong>AM
            </Typography>
            <Typography variant="caption">11/21/21</Typography>
        </Box>
    }
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
