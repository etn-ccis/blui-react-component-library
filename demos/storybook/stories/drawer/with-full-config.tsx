import { Divider } from '@material-ui/core';
import {
    Accessibility,
    Add,
    AddAPhoto,
    AirportShuttle,
    Dashboard,
    Devices,
    FitnessCenter,
    NotificationsActive,
    Remove,
    PinDrop,
    Toc,
    Menu,
} from '@material-ui/icons';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import {
    Drawer,
    DrawerComponentProps,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerNavGroup,
    DrawerHeaderProps,
    DrawerBodyProps,
    DrawerNavGroupProps,
    NavItem,
} from '@pxblue/react-components';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { DrawerStoryContext } from './util';

const EatonLogo = require('../../assets/EatonLogo.svg');
const topologyBgImage = require('../../assets/topology_40.png');
const farmBgImage = require('../../assets/farm.jpg');

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
const monthlyReport = 'Monthly Report';
const annualReport = 'Annual Report';
const colorContrastGuide = 'Color Contrast Guide';
const screenReader = 'Screen Reader';

const getIcon = (icon: string): JSX.Element | undefined => {
    switch (icon) {
        case '<Add />':
            return <Add />;
        case '<PinDrop />':
            return <PinDrop />;
        case '<Remove />':
            return <Remove />;
        case '<AddAPhoto />':
            return <AddAPhoto />;
        case '<Menu />':
            return <Menu />;
        case '<FitnessCenter />':
            return <FitnessCenter />;
        case 'undefined':
        default:
            return undefined;
    }
};

const headerBackgroundImageOptions = {
    Pattern: topologyBgImage,
    Farm: farmBgImage,
    undefined: undefined,
};

