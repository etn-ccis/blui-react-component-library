import React from 'react';
import { Box, Typography } from '@mui/material';
import { Drawer, DrawerHeader, ListItemTag } from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import { ExampleShowcase } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
const backgroundImage = require('../../../shared/images/topology_40.png');

export const DrawerHeaderWithTitleContentExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader
                backgroundImage={backgroundImage}
                icon={<Menu />}
                titleContent={
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', ml: 2 }}>
                        <Typography variant="subtitle2" sx={{ mb: 0 }}>
                            API Documentation
                        </Typography>
                        <ListItemTag
                            label="v1.50.8"
                            backgroundColor={colors.white[50]}
                            fontColor={colors.blue[500]}
                            sx={{ width: 'fit-content' }}
                        />
                    </Box>
                }
            />
        </Drawer>
    </ExampleShowcase>
);
