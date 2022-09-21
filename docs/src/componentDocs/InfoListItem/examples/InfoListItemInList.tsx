import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemInListExample } from './InfoListItemInListExample';

const codeSnippet = `<List>
    <InfoListItem
        dense={true}
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
        avatar={true}
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
        dense={true}
        title={'Output Current'}
        icon={<BatteryChargingFull color={'inherit'} />}
        rightComponent={
            <span>
                <ChannelValue value={15} units={'A'} />,{' '}
                <ChannelValue value={14.9} units={'A'} />,{' '}
                <ChannelValue value={15} units={'A'} />
            </span>
        }
        iconAlign={'center'}
    />
</List>`;

export const InfoListItemInList = (): JSX.Element => (
    <Box>
        <InfoListItemInListExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-39" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemInListExample.tsx"
        />
    </Box>
);
