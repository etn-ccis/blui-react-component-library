import React, { useState } from 'react';
import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
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

export const ComplexDrawerSubheaderExample = (): JSX.Element => {
    const [selected, setSelected] = useState('blui');
    return (
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer
                open={true}
                width={250}
                sx={{ margin: '0 auto', '& .BluiDrawer-paper': { boxShadow: 'none' } }}
                noLayout
                openOnHover={false}
            >
                <DrawerHeader title="Energy Co." />
                <DrawerSubheader divider={false}>
                    <FormControl variant="filled" sx={{ height: 56, width: '100%' }}>
                        <InputLabel id="organization" sx={{ pl: 2, pt: 1 }}>
                            Organization
                        </InputLabel>
                        <Select
                            label="organization"
                            labelId="organization"
                            value={selected}
                            onChange={(event): void => setSelected(event.target.value)}
                            sx={{ '& .MuiSelect-icon': { mr: 2 }, '& .MuiFilledInput-input': { mt: 1 }, px: 2 }}
                        >
                            <MenuItem value="acme">ACME Co.</MenuItem>
                            <MenuItem value="blui">BLUI CO.</MenuItem>
                            <Divider />
                            <MenuItem value="addnew">
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
        </Box>
    );
};
