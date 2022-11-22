import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserMenu } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const tRex = require('../images/trex.png');

export const UserMenuWithCustomHeaderExample = (): JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                <UserMenu
                    onClick={(): void => setOpen(!open)}
                    avatar={<Avatar src={tRex} alt="User Avatar" />}
                    menu={
                        <Menu open={open} onClose={(): void => setOpen(false)}>
                            <Box sx={{ position: 'relative', p: 1, pt: 2 }}>
                                <Typography variant="h6">Welcome, </Typography>
                                <Typography sx={{ fontWeight: 600, mt: -1 }} variant="h3">
                                    T-Rex
                                </Typography>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        height: '100%',
                                        width: '100%',
                                        opacity: 0.2,
                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${tRex})`,
                                    }}
                                />
                            </Box>
                            <Divider />
                            <MenuItem onClick={(): void => setOpen(false)}>My Account</MenuItem>
                            <MenuItem onClick={(): void => setOpen(false)}>Logout</MenuItem>
                        </Menu>
                    }
                />
            </Box>
        </ExampleShowcase>
    );
};
