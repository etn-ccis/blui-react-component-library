import { Typography } from '@material-ui/core';
import {
    Accessibility,
    Add,
    AddAPhoto,
    Dashboard,
    Devices,
    Event,
    FitnessCenter,
    NotificationsActive,
    Remove,
    PinDrop,
    Toc,
    Menu,
} from '@material-ui/icons';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@brightlayer-ui/colors';
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
    DrawerFooterProps,
} from '@brightlayer-ui/react-components';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React, { useState } from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { getLeftToRightIconTransform } from '../../src/utils';
import { useDarkMode } from 'storybook-dark-mode';
import EatonFooterLogoLight from '../../assets/EatonLogoLight.png';
import EatonFooterLogoDark from '../../assets/EatonLogoDark.png';

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
        case '<Dashboard />':
            return <Dashboard />;
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

export const withFullConfig = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');
    const isDarkMode = useDarkMode();

    // storybook tab names
    const drawerGroupId = 'Drawer';
    const headerGroupId = 'Header';
    const bodyGroupId = 'Body';
    const navGroupId = 'NavGroup';
    const navItemId = 'NavItem';
    const footerGroupId = 'Footer';

    const drawerKnobs: DrawerComponentProps = {
        activeItemBackgroundColor: color('activeItemBackgroundColor', Colors.blue[50], drawerGroupId),
        activeItemFontColor: color('activeItemFontColor', Colors.blue[500], drawerGroupId),
        activeItemIconColor: color('activeItemIconColor', Colors.blue[500], drawerGroupId),
        activeItemBackgroundShape: select('activeItemBackgroundShape', ['round', 'square'], 'square', drawerGroupId),
        chevron: boolean('chevron', false, drawerGroupId),
        collapseIcon: getIcon(
            select('collapseIcon', ['undefined', '<Remove />', '<AddAPhoto />'], 'undefined', drawerGroupId)
        ),
        disableActiveItemParentStyles: boolean('disableActiveItemParentStyles', true, drawerGroupId),
        divider: boolean('divider', true, drawerGroupId),
        expandIcon: getIcon(select('expandIcon', ['undefined', '<Add />', '<PinDrop />'], 'undefined', drawerGroupId)),
        hidePadding: boolean('hidePadding', false, drawerGroupId),
        itemFontColor: color('itemFontColor', Colors.black[500], drawerGroupId),
        itemIconColor: color('itemIconColor', Colors.black[500], drawerGroupId),
        nestedBackgroundColor: color('nestedBackgroundColor', Colors.white[200], drawerGroupId),
        nestedDivider: boolean('nestedDivider', false, drawerGroupId),
        open: boolean('open', true, drawerGroupId),
        openOnHover: boolean('openOnHover (persistent only)', true, drawerGroupId),
        openOnHoverDelay: number(
            'openOnHoverDelay (persistent only)',
            500,
            {
                range: true,
                min: 100,
                max: 1000,
                step: 100,
            },
            drawerGroupId
        ),
        ripple: boolean('ripple', true, drawerGroupId),
        sideBorder: boolean('sideBorder', true, drawerGroupId),
        variant: select('variant', ['permanent', 'persistent', 'temporary', 'rail'], 'persistent', drawerGroupId),
        condensed: boolean('condensed (rail only)', false, drawerGroupId),
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

    const headerKnobs: DrawerHeaderProps = {
        backgroundColor: color('backgroundColor', Colors.blue[500], headerGroupId),
        backgroundImage:
            headerBackgroundImageOptions[
                select('backgroundImage', ['undefined', 'Pattern', 'Farm'], 'Pattern', headerGroupId)
            ],
        divider: boolean('divider', false, headerGroupId),
        backgroundOpacity: number('backgroundOpacity', 0.4, { range: true, min: 0, max: 1, step: 0.1 }, headerGroupId),
        fontColor: color('fontColor', Colors.white[50], headerGroupId),
        icon: getIcon(select('icon', ['<Menu />', '<FitnessCenter />', 'undefined'], '<Menu />', headerGroupId)),
        subtitle: text('subtitle', 'Organize your menu items here', headerGroupId),
        title: text('title', 'Brightlayer UI Drawer', headerGroupId),
    };

    const bodyKnobs: DrawerBodyProps = {
        backgroundColor: color('backgroundColor', 'transparent', bodyGroupId),
    };

    const navGroupKnobs: Partial<DrawerNavGroupProps> = {
        title: text('drawerNavGroup[0].title', 'NavGroup 1', navGroupId),
        titleColor: color('drawerNavGroup[0].titleColor', Colors.black[500], navGroupId),
    };

    const navItemKnobs: Partial<NavItem> = {
        hidden: boolean('hidden', false, navItemId),
        icon: getIcon(select('icon', ['<Dashboard />', '<FitnessCenter />', 'undefined'], '<Dashboard />', navItemId)),
        statusColor: color('statusColor', Colors.green[300], navItemId),
        subtitle: text('subtitle', 'Learn more about us', navItemId),
        title: text('title', overview, navItemId),
        disableRailTooltip: boolean('disableRailTooltip', false, navItemId),
    };

    const footerKnobs: Partial<DrawerFooterProps> = {
        hideContentOnCollapse: boolean('hideContentOnCollapse', true, footerGroupId),
        divider: boolean('divider', true, footerGroupId),
    };

    // DrawerNavGroup.items
    const links1 = [
        {
            hidden: navItemKnobs.hidden,
            icon: navItemKnobs.icon,
            statusColor: navItemKnobs.statusColor,
            subtitle: navItemKnobs.subtitle,
            // title is a required prop, using a placeholder in case the knob is empty
            title: navItemKnobs.title || 'title',
            disableRailTooltip: navItemKnobs.disableRailTooltip,
            itemID: '0',
            items: [
                {
                    title: monthlyReport,
                    itemID: monthlyReport,
                    onClick: (): void => {
                        setSelected(monthlyReport);
                    },
                },
                {
                    title: annualReport,
                    itemID: annualReport,
                    onClick: (): void => {
                        setSelected(annualReport);
                    },
                },
            ],
        },
        {
            title: timeline,
            itemID: timeline,
            onClick: (): void => {
                setSelected(timeline);
            },
            icon: <Toc />,
        },
        {
            title: locations,
            itemID: locations,
            onClick: (): void => {
                setSelected(locations);
            },
            icon: <PinDrop />,
        },
        {
            title: devices,
            itemID: devices,
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onClick: (): void => {
                setSelected(devices);
            },
            icon: <Devices />,
        },
        {
            title: photos,
            itemID: photos,
            onClick: (): void => {
                setSelected(photos);
            },
            icon: <AddAPhoto />,
        },
        {
            title: schedule,
            itemID: schedule,
            onClick: (): void => {
                setSelected(schedule);
            },
            icon: <Event style={getLeftToRightIconTransform()} />,
        },
    ];

    const links2 = [
        {
            title: userGuide,
            itemID: userGuide,
            onClick: (): void => {
                setSelected(userGuide);
            },
            icon: <MoveToInboxIcon />,
        },
        {
            title: agreement,
            itemID: agreement,
            subtitle: 'For Eaton employees only',
            onClick: (): void => {
                setSelected(agreement);
            },
            icon: <SendIcon style={getLeftToRightIconTransform()} />,
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
                        setSelected(colorContrastGuide);
                    },
                },
                {
                    title: screenReader,
                    itemID: screenReader,
                    onClick: (): void => {
                        setSelected(screenReader);
                    },
                },
            ],
        },
        {
            title: notifications,
            itemID: notifications,
            onClick: (): void => {
                setSelected(notifications);
            },
            icon: <NotificationsActive />,
        },
    ];

    // Footer props
    const showFooter = boolean('Show footer', true, footerGroupId);
    const footerBackgroundColor = color('backgroundColor', Colors.white[50], footerGroupId);

    // You can replace the knob props with your own values
    return (
        <Drawer
            key={'drawer'}
            activeItem={selected}
            activeItemBackgroundColor={drawerKnobs.activeItemBackgroundColor}
            activeItemFontColor={drawerKnobs.activeItemFontColor}
            activeItemIconColor={drawerKnobs.activeItemIconColor}
            activeItemBackgroundShape={drawerKnobs.activeItemBackgroundShape}
            chevron={drawerKnobs.chevron}
            collapseIcon={drawerKnobs.collapseIcon}
            condensed={drawerKnobs.condensed}
            divider={drawerKnobs.divider}
            expandIcon={drawerKnobs.expandIcon}
            hidePadding={drawerKnobs.hidePadding}
            itemFontColor={drawerKnobs.itemFontColor}
            itemIconColor={drawerKnobs.itemIconColor}
            nestedBackgroundColor={drawerKnobs.nestedBackgroundColor}
            nestedDivider={drawerKnobs.nestedDivider}
            open={drawerKnobs.open}
            openOnHover={drawerKnobs.openOnHover}
            openOnHoverDelay={drawerKnobs.openOnHoverDelay}
            ripple={drawerKnobs.ripple}
            sideBorder={drawerKnobs.sideBorder}
            variant={drawerKnobs.variant}
            width={drawerKnobs.width}
            ModalProps={{
                disableEnforceFocus: true,
            }}
        >
            <DrawerHeader
                backgroundColor={headerKnobs.backgroundColor}
                backgroundImage={headerKnobs.backgroundImage}
                backgroundOpacity={headerKnobs.backgroundOpacity}
                divider={headerKnobs.divider}
                fontColor={headerKnobs.fontColor}
                icon={headerKnobs.icon}
                subtitle={headerKnobs.subtitle}
                title={headerKnobs.title}
            />
            <DrawerBody backgroundColor={bodyKnobs.backgroundColor}>
                <DrawerNavGroup items={links1} title={navGroupKnobs.title} titleColor={navGroupKnobs.titleColor} />
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
                            <Typography variant={'overline'} style={{ lineHeight: 'unset' }}>
                                NavGroup 2
                            </Typography>
                            <div>Software Version v1.0.3</div>
                        </div>
                    }
                />
            </DrawerBody>

            {showFooter && (
                <DrawerFooter backgroundColor={footerBackgroundColor} {...footerKnobs}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            padding: 16,
                        }}
                    >
                        <img
                            src={isDarkMode ? EatonFooterLogoDark : EatonFooterLogoLight}
                            alt="Eaton Logo"
                            height={28}
                            width={'auto'}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography
                                variant={'caption'}
                            >{`Copyright \u00A9 Eaton ${new Date().getFullYear()}`}</Typography>
                            <Typography variant={'caption'}>All Rights Reserved</Typography>
                        </div>
                    </div>
                </DrawerFooter>
            )}
        </Drawer>
    );
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
