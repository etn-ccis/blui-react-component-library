import {
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    IconButton,
    TextField,
    Typography,
} from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';
import {
    Accessibility,
    AddAPhoto,
    AirportShuttle,
    Dashboard,
    Devices,
    FitnessCenter,
    NotificationsActive,
    PinDrop,
    Search,
    Toc,
    Add,
    Remove,
} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import {
    Drawer,
    DrawerHeader,
    DrawerSubheader,
    DrawerBody,
    DrawerFooter,
    DrawerNavGroup,
    ListItemTag,
    ChannelValue,
} from '@pxblue/react-components';
import { State, Store } from '@sambego/storybook-state';
import { boolean, color, number, optionsKnob, select, text } from '@storybook/addon-knobs';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { storyWrapper } from '../src/utils';

const EatonLogo = require('../assets/EatonLogo.svg');
const topologyBgImage = require('../assets/topology_40.png');
const farmBgImage = require('../assets/farm.jpg');

export const stories = storiesOf('playground/Drawer', module);
stories.addDecorator(storyWrapper);
stories.addParameters({
    options: {
        showPanel: true,
    },
});

type DrawerState = {
    selected: string;
};

const store = new Store<DrawerState>({
    selected: '',
});

const userGuide = 'User Guide';
const license = 'License';
const accessibility = 'Accessibility';
const notifications = 'Notifications';
const gettingStarted = 'Getting Started';
const tutorials = 'Tutorials';
const forDevelopers = 'For Developers';
const forDesigners = 'For Designers';
const environmentSetup = 'Environment Setup';
const community = 'Community';
const hallOfFame = 'Hall of Fame';
const contribute = 'Contribute';
const contributingGuide = 'Contributing Guide';
const componentLibrary = 'Component Library';
const typographyRules = 'Typography Rules';
const themeRules = 'Theme Rules';

export const padDrawer = (drawer: JSX.Element): JSX.Element => (
    <div style={{ padding: 20, display: 'flex', height: '100%' }}>{drawer}</div>
);

export const defaultDrawerBody = (state: DrawerState): JSX.Element => (
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

stories.add(
    'with standard inputs',
    (): JSX.Element => {
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
                    store.set({ selected: overview });
                },
                icon: <Dashboard />,
            },
            {
                title: timeline,
                itemID: timeline,
                onClick: (): void => {
                    store.set({ selected: timeline });
                },
                icon: <Toc />,
            },
            {
                title: locations,
                itemID: locations,
                onClick: (): void => {
                    store.set({ selected: locations });
                },
                icon: <PinDrop />,
            },
            {
                title: devices,
                itemID: devices,
                subtitle: '5 new warnings',
                statusColor: Colors.yellow[500],
                onClick: (): void => {
                    store.set({ selected: devices });
                },
                icon: <Devices />,
            },
            {
                title: photos,
                itemID: photos,
                onClick: (): void => {
                    store.set({ selected: photos });
                },
                icon: <AddAPhoto />,
            },
            {
                title: schedule,
                itemID: schedule,
                onClick: (): void => {
                    store.set({ selected: schedule });
                },
                icon: <AirportShuttle />,
            },
        ].slice(0, numberLinksGroup1);

        const links2 = [
            {
                title: userGuide,
                itemID: userGuide,
                onClick: (): void => {
                    store.set({ selected: userGuide });
                },
                icon: <MoveToInboxIcon />,
            },
            {
                title: agreement,
                itemID: agreement,
                subtitle: 'For Eaton employees only',
                onClick: (): void => {
                    store.set({ selected: agreement });
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
        ].slice(0, numberLinksGroup2);

        // Footer
        const showFooter = boolean('show footer', true, footerGroupId);
        const footerBackgroundColor = color('backgroundColor', Colors.white[50], footerGroupId);

        return padDrawer(
            <State store={store}>
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
    }
);

stories.add(
    'with custom header',
    (): JSX.Element => {
        const open = boolean('Open', true);
        return padDrawer(
            <State store={store}>
                {(state): JSX.Element[] => [
                    <Drawer open={open} key={'drawer'}>
                        <DrawerHeader
                            backgroundImage={farmBgImage}
                            backgroundOpacity={0.5}
                            icon={<MenuIcon />}
                            titleContent={
                                <div style={{ zIndex: 1, paddingLeft: '20px', paddingTop: '15px' }}>
                                    <Typography variant="subtitle2">Customizable</Typography>
                                    <Typography variant="h6" style={{ marginTop: '-10px' }}>
                                        Header Content Goes Here
                                    </Typography>
                                </div>
                            }
                        />
                        {defaultDrawerBody(state)}
                    </Drawer>,
                ]}
            </State>
        );
    }
);

stories.add(
    'with subheader',
    (): JSX.Element => {
        const open = boolean('Open', true);
        const label = 'content';
        const valuesObj = {
            Filter: 'Filter',
            Accordion: 'Accordion',
        };
        const defaultValue = 'Filter';
        const optionsObj = {
            display: 'inline-radio' as OptionsKnobOptionsDisplay,
        };

        const value = optionsKnob(label, valuesObj, defaultValue, optionsObj);

        const filter = (
            <TextField
                id="outlined-basic"
                label="filter"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
        const accordion = (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );

        return padDrawer(
            <State store={store}>
                {(state): JSX.Element[] => [
                    <Drawer open={open} key={'drawer'}>
                        <DrawerHeader icon={<MenuIcon />} title={'Subheader Demo'} />
                        <DrawerSubheader>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '20px',
                                }}
                            >
                                {value === 'Filter' ? filter : accordion}
                            </div>
                        </DrawerSubheader>
                        {defaultDrawerBody(state)}
                    </Drawer>,
                ]}
            </State>
        );
    }
);

