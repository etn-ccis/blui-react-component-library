import React from 'react';

import { Add, Remove, List as ListIcon, Settings, MoreVert } from '@material-ui/icons';
import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';
import DevicesIcon from '@material-ui/icons/Devices';
import { useTheme } from '@material-ui/core/styles';
import { List, Card, Button } from '@material-ui/core';

import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp, Moisture as Humidity } from '@pxblue/icons-mui';

import {
    Hero,
    HeroBanner,
    ChannelValue,
    EmptyState,
    InfoListItem,
    ScoreCard,
    DrawerNavGroup,
    ListItemTag,
} from '@pxblue/react-components';

import top from './topology_40.png';

export const App = () => {
    const theme = useTheme();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: theme.spacing(), flex: 1 }}>
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
                                    icon={<Temp fontSize={'inherit'} htmlColor={Colors.gray[500]} />}
                                    label={'Temperature'}
                                    iconSize={48}
                                    value={98}
                                    units={'°F'}
                                />
                                <Hero
                                    icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                                    label={'Humidity'}
                                    value={54}
                                    units={'%'}
                                    iconSize={48}
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
                    <List style={{ padding: 0 }}>
                        <HeroBanner divider>
                            <Hero
                                icon={<GradeA fontSize={'inherit'} color={'inherit'} htmlColor={Colors.green[500]} />}
                                label={'Healthy'}
                                value={96}
                                units={'/100'}
                            />
                            <Hero icon={<Pie color={Colors.blue[500]} percent={65} size={36} />} label={'Load'}>
                                <ChannelValue
                                    value={65}
                                    units={'%'}
                                    icon={<Trend htmlColor={Colors.red[500]} fontSize={'inherit'} />}
                                />
                            </Hero>
                            <Hero icon={<Timer fontSize={'inherit'} color={'inherit'} />} label={'Estimated'}>
                                <ChannelValue value={1} units={'h'} />
                                <ChannelValue value={26} units={'m'} />
                            </Hero>
                            <Hero
                                icon={<Battery color={Colors.blue[500]} percent={100} size={36} />}
                                value={'Full'}
                                label={'Battery'}
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
                            rightComponent={<ChannelValue style={{ fontSize: 16 }} value={'Online, ESS+'} />}
                        />
                        <InfoListItem
                            title={'Input Voltage'}
                            divider={'full'}
                            avatar
                            subtitle={['Phase A', 'Phase B', 'Phase C']}
                            icon={<VoltageCircled />}
                            rightComponent={
                                <span style={{ fontSize: 16 }}>
                                    <ChannelValue value={478} units={'V'} />, <ChannelValue value={479} units={'V'} />,{' '}
                                    <ChannelValue value={473} units={'V'} />
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
                                <span style={{ color: Colors.red[500], fontSize: 16 }}>
                                    <ListItemTag label={'monitored'} style={{ marginRight: 8 }} />
                                    <ChannelValue value={480} units={'V'} />, <ChannelValue value={480} units={'V'} />,{' '}
                                    <ChannelValue value={480} units={'V'} />
                                </span>
                            }
                        />
                        <InfoListItem
                            dense
                            title={'Output Current'}
                            divider={'full'}
                            icon={<CurrentCircled color={'inherit'} />}
                            rightComponent={
                                <span style={{ fontSize: 16 }}>
                                    <ChannelValue value={15} units={'A'} />, <ChannelValue value={14.9} units={'A'} />,{' '}
                                    <ChannelValue value={15} units={'A'} />
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
                                        backgroundColor={theme.palette.background.default}
                                        label={'active'}
                                        fontColor={
                                            theme.palette.type === 'light' ? Colors.blue[700] : Colors.green['500']
                                        }
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
                                        style={{ fontSize: 16 }}
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
                        items={[
                            {
                                title: 'Guides',
                                itemID: 'Guides',
                                icon: <DevicesIcon />,
                                rightComponent: <ListItemTag label={'new'} onClick={() => alert('You clicked me.')} />,
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
    );
};
