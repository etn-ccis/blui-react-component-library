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
import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { DrawerStoryContext } from './util';

const EatonLogo = require('../../assets/EatonLogo.svg');
const topologyBgImage = require('../../assets/topology_40.png');

const userGuide = 'User Guide';
const accessibility = 'Accessibility';
const notifications = 'Notifications';
const overview = 'Overview';
const timeline = 'Timeline';
const locations = 'Locations';
const devices = 'Devices';
const photos = 'Photos';
const schedule = 'Schedule';
const agreement = 'License Agreement';

export const withFullConfig = (context: DrawerStoryContext): StoryFnReactReturnType => {
    const drawerGroupId = 'Drawer';
    const headerGroupId = 'Header';
    const bodyGroupId = 'Body';
    const footerGroupId = 'Footer';

    const open = boolean('open', true, drawerGroupId);
    const width = number(
        'width',
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

    const numberLinksGroup1 = 4;
    const numberLinksGroup2 = 2;

    const links1 = [
        {
            title: overview,
            itemID: overview,
            onClick: (): void => {
                context.store.set({ selected: overview });
            },
            icon: <Dashboard />,
        },
        {
            title: timeline,
            itemID: timeline,
            onClick: (): void => {
                context.store.set({ selected: timeline });
            },
            icon: <Toc />,
        },
        {
            title: locations,
            itemID: locations,
            onClick: (): void => {
                context.store.set({ selected: locations });
            },
            icon: <PinDrop />,
        },
        {
            title: devices,
            itemID: devices,
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onClick: (): void => {
                context.store.set({ selected: devices });
            },
            icon: <Devices />,
        },
        {
            title: photos,
            itemID: photos,
            onClick: (): void => {
                context.store.set({ selected: photos });
            },
            icon: <AddAPhoto />,
        },
        {
            title: schedule,
            itemID: schedule,
            onClick: (): void => {
                context.store.set({ selected: schedule });
            },
            icon: <AirportShuttle />,
        },
    ].slice(0, numberLinksGroup1);

    const links2 = [
        {
            title: userGuide,
            itemID: userGuide,
            onClick: (): void => {
                context.store.set({ selected: userGuide });
            },
            icon: <MoveToInboxIcon />,
        },
        {
            title: agreement,
            itemID: agreement,
            subtitle: 'For Eaton employees only',
            onClick: (): void => {
                context.store.set({ selected: agreement });
            },
            icon: <SendIcon />,
        },
        {
            title: accessibility,
            itemID: accessibility,
            onClick: (): void => {
                context.store.set({ selected: accessibility });
            },
            icon: <Accessibility />,
        },
        {
            title: notifications,
            itemID: notifications,
            onClick: (): void => {
                context.store.set({ selected: notifications });
            },
            icon: <NotificationsActive />,
        },
    ].slice(0, numberLinksGroup2);

    // Footer
    const showFooter = boolean('show footer', true, footerGroupId);
    const footerBackgroundColor = color('backgroundColor', Colors.white[50], footerGroupId);

    return (
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
                    activeItem={context.state.selected}
                    divider={bodyDividers}
                    items={links1}
                    title={groupTitle1}
                />
                <DrawerNavGroup
                    divider={bodyDividers}
                    activeItem={context.state.selected}
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
                        <img src={EatonLogo} style={{ margin: '10px' }} alt="Eaton Logo" height={50} width={'auto'} />
                    </div>
                </DrawerFooter>
            )}
        </Drawer>
    );
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
