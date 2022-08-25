import React from 'react';
import { Box, Typography } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem, ListItemTag } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup hidePadding divider titleContent={
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1}}> 
                <Typography variant='subtitle2' >
                    Nav Group Title Content
                </Typography>
                <ListItemTag label='v1.0.3' />
            </Box>
        }>
            <DrawerNavItem title="Item 1" itemID="1"  divider={false}/>
            <DrawerNavItem title="Item 2" itemID="2"  divider={false}/>
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;
export const CustomNavGroupTitleContent = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup hidePadding divider titleContent={
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1}}> 
                            <Typography variant='subtitle2' >
                                Nav Group Title Content
                            </Typography>
                            <ListItemTag label='v1.0.3' />
                        </Box>
                    }>
                        <DrawerNavItem title="Item 1" itemID="1"  divider={false}/>
                        <DrawerNavItem title="Item 2" itemID="2"  divider={false}/>
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-13" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
