import React, { useState } from 'react';
import { Divider, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavItem,
    DrawerSubheader,
    DrawerNavGroup,
} from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import { Copyright, Dashboard, LocationOn } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const ComplexDrawerSubheaderExample = (): JSX.Element => {
    const [selected, setSelected] = useState('blui');
    return (
        <ExampleShowcase>
            <Drawer
                open
                width={250}
                sx={{ mx: 'auto', '& .BluiDrawer-paper': { boxShadow: 'none' } }}
                noLayout
                openOnHover={false}
            >
                <DrawerHeader title="Energy Co." />
                <DrawerSubheader divider={false} className={'bumpuy'}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <InputLabel id="organization">Organization</InputLabel>
                        <Select
                            label="organization"
                            labelId="organization"
                            value={selected}
                            onChange={(event): void => setSelected(event.target.value)}
                        >
                            <MenuItem value="acme">ACME Co.</MenuItem>
                            <MenuItem value="blui">BLUI CO.</MenuItem>
                            <Divider />
                            <MenuItem>
                                <Typography variant="caption" sx={{ fontSize: '1rem', color: colors.gray[400] }}>
                                    + Add a New Organization...
                                </Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </DrawerSubheader>
                <DrawerBody sx={{ flex: '1 1 auto', mt: 1 }}>
                    <DrawerNavGroup>
                        <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                        <DrawerNavItem title="Locations" icon={<LocationOn />} itemID="2" />
                        <DrawerNavItem title="Legal" icon={<Copyright />} itemID="3" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