export const withFullConfig = (context: DrawerStoryContext): StoryFnReactReturnType => {
    const drawerGroupId = 'Drawer';
    const headerGroupId = 'Header';
    const bodyGroupId = 'Body';
    const navGroupId = 'NavGroup 1';
    const navItemId = 'NavItem';
    const footerGroupId = 'Footer';

    const drawerKnobs: Partial<DrawerComponentProps> = {
        activeItemBackgroundColor: color('activeItemBackgroundColor', Colors.blue[50], drawerGroupId),
        activeItemFontColor: color('activeItemFontColor', Colors.blue[500], drawerGroupId),
        activeItemIconColor: color('activeItemIconColor', Colors.blue[500], drawerGroupId),
        activeItemBackgroundShape: select('activeItemBackgroundShape', ['round', 'square'], 'round', drawerGroupId),
        chevron: boolean('chevron', false, drawerGroupId),
        collapseIcon: getIcon(
            select('collapseIcon', ['undefined', '<Remove />', '<AddAPhoto />'], 'undefined', drawerGroupId)
        ),
        divider: boolean('divider', true, drawerGroupId),
        expandIcon: getIcon(select('expandIcon', ['undefined', '<Add />', '<PinDrop />'], 'undefined', drawerGroupId)),
        hidePadding: boolean('hidePadding', false, drawerGroupId),
        itemFontColor: color('itemFontColor', Colors.gray[500], drawerGroupId),
        itemIconColor: color('itemIconColor', Colors.gray[500], drawerGroupId),
        nestedBackgroundColor: color('nestedBackgroundColor', Colors.white[200], drawerGroupId),
        nestedDivider: boolean('nestedDivider', false, drawerGroupId),
        open: boolean('open', true, drawerGroupId),
        ripple: boolean('ripple', true, drawerGroupId),
        width: number(
            'width',
            350,
            {
                range: true,
                min: 200,
                max: 700,
                step: 50,
            },
            drawerGroupId
        ),
    };

    const headerKnobs: Partial<DrawerHeaderProps> = {
        backgroundColor: color('backgroundColor', Colors.gold[800], headerGroupId),
        backgroundImage:
            headerBackgroundImageOptions[
                select('backgroundImage', ['undefined', 'Pattern', 'Farm'], 'Pattern', headerGroupId)
            ],
        backgroundOpacity: number('backgroundOpacity', 0.4, { range: true, min: 0, max: 1, step: 0.1 }, headerGroupId),
        fontColor: color('fontColor', Colors.white[50], headerGroupId),
        icon: getIcon(select('icon', ['<Menu />', '<FitnessCenter />', 'undefined'], '<Menu />', headerGroupId)),
        subtitle: text('subtitle', 'Organize your menu items here', headerGroupId),
        title: text('title', 'PX Blue Drawer', headerGroupId),
    };

    const bodyKnobs: Partial<DrawerBodyProps> = {
        backgroundColor: color('backgroundColor', Colors.white[50], bodyGroupId),
    };

    const navGroupKnobs: Partial<DrawerNavGroupProps> = {
        activeItemBackgroundColor: color('activeItemBackgroundColor', Colors.blue[50], navGroupId),
        activeItemFontColor: color('activeItemFontColor', Colors.blue[500], navGroupId),
        activeItemIconColor: color('activeItemIconColor', Colors.blue[500], navGroupId),
        activeItemBackgroundShape: select('activeItemBackgroundShape', ['round', 'square'], 'round', navGroupId),
        chevron: boolean('chevron', false, navGroupId),
        collapseIcon: getIcon(
            select('collapseIcon', ['undefined', '<Remove />', '<AddAPhoto />'], 'undefined', navGroupId)
        ),
        divider: boolean('divider', true, navGroupId),
        expandIcon: getIcon(select('expandIcon', ['undefined', '<Add />', '<PinDrop />'], 'undefined', navGroupId)),
        hidePadding: boolean('hidePadding', false, navGroupId),
        itemFontColor: color('itemFontColor', Colors.gray[500], navGroupId),
        itemIconColor: color('itemIconColor', Colors.gray[500], navGroupId),
        nestedBackgroundColor: color('nestedBackgroundColor', Colors.white[200], navGroupId),
        nestedDivider: boolean('nestedDivider', false, navGroupId),
        ripple: boolean('ripple', true, navGroupId),
        title: text('title', 'NavGroup 1', navGroupId),
    };

    const navItemKnobs: Partial<NavItem> = {
        activeItemBackgroundColor: color('activeItemBackgroundColor', Colors.blue[50], navItemId),
        activeItemFontColor: color('activeItemFontColor', Colors.blue[500], navItemId),
        activeItemIconColor: color('activeItemIconColor', Colors.blue[500], navItemId),
        activeItemBackgroundShape: select('activeItemBackgroundShape', ['round', 'square'], 'round', navItemId),
        chevron: boolean('chevron', false, navItemId),
        collapseIcon: getIcon(
            select('collapseIcon', ['undefined', '<Remove />', '<AddAPhoto />'], 'undefined', navItemId)
        ),
        divider: boolean('divider', true, navItemId),
        expandIcon: getIcon(select('expandIcon', ['undefined', '<Add />', '<PinDrop />'], 'undefined', navItemId)),
        hidePadding: boolean('hidePadding', false, navItemId),
        itemFontColor: color('itemFontColor', Colors.gray[500], navItemId),
        itemIconColor: color('itemIconColor', Colors.gray[500], navItemId),
        ripple: boolean('ripple', true, navItemId),
        statusColor: color('statusColor', Colors.green[300], navItemId),
        subtitle: text('subtitle', 'Learn more about us', navItemId),
        title: text('title', overview, navItemId),
    };

    const links1 = [
        {
            title: 'title', // placeholder text when the knob is empty
            itemID: '0',
            items: [
                {
                    title: monthlyReport,
                    itemID: monthlyReport,
                    onClick: (): void => {
                        context.store.set({ selected: monthlyReport });
                    },
                },
                {
                    title: annualReport,
                    itemID: annualReport,
                    onClick: (): void => {
                        context.store.set({ selected: annualReport });
                    },
                },
            ],
            icon: <Dashboard />,
            ...navItemKnobs,
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
    ];

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
            icon: <Accessibility />,
            items: [
                {
                    title: colorContrastGuide,
                    itemID: colorContrastGuide,
                    onClick: (): void => {
                        context.store.set({ selected: colorContrastGuide });
                    },
                },
                {
                    title: screenReader,
                    itemID: screenReader,
                    onClick: (): void => {
                        context.store.set({ selected: screenReader });
                    },
                },
            ],
        },
        {
            title: notifications,
            itemID: notifications,
            onClick: (): void => {
                context.store.set({ selected: notifications });
            },
            icon: <NotificationsActive />,
        },
    ];

    // Footer
    const showFooter = boolean('Show footer', true, footerGroupId);
    const footerBackgroundColor = color('backgroundColor', Colors.white[50], footerGroupId);

    return (
        <Drawer key={'drawer'} activeItem={context.state.selected} {...drawerKnobs}>
            <DrawerHeader {...headerKnobs} />
            <DrawerBody {...bodyKnobs}>
                <DrawerNavGroup items={links1} {...navGroupKnobs} />
                <DrawerNavGroup
                    items={links2}
                    titleContent={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontWeight: 600,
                            }}
                        >
                            <div>NavGroup 2</div>
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