stories.add(
    'with nested list items',
    (): JSX.Element => {
        const DrawerNavGroupID = 'DrawerNavGroup';
        const open = boolean('Open', true, DrawerNavGroupID);
        const divider = boolean('divider', true, DrawerNavGroupID);
        const nestedDivider = boolean('nestedDivider', false, DrawerNavGroupID);
        const ripple = boolean('ripple', true, DrawerNavGroupID);
        const chevron = boolean('chevron', false, DrawerNavGroupID);
        const round = select('activeBackgroundShape', ['round', 'square'], 'round', DrawerNavGroupID);

        const NavItemID = 'NavItem';
        const useIcon = boolean('Use icons', true, NavItemID);
        const useRightComponent = select(
            'rightComponent',
            ['undefined', '<ListItemTag />', '<ChannelValue />'],
            'undefined',
            NavItemID
        );
        const useExpandIcon = select('expandIcon', ['undefined', '<Add />', '<PinDrop />'], 'undefined', NavItemID);
        const useCollapseIcon = select(
            'collapseIcon',
            ['undefined', '<Remove />', '<AddAPhoto />'],
            'undefined',
            NavItemID
        );

        const rightComponent = ((): JSX.Element | undefined => {
            switch (useRightComponent) {
                case 'undefined':
                    return undefined;
                case '<ListItemTag />':
                    return <ListItemTag label="56+" backgroundColor={Colors.gold[50]} fontColor={Colors.gold[800]} />;
                case '<ChannelValue />':
                    return <ChannelValue value={2} units={'V'} />;
                default:
                    break;
            }
        })();

        const expandIcon = ((): JSX.Element | undefined => {
            switch (useExpandIcon) {
                case 'undefined':
                    return undefined;
                case '<Add />':
                    return <Add />;
                case '<PinDrop />':
                    return <PinDrop />;
                default:
                    break;
            }
        })();

        const collapseIcon = ((): JSX.Element | undefined => {
            switch (useCollapseIcon) {
                case 'undefined':
                    return undefined;
                case '<Remove />':
                    return <Remove />;
                case '<AddAPhoto />':
                    return <AddAPhoto />;
                default:
                    break;
            }
        })();

        const drawerItemList = (state: DrawerState): JSX.Element => (
            <DrawerBody>
                <DrawerNavGroup
                    divider={divider}
                    nestedDivider={nestedDivider}
                    title={'Default Navigation Group'}
                    hidePadding={!useIcon}
                    ripple={ripple}
                    activeItem={state.selected}
                    titleColor={Colors.black[500]}
                    activeBackgroundShape={round}
                    chevron={chevron}
                    items={[
                        {
                            title: userGuide,
                            icon: useIcon ? <AddAPhoto /> : undefined,
                            itemID: userGuide,
                            rightComponent: rightComponent,
                            expandIcon: expandIcon,
                            collapseIcon: collapseIcon,
                            items: [
                                {
                                    title: gettingStarted,
                                    itemID: gettingStarted,
                                    subtitle: 'Introduction to Eaton',
                                    onClick: (): void => {
                                        store.set({ selected: gettingStarted });
                                    },
                                },
                                {
                                    title: tutorials,
                                    itemID: tutorials,
                                    items: [
                                        {
                                            title: forDevelopers,
                                            itemID: forDevelopers,
                                            onClick: (): void => {
                                                store.set({ selected: forDevelopers });
                                            },
                                        },
                                        {
                                            title: forDesigners,
                                            itemID: forDesigners,
                                            items: [
                                                {
                                                    title: componentLibrary,
                                                    itemID: componentLibrary,
                                                    onClick: (): void => {
                                                        store.set({ selected: componentLibrary });
                                                    },
                                                },
                                                {
                                                    title: typographyRules,
                                                    itemID: typographyRules,
                                                    onClick: (): void => {
                                                        store.set({ selected: typographyRules });
                                                    },
                                                },
                                                {
                                                    title: themeRules,
                                                    itemID: themeRules,
                                                    onClick: (): void => {
                                                        store.set({ selected: themeRules });
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: environmentSetup,
                                    itemID: environmentSetup,
                                    onClick: (): void => {
                                        store.set({ selected: environmentSetup });
                                    },
                                },
                            ],
                        },
                        {
                            title: community,
                            itemID: community,
                            icon: useIcon ? <FitnessCenter /> : undefined,
                            onClick: (): void => {
                                store.set({ selected: community });
                            },
                            items: [
                                {
                                    title: license,
                                    itemID: license,
                                    onClick: (): void => {
                                        store.set({ selected: license });
                                    },
                                },
                                {
                                    title: contribute,
                                    itemID: contribute,
                                    items: [
                                        {
                                            title: hallOfFame,
                                            itemID: hallOfFame,
                                            onClick: (): void => {
                                                store.set({ selected: hallOfFame });
                                            },
                                        },
                                        {
                                            title: contributingGuide,
                                            itemID: contributingGuide,
                                            onClick: (): void => {
                                                store.set({ selected: contributingGuide });
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            title: accessibility,
                            itemID: accessibility,
                            icon: useIcon ? <Accessibility /> : undefined,
                            onClick: (): void => {
                                store.set({ selected: accessibility });
                            },
                        },
                        {
                            title: notifications,
                            itemID: notifications,
                            icon: useIcon ? <NotificationsActive /> : undefined,
                            onClick: (): void => {
                                store.set({ selected: notifications });
                            },
                        },
                    ]}
                />
                <div style={{ flex: '1 1 0px' }} />
            </DrawerBody>
        );

        return padDrawer(
            <State store={store}>
                {(state): JSX.Element[] => [
                    <Drawer open={open} key={'drawer'}>
                        <DrawerHeader title={'Power Xpert Blue'} icon={<MenuIcon />} />
                        {drawerItemList(state)}
                    </Drawer>,
                ]}
            </State>
        );
    }
);
