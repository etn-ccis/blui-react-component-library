import React, { useState } from 'react';
import top from '../topology_40.png';
import { Gavel, Help, List as ListIcon, Menu, NotificationsActive, Public, Settings } from '@material-ui/icons';
import { Divider, MenuItem, Select, useMediaQuery, makeStyles } from '@material-ui/core';
import { Device } from '@pxblue/icons-mui';
import EatonLogo from '../EatonLogo.svg';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import {
    Spacer,
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerFooter,
    DrawerHeader,
    DrawerSubheader,
} from '@pxblue/react-components';
import clsx from 'clsx';

export const titleList = [
    'Overview',
    'Timeline',
    'Locations',
    'Devices',
    'Settings',
    'Legal',
    'Help',
    'Recent Locations',
    'All Facilities',
];

const useStyles = makeStyles({
    iconFlip: {
        transform: 'scaleX(-1)',
    },
});

export const NavigationDrawer = (props) => {
    const { open, setOpen } = props;
    const classes = useStyles();
    const [location, setLocation] = useState(0);
    const [route, setRoute] = useState(0);
    const theme = useTheme();
    const rtl = theme.direction === 'rtl';
    const history = useHistory();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const locations = ['All Locations', 'Gary Steelworks', 'Semaine Prochaine'];

    const navigate = (index) => {
        const newRoute = titleList[index];
        setRoute(index);
        history.push(`${newRoute.toLowerCase().replace(' ', '-')}`);
    };

    return (
        <Drawer
            open={open}
            width={300}
            ModalProps={{
                onBackdropClick: () => setOpen(!open),
            }}
            activeItem={titleList[route]}
            variant={xsDown ? 'temporary' : 'persistent'}
        >
            <DrawerHeader
                title={'Showcase App'}
                subtitle={'Components in Context'}
                backgroundColor={Colors.blue[500]}
                fontColor={Colors.white[50]}
                backgroundImage={top}
                icon={<Menu className={clsx({ [classes.iconFlip]: rtl })} />}
                onIconClick={() => setOpen(!open)}
            />
            <DrawerSubheader>
                <Select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{ height: theme.spacing(7), padding: theme.spacing(2), width: '100%' }}
                >
                    {locations.map((loc, ind) => (
                        <MenuItem key={`location${ind}`} value={ind}>
                            {loc}
                        </MenuItem>
                    ))}
                </Select>
            </DrawerSubheader>
            <DrawerBody>
                <DrawerNavGroup
                    items={[
                        {
                            title: titleList[0],
                            itemID: titleList[0],
                            icon: <ListIcon className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: () => {
                                navigate(0);
                                if (xsDown) setOpen(false);
                            },
                        },
                        {
                            title: titleList[1],
                            itemID: titleList[1],
                            subtitle: '2 Alarms',
                            icon: <NotificationsActive className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: () => {
                                navigate(1);
                                if (xsDown) setOpen(false);
                            },
                        },
                        {
                            title: titleList[2],
                            itemID: titleList[2],
                            icon: <Public className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: () => navigate(2),
                            onItemSelect: () => {}, // to prevent auto collapse on click
                            items: [
                                {
                                    title: titleList[7],
                                    itemID: titleList[7],
                                    onClick: () => {
                                        navigate(7);
                                        if (xsDown) setOpen(false);
                                    },
                                },
                                {
                                    title: titleList[8],
                                    itemID: titleList[8],
                                    onClick: () => {
                                        navigate(8);
                                        if (xsDown) setOpen(false);
                                    },
                                },
                            ],
                        },
                        {
                            title: titleList[3],
                            itemID: titleList[3],
                            icon: <Device className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: () => {
                                navigate(3);
                                if (xsDown) setOpen(false);
                            },
                        },
                    ]}
                />
                <Spacer />
                <Divider />
                <DrawerNavGroup
                    titleContent={
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                            <div>Account Configuration</div>
                            <div>v1.0.3</div>
                        </div>
                    }
                    items={[
                        {
                            title: titleList[4],
                            itemID: titleList[4],
                            icon: <Settings className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: () => {
                                navigate(4);
                                if (xsDown) setOpen(false);
                            },
                        },
                        {
                            title: titleList[5],
                            itemID: titleList[5],
                            icon: <Gavel className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: () => {
                                navigate(5);
                                if (xsDown) setOpen(false);
                            },
                        },
                        {
                            title: titleList[6],
                            itemID: titleList[6],
                            icon: <Help className={clsx({ [classes.iconFlip]: rtl })} />,
                            onClick: () => {
                                navigate(6);
                                if (xsDown) setOpen(false);
                            },
                        },
                    ]}
                />
            </DrawerBody>
            <DrawerFooter>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={EatonLogo}
                        style={{ margin: theme.spacing(1) }}
                        alt="Eaton Logo"
                        height={50}
                        width={'auto'}
                    />
                </div>
            </DrawerFooter>
        </Drawer>
    );
};
