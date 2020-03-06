import { Divider } from '@material-ui/core';
import {
    Accessibility,
    AddAPhoto,
    AirportShuttle,
    Dashboard,
    Devices,
    FitnessCenter,
    NotificationsActive,
    PinDrop,
    Toc,
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components';
import { State, Store } from '@sambego/storybook-state';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

const EatonLogo = require('../../assets/EatonLogo.svg');
const topologyBgImage = require('../../assets/topology_40.png');

type DrawerState = {
    selected: string;
};

const localStore = new Store<DrawerState>({
    selected: '',
});

const userGuide = 'User Guide';
const license = 'License';
const accessibility = 'Accessibility';
const notifications = 'Notifications';

export const defaultDrawerBody = (state: DrawerState, store: Store<DrawerState>): JSX.Element => (
    <DrawerBody>
        <DrawerNavGroup
            title={'Default Navigation Group'}
            activeItem={state.selected}
            items={[
                {
                    title: userGuide,
                    itemID: userGuide,
                    onClick: (): void => {
                        store.set({ selected: userGuide });
                    },
                    icon: <MoveToInboxIcon />,
                },
                {
                    title: license,
                    itemID: license,
                    onClick: (): void => {
                        store.set({ selected: license });
                    },
                    icon: <SendIcon />,
                },
                {
                    title: accessibility,
                    itemID: accessibility,
                    onClick: (): void => {
                        store.set({ selected: accessibility });
                    },
                    icon: <Accessibility />,
                },
                {
                    title: notifications,
                    itemID: notifications,
                    onClick: (): void => {
                        store.set({ selected: notifications });
                    },
                    icon: <NotificationsActive />,
                },
            ]}
        />
        <div style={{ flex: '1 1 0px' }} />
    </DrawerBody>
);

export const withStandardInputs = (): StoryFnReactReturnType => {
    const drawerGroupId = 'Drawer';
    const headerGroupId = 'Header';
    const bodyGroupId = 'Body';
    const footerGroupId = 'Footer';

    const open = boolean('Open', true, drawerGroupId);
    const width = number(
        'Width',
        350,
        {
            range: true,
            min: 200,
            max: 700,
            step: 50,
        },
        drawerGroupId
    );

    // Header
    const headerTitle = text('title', 'PX Blue Drawer', headerGroupId);
    const headerSubtitle = text('subtitle', 'Organize your menu items here', headerGroupId);
    const headerIconOptions = select('icon', ['Menu', 'Fitness', 'None'], 'Menu', headerGroupId);
    let headerIcon: JSX.Element;
    switch (headerIconOptions) {
        case 'Menu':
            headerIcon = <MenuIcon />;
            break;
        case 'Fitness':
            headerIcon = <FitnessCenter />;
            break;
        default:
            headerIcon = <></>;
    }
    const headerFontColor = color('fontColor', Colors.white[50], headerGroupId);
    const headerBackgroundColor = color('backgroundColor', Colors.blue[800], headerGroupId);
    const headerBackground = select('backgroundImage', ['None', 'Pattern'], 'Pattern', headerGroupId);
    const headerBackgroundImage = headerBackground === 'Pattern' ? topologyBgImage : '';

    // Body
    const groupTitle1 = text('title1', 'NavGroup 1', bodyGroupId);
    const groupTitle2 = text('title2', 'NavGroup 2', bodyGroupId);
    const bodyFontColor = color('fontColor', Colors.black[500], bodyGroupId);
    const bodyIconColor = color('iconColor', Colors.blue[500], bodyGroupId);
    const bodyBackgroundColor = color('backgroundColor', Colors.white[50], bodyGroupId);
    const bodyActiveFontColor = color('activeFontColor', Colors.blue[500], bodyGroupId);
    const bodyActiveIconColor = color('activeIconColor', Colors.blue[500], bodyGroupId);
    const bodyActiveBackgroundColor = color('activeBackgroundColor', Colors.blue[50], bodyGroupId);
    const bodyChevron = boolean('chevron', false, bodyGroupId);
    const bodyDividers = boolean('showDividers', true, bodyGroupId);

    const numberLinksGroup1 = number(
        'links1',
        4,
        {
            range: true,
            min: 0,
            max: 6,
            step: 1,
        },
        bodyGroupId
    );
    const numberLinksGroup2 = number(
        'links2',
        2,
        {
            range: true,
            min: 0,
            max: 4,
            step: 1,
        },
        bodyGroupId
    );

    const overview = 'Overview';
    const timeline = 'Timeline';
    const locations = 'Locations';
    const devices = 'Devices';
    const photos = 'Photos';
    const schedule = 'Schedule';
    const agreement = 'License Agreement';

    const links1 = [
        {
            title: overview,
            itemID: overview,
            onClick: (): void => {
                localStore.set({ selected: overview });
            },
            icon: <Dashboard />,
        },
        {
            title: timeline,
            itemID: timeline,
            onClick: (): void => {
                localStore.set({ selected: timeline });
            },
            icon: <Toc />,
        },
        {
            title: locations,
            itemID: locations,
            onClick: (): void => {
                localStore.set({ selected: locations });
            },
            icon: <PinDrop />,
        },
        {
            title: devices,
            itemID: devices,
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onClick: (): void => {
                localStore.set({ selected: devices });
            },
            icon: <Devices />,
        },
        {
            title: photos,
            itemID: photos,
            onClick: (): void => {
                localStore.set({ selected: photos });
            },
            icon: <AddAPhoto />,
        },
        {
            title: schedule,
            itemID: schedule,
            onClick: (): void => {
                localStore.set({ selected: schedule });
            },
            icon: <AirportShuttle />,
        },
    ].slice(0, numberLinksGroup1);

    const links2 = [
        {
            title: userGuide,
            itemID: userGuide,
            onClick: (): void => {
                localStore.set({ selected: userGuide });
            },
            icon: <MoveToInboxIcon />,
        },
        {
            title: agreement,
            itemID: agreement,
            subtitle: 'For Eaton employees only',
            onClick: (): void => {
                localStore.set({ selected: agreement });
            },
            icon: <SendIcon />,
        },
        {
            title: accessibility,
            itemID: accessibility,
            onClick: (): void => {
                localStore.set({ selected: accessibility });
            },
            icon: <Accessibility />,
        },
        {
            title: notifications,
            itemID: notifications,
            onClick: (): void => {
                localStore.set({ selected: notifications });
            },
            icon: <NotificationsActive />,
        },
    ].slice(0, numberLinksGroup2);

    // Footer
    const showFooter = boolean('show footer', true, footerGroupId);
    const footerBackgroundColor = color('backgroundColor', Colors.white[50], footerGroupId);

    return (
        <State store={localStore}>
            {(state): JSX.Element[] => [
                <Drawer open={open} width={width} key={'drawer'}>
                    <DrawerHeader
                        title={headerTitle}
                        subtitle={headerSubtitle}
                        icon={headerIcon}
                        backgroundImage={headerBackgroundImage}
                        fontColor={headerFontColor}
                        backgroundColor={headerBackgroundColor}
                    />

                    <DrawerBody
                        iconColor={bodyIconColor}
                        fontColor={bodyFontColor}
                        backgroundColor={bodyBackgroundColor}
                        activeFontColor={bodyActiveFontColor}
                        activeBackgroundColor={bodyActiveBackgroundColor}
                        activeIconColor={bodyActiveIconColor}
                        chevron={bodyChevron}
                    >
                        <DrawerNavGroup
                            activeItem={state.selected}
                            divider={bodyDividers}
                            items={links1}
                            title={groupTitle1}
                        />
                        <DrawerNavGroup
                            divider={bodyDividers}
                            activeItem={state.selected}
                            items={links2}
                            titleContent={
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                    <div>{groupTitle2}</div>
                                    <div>Software Version v1.0.3</div>
                                </div>
                            }
                        />
                    </DrawerBody>

                    {showFooter && (
                        <DrawerFooter backgroundColor={footerBackgroundColor}>
                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={EatonLogo}
                                    style={{ margin: '10px' }}
                                    alt="Eaton Logo"
                                    height={50}
                                    width={'auto'}
                                />
                            </div>
                        </DrawerFooter>
                    )}
                </Drawer>,
            ]}
        </State>
    );
};

withStandardInputs.story = { name: 'with standard inputs' };
