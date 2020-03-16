import React, { useState } from 'react';

import {
    Add,
    Remove,
    Menu,
    NotificationsActive,
    List as ListIcon,
    Public,
    Email,
    Settings,
    Gavel,
    Help,
    MoreVert,
} from '@material-ui/icons';
import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';
import DevicesIcon from '@material-ui/icons/Devices';
import SendIcon from '@material-ui/icons/Send';
import { useTheme } from '@material-ui/core/styles';
import { List, Card, AppBar, Toolbar, Typography, Select, MenuItem, Divider, Hidden, Button } from '@material-ui/core';

import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp, Moisture as Humidity, Device } from '@pxblue/icons-mui';

import {
    Hero,
    HeroBanner,
    ChannelValue,
    EmptyState,
    InfoListItem,
    ScoreCard,
    Spacer,
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerFooter,
    DrawerHeader,
    DrawerSubheader,
    UserMenu,
    DrawerLayout,
    ListItemTag,
} from '@pxblue/react-components';

import top from './topology_40.png';
import EatonLogo from './EatonLogo.svg';
import Avatar from '@material-ui/core/Avatar';

const locations = ['All Locations', 'Gary Steelworks', 'Semaine Prochaine'];

export default () => {
    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState(0);
    const [route, setRoute] = useState(0);
    const theme = useTheme();

    const titleList = [
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

    return (
        <DrawerLayout
            drawer={
                <Drawer
                    open={open}
                    width={300}
                    ModalProps={{
                        onBackdropClick: () => setOpen(!open),
                    }}
                    activeItem={titleList[route]}
                >
                    <DrawerHeader
                        title={'Showcase App'}
                        subtitle={'Components in Context'}
                        backgroundColor={Colors.blue[500]}
                        fontColor={Colors.white[50]}
                        backgroundImage={top}
                        icon={<Menu />}
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
                                    icon: <ListIcon />,
                                    onClick: () => setRoute(0),
                                },
                                {
                                    title: titleList[1],
                                    itemID: titleList[1],
                                    subtitle: '2 Alarms',
                                    icon: <NotificationsActive />,
                                    onClick: () => setRoute(1),
                                },
                                {
                                    title: titleList[2],
                                    itemID: titleList[2],
                                    icon: <Public />,
                                    onClick: () => setRoute(2),
                                    onItemSelect: () => {}, // to prevent auto collapse on click
                                    items: [
                                        {
                                            title: titleList[7],
                                            itemID: titleList[7],
                                            onClick: () => setRoute(7),
                                        },
                                        {
                                            title: titleList[8],
                                            itemID: titleList[8],
                                            onClick: () => setRoute(8),
                                        },
                                    ],
                                },
                                {
                                    title: titleList[3],
                                    itemID: titleList[3],
                                    icon: <Device />,
                                    onClick: () => setRoute(3),
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
                                    icon: <Settings />,
                                    onClick: () => setRoute(4),
                                },
                                {
                                    title: titleList[5],
                                    itemID: titleList[5],
                                    icon: <Gavel />,
                                    onClick: () => setRoute(5),
                                },
                                {
                                    title: titleList[6],
                                    itemID: titleList[6],
                                    icon: <Help />,
                                    onClick: () => setRoute(6),
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
            }
        >
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <AppBar position={'static'} color={'primary'}>
                    <Toolbar style={{ padding: `0 ${theme.spacing(2)}px` }}>
                        <Hidden smUp>
                            <Menu style={{ marginRight: theme.spacing(4) }} onClick={() => setOpen(!open)} />
                        </Hidden>
                        <Typography variant={'h6'}>Showcase</Typography>
                        <Spacer flex={1} />
                        <UserMenu
                            avatar={<Avatar>MS</Avatar>}
                            menuTitle={'Marshall Sutter'}
                            menuSubtitle={'msutter@acmesteel.com'}
                            menuGroups={[
                                {
                                    items: [
                                        {
                                            title: 'Log Out',
                                            itemID: 'Log Out',
                                            icon: <SendIcon />,
                                        },
                                        {
                                            title: 'Account Settings',
                                            itemID: 'Account Settings',
                                            icon: <Settings />,
                                            divider: true,
                                        },
                                    ],
                                },
                                {
                                    title: 'Contact Us',
                                    items: [
                                        {
                                            title: 'eatonhelp@eaton.com',
                                            itemID: 'email',
                                            icon: <SendIcon />,
                                        },
                                        {
                                            title: '1-866-905-9988',
                                            itemID: 'phone',
                                            icon: <Email />,
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Toolbar>
                </AppBar>
                <div style={{ padding: 10, flex: 1, overflow: 'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <ScoreCard
                            style={{ maxWidth: 400 }}
                            headerColor={Colors.red[500]}
                            headerBackgroundImage={top}
                            headerTitle={'Substation 3'}
                            headerSubtitle={'High Humidity Alarm'}
                            headerInfo={'4 Devices'}
                            headerFontColor={Colors.white[50]}
                            actionItems={[<MoreVert onClick={() => alert('something did')} />]}
                            badge={
                                <HeroBanner style={{ minWidth: 210 }}>
                                    <Hero
                                        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                                        label={'Temperature'}
                                        iconSize={48}
                                        value={98}
                                        units={'°F'}
                                        fontSize={'normal'}
                                    />
                                    <Hero
                                        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                                        label={'Humidity'}
                                        value={54}
                                        units={'%'}
                                        iconSize={48}
                                        fontSize={'normal'}
                                    />
                                </HeroBanner>
                            }
                            badgeOffset={0}
                            actionRow={<InfoListItem dense chevron title={'More'} hidePadding />}
                        >
                            <List style={{ padding: '16px 0' }}>
                                <InfoListItem
                                    dense
                                    style={{ height: 36 }}
                                    fontColor={Colors.red[500]}
                                    iconColor={Colors.red[500]}
                                    title={'1 Alarm'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem
                                    dense
                                    style={{ height: 36 }}
                                    fontColor={Colors.blue[500]}
                                    iconColor={Colors.blue[500]}
                                    title={'1 Event'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem
                                    dense
                                    style={{ height: 36 }}
                                    title={'Online'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                            </List>
                        </ScoreCard>
                        <ScoreCard
                            style={{ flex: '1 1 0px', maxWidth: 400, marginLeft: theme.spacing(1) }}
                            headerColor={Colors.blue[500]}
                            headerBackgroundImage={top}
                            headerTitle={'Substation 3'}
                            headerSubtitle={'Normal'}
                            headerInfo={'4 Devices'}
                            headerFontColor={Colors.white[50]}
                            actionItems={[<MoreVert onClick={() => alert('something did')} />]}
                            badge={
                                <HeroBanner>
                                    <Hero
                                        icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
                                        iconBackgroundColor={theme.palette.background.paper}
                                        label={'Health'}
                                        iconSize={72}
                                        value={98}
                                        units={'%'}
                                        fontSize={'normal'}
                                    />
                                </HeroBanner>
                            }
                            badgeOffset={-52}
                            actionRow={<InfoListItem dense chevron title={'View Location'} hidePadding />}
                        >
                            <List style={{ padding: '16px 0' }}>
                                <InfoListItem
                                    dense
                                    style={{ height: 36 }}
                                    title={'0 Alarms'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem
                                    dense
                                    style={{ height: 36 }}
                                    fontColor={Colors.blue[500]}
                                    iconColor={Colors.blue[500]}
                                    title={'1 Event'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem
                                    dense
                                    style={{ height: 36 }}
                                    title={'Online'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                            </List>
                        </ScoreCard>
                    </div>

                    <Card style={{ marginTop: theme.spacing(1) }}>
                        <List style={{ color: Colors.gray['800'], padding: 0 }}>
                            <HeroBanner divider>
                                <Hero
                                    icon={
                                        <GradeA fontSize={'inherit'} color={'inherit'} htmlColor={Colors.green[500]} />
                                    }
                                    label={'Healthy'}
                                    value={96}
                                    units={'/100'}
                                    fontSize={'normal'}
                                />
                                <Hero
                                    icon={<Pie color={Colors.blue[500]} percent={65} size={36} />}
                                    label={'Load'}
                                    fontSize={'normal'}
                                >
                                    <ChannelValue
                                        value={65}
                                        units={'%'}
                                        icon={<Trend htmlColor={Colors.red[500]} fontSize={'inherit'} />}
                                    />
                                </Hero>
                                <Hero
                                    icon={<Timer fontSize={'inherit'} color={'inherit'} />}
                                    label={'Estimated'}
                                    fontSize={'normal'}
                                >
                                    <ChannelValue value={1} units={'h'} />
                                    <ChannelValue value={26} units={'m'} />
                                </Hero>
                                <Hero
                                    icon={<Battery color={Colors.blue[500]} percent={100} size={36} />}
                                    value={'Full'}
                                    label={'Battery'}
                                    fontSize={'normal'}
                                >
                                    <ChannelValue value={'Full'} />
                                </Hero>
                            </HeroBanner>
                            <InfoListItem
                                dense
                                title={'Status'}
                                divider={'full'}
                                statusColor={Colors.green[500]}
                                subtitleSeparator={'/'}
                                icon={<Leaf color={'inherit'} />}
                                rightComponent={<ChannelValue fontSize={16} value={'Online, ESS+'} />}
                            />
                            <InfoListItem
                                title={'Input Voltage'}
                                divider={'full'}
                                avatar
                                subtitle={['Phase A', 'Phase B', 'Phase C']}
                                icon={<VoltageCircled />}
                                rightComponent={
                                    <span>
                                        <ChannelValue fontSize={16} value={478} units={'V'} />,{' '}
                                        <ChannelValue fontSize={16} value={479} units={'V'} />,{' '}
                                        <ChannelValue fontSize={16} value={473} units={'V'} />
                                    </span>
                                }
                            />
                            <InfoListItem
                                title={'Output Voltage'}
                                divider={'full'}
                                avatar
                                statusColor={Colors.red[500]}
                                fontColor={Colors.red[500]}
                                subtitle={['Phase A', 'Phase B', 'Phase C']}
                                icon={<VoltageCircled color={'inherit'} />}
                                rightComponent={
                                    <span style={{ color: Colors.red[500] }}>
                                        <ListItemTag label={'monitored'} style={{ marginRight: 8 }} />
                                        <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                                        <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                                        <ChannelValue fontSize={16} value={480} units={'V'} />
                                    </span>
                                }
                            />
                            <InfoListItem
                                dense
                                title={'Output Current'}
                                divider={'full'}
                                icon={<CurrentCircled color={'inherit'} />}
                                rightComponent={
                                    <span>
                                        <ChannelValue fontSize={16} value={15} units={'A'} />,{' '}
                                        <ChannelValue fontSize={16} value={14.9} units={'A'} />,{' '}
                                        <ChannelValue fontSize={16} value={15} units={'A'} />
                                    </span>
                                }
                            />
                            <InfoListItem
                                dense
                                title={'Temperature'}
                                icon={<Temp />}
                                rightComponent={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <ListItemTag
                                            backgroundColor={Colors.white['300']}
                                            label={'active'}
                                            fontColor={Colors.green['500']}
                                            style={{ marginRight: theme.spacing(1) }}
                                        />
                                        <ListItemTag
                                            style={{ marginRight: theme.spacing(1) }}
                                            label={'OVERHEAT'}
                                            backgroundColor={Colors.red['500']}
                                            onClick={(_) => {
                                                alert('You clicked me.');
                                            }}
                                        />
                                        <ChannelValue
                                            fontSize={16}
                                            icon={<Trend htmlColor={Colors.red[500]} />}
                                            value={68}
                                            units={'°F'}
                                        />
                                    </div>
                                }
                            />
                        </List>
                    </Card>
                    <Card style={{ marginTop: theme.spacing(1), padding: theme.spacing(3) }}>
                        <EmptyState
                            icon={<DevicesIcon fontSize={'inherit'} />}
                            title={'No Devices'}
                            description={'Contact your local admin for details'}
                            actions={
                                <Button variant="contained" color="primary">
                                    <Add style={{ marginRight: '5px' }} />
                                    Add Device
                                </Button>
                            }
                        />
                    </Card>
                    <Card style={{ marginTop: theme.spacing(1) }}>
                        <DrawerNavGroup
                            title={'Resources'}
                            open={true}
                            items={[
                                {
                                    title: 'Guides',
                                    itemID: 'Guides',
                                    icon: <DevicesIcon />,
                                    rightComponent: (
                                        <ListItemTag label={'new'} onClick={() => alert('You clicked me.')} />
                                    ),
                                    expandIcon: <Add />,
                                    collapseIcon: <Remove />,
                                    items: [
                                        {
                                            title: 'Installation Manual',
                                            itemID: 'Installation Manual',
                                            items: [
                                                {
                                                    title: '101',
                                                    itemID: '101',
                                                },
                                                {
                                                    title: '102',
                                                    itemID: '102',
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Maintenance',
                                            itemID: 'Maintenance',
                                        },
                                    ],
                                },
                                {
                                    title: 'Quality Control',
                                    itemID: 'Quality Control',
                                    icon: <Settings />,
                                    items: [
                                        {
                                            title: 'Training',
                                            itemID: 'Training',
                                        },
                                        {
                                            title: 'Checklist',
                                            itemID: 'Checklist',
                                        },
                                    ],
                                },
                                {
                                    title: 'Report',
                                    itemID: 'Report',
                                    icon: <ListIcon />,
                                    divider: false,
                                    items: [
                                        {
                                            title: '2020',
                                            itemID: '2020',
                                        },
                                        {
                                            title: '2021',
                                            itemID: '2021',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Card>
                </div>
            </div>
        </DrawerLayout>
    );
};
