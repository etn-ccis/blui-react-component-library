import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ListItemTagUsingInfoListItemExample } from './ListItemTagUsingInfoListItemExample';

const codeSnippet = `<InfoListItem
    icon={<BatteryChargingFull />}
    title="Info List Item"
    subtitle="with a ListItemTag component to the right"
    iconColor="text.primary"
    rightComponent={
        <Stack spacing={2} direction={'row'}>
            <ListItemTag
                label="Build Passing"
                backgroundColor={Colors.green[300]}
                fontColor={Colors.black[900]}
            />
            <ListItemTag label="5 Bugs" backgroundColor={Colors.red[300]} fontColor={Colors.black[900]} />
        </Stack>
    }
/>`;

export const ListItemTagUsingInfoListItem = (): JSX.Element => (
    <Box>
        <ListItemTagUsingInfoListItemExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-14" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/ListItemTagUsingInfoListItemExample.tsx"
        />
    </Box>
);
