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
        rightComponent={<ChannelValue value={'Online, ESS+'} />}
    />
    <InfoListItem
        title={'Output Voltage'}
        divider={'partial'}
        avatar
        statusColor='#ca3c3d'
        subtitle={['Phase A', 'Phase B', 'Phase C']}
        icon={<CheckCircle color={'inherit'} />}
        rightComponent={
            <span>
                <ChannelValue value={478} units={'V'} />,{' '}
                <ChannelValue value={479} units={'V'} />,{' '}
                <ChannelValue value={473} units={'V'} />
            </span>
        }
    />
    <InfoListItem
        dense
        title={'Output Current'}
        icon={<BatteryChargingFull color={'inherit'} />}
        iconAlign={'center'}
        rightComponent={
            <span>
                <ChannelValue value={15} units={'A'} />,{' '}
                <ChannelValue value={14.9} units={'A'} />,{' '}
                <ChannelValue value={15} units={'A'} />
            </span>
        }
    />
</Stack>`;

export const InfoListItemInList = (): JSX.Element => (
    <Box>
        <InfoListItemInListExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-45" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemInListExample.tsx"
        />
    </Box>
);
