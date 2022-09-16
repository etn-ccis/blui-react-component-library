import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { ComplexListItemTagExample } from './ComplexListItemTagExample';

const codeSnippet = `<InfoListItem
    icon={<BatteryChargingFull />}
    title={'Info List Item'}
    subtitle={'with a ListItemTag component to the right'}
    backgroundColor={'white'}
    rightComponent={
        <Box sx={{ display: 'flex' }}>
            <ListItemTag
                label={'Build Passing'}
                backgroundColor={Colors.green[300]}
                fontColor={Colors.black[900]}
                sx={{
                    mr: 2,
                    ml: 0,
                }}
            />
            <ListItemTag label={'5 Bugs'} backgroundColor={Colors.red[300]} fontColor={Colors.black[900]} />
        </Box>
    }
/>
`;
export const ComplexListItemTag = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ComplexListItemTagExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'6-18'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/ComplexListItemTagExample.tsx"
        />
    </Box>
);
