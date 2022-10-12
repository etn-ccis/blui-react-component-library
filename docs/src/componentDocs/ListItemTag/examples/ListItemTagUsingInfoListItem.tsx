import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { ListItemTagUsingInfoListItemExample } from './ListItemTagUsingInfoListItemExample';

const codeSnippet = `<InfoListItem
    icon={<BatteryChargingFull />}
    title="Info List Item"
    subtitle="with a ListItemTag component to the right"
    backgroundColor="white"
    iconColor="text.primary"
    rightComponent={
        <Box>
            <ListItemTag
                label="Build Passing"
                backgroundColor={Colors.green[300]}
                fontColor={Colors.black[900]}
            />
            <ListItemTag label="5 Bugs" backgroundColor={Colors.red[300]} fontColor={Colors.black[900]} />
        </Box>
    }
/>`;

export const ListItemTagUsingInfoListItem = (): JSX.Element => (
    <Box>
        <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ListItemTagUsingInfoListItemExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-14" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/ListItemTagUsingInfoListItemExample.tsx"
        />
    </Box>
);
