import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemInListExample } from './InfoListItemInListExample';

const codeSnippet = `<Stack 
    sx={{ '& .BluiInfoListItem-root': { 
            maxWidth: 700, 
            m: 'auto', 
            backgroundColor: 'background.paper' } 
        }}
    >
    <InfoListItem
        dense
        title={'Status'}
        divider="partial"
        statusColor='#2ca618'
        subtitleSeparator={'/'}
        icon={<DeviceActivating color={'inherit'} />}
        iconAlign={'center'}
        chevron
    />
    <InfoListItem
        title={'Output Voltage'}
        divider={'partial'}
        avatar
        statusColor='#ca3c3d'
        subtitle={['Phase A', 'Phase B', 'Phase C']}
        icon={<CheckCircle color={'inherit'} />}
        chevron
    />
    <InfoListItem
        dense
        title={'Output Current'}
        icon={<BatteryChargingFull color={'inherit'} />}
        iconAlign={'center'}
        chevron
    />
</Stack>`;

export const InfoListItemInList = (): JSX.Element => (
    <Box>
        <InfoListItemInListExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemInListExample.tsx"
        />
    </Box>
);
