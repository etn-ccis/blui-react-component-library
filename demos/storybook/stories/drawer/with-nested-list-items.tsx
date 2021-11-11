import {
    Accessibility,
    Add,
    AddAPhoto,
    NotificationsActive,
    Group,
    MenuBook,
    PinDrop,
    Remove,
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import * as Colors from '@brightlayer-ui/colors';
import { ChannelValue, DrawerBody, DrawerNavGroup, ListItemTag } from '@brightlayer-ui/react-components';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-components/core/Drawer';
import { boolean, select, color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React, { useState } from 'react';

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
        case 'undefined':
        default:
            return undefined;
    }
};

export const withNestedListItems = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');
    const DrawerNavGroupID = 'DrawerNavGroup';
    const open = boolean('open', true, DrawerNavGroupID);
    const divider = boolean('divider', true, DrawerNavGroupID);
    const nestedDivider = boolean('nestedDivider', false, DrawerNavGroupID);
    const chevron = boolean('chevron', false, DrawerNavGroupID);
    const nestedBackgroundColor = color('nestedBackgroundColor', '', DrawerNavGroupID);
    const groupUseExpandIcon = select(
        'expandIcon',
        ['undefined', '<Add />', '<PinDrop />'],
        'undefined',
        DrawerNavGroupID
    );
    const groupUseCollapseIcon = select(
        'collapseIcon',
        ['undefined', '<Remove />', '<Groups />'],
        'undefined',
        DrawerNavGroupID
    );

    const NavItemID = 'NavItem';
    const showIcon = boolean('Show Top-Level Icons', true, NavItemID);
    const hidePadding = boolean('hidePadding', false, NavItemID);
    const useRightComponent = select(
        'rightComponent',
        ['undefined', '<ListItemTag />', '<ChannelValue />'],
        'undefined',
        NavItemID
    );
    const itemUseExpandIcon = select('expandIcon', ['undefined', '<Add />', '<PinDrop />'], 'undefined', NavItemID);
    const itemUseCollapseIcon = select(
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

    const drawerItemList = (): JSX.Element => (
        <DrawerBody disableActiveItemParentStyles={boolean('disableActiveItemParentStyles', false, DrawerNavGroupID)}>
            <DrawerNavGroup
                divider={divider}
                nestedDivider={nestedDivider}
                hidePadding={hidePadding}
                chevron={chevron}
                nestedBackgroundColor={nestedBackgroundColor}
                expandIcon={getIcon(groupUseExpandIcon)}
                collapseIcon={getIcon(groupUseCollapseIcon)}
                items={[
                    {
                        title: userGuide,
                        icon: showIcon ? <MenuBook /> : undefined,
                        itemID: userGuide,
                        rightComponent: rightComponent,
                        expandIcon: getIcon(itemUseExpandIcon),
                        collapseIcon: getIcon(itemUseCollapseIcon),
                        items: [
                            {
                                title: gettingStarted,
                                itemID: gettingStarted,
                                subtitle: 'Introduction to Eaton',
                                onClick: (): void => {
                                    setSelected(gettingStarted);
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
                                            setSelected(forDevelopers);
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
                                                    setSelected(componentLibrary);
                                                },
                                            },
                                            {
                                                title: typographyRules,
                                                itemID: typographyRules,
                                                onClick: (): void => {
                                                    setSelected(typographyRules);
                                                },
                                            },
                                            {
                                                title: themeRules,
                                                itemID: themeRules,
                                                onClick: (): void => {
                                                    setSelected(themeRules);
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
                                    setSelected(environmentSetup);
                                },
                            },
                        ],
                    },
                    {
                        title: community,
                        itemID: community,
                        icon: showIcon ? <Group /> : undefined,
                        onClick: (): void => {
                            setSelected(community);
                        },
                        items: [
                            {
                                title: license,
                                itemID: license,
                                onClick: (): void => {
                                    setSelected(license);
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
                                            setSelected(hallOfFame);
                                        },
                                    },
                                    {
                                        title: contributingGuide,
                                        itemID: contributingGuide,
                                        onClick: (): void => {
                                            setSelected(contributingGuide);
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: accessibility,
                        itemID: accessibility,
                        icon: showIcon ? <Accessibility /> : undefined,
                        onClick: (): void => {
                            setSelected(accessibility);
                        },
                    },
                    {
                        title: notifications,
                        itemID: notifications,
                        icon: showIcon ? <NotificationsActive /> : undefined,
                        onClick: (): void => {
                            setSelected(notifications);
                        },
                    },
                ]}
            />
        </DrawerBody>
    );

    return (
        <Drawer open={open} key={'drawer'} activeItem={selected}>
            <DrawerHeader title={'Brightlayer UI'} icon={<MenuIcon />} />
            {drawerItemList()}
        </Drawer>
    );
};

withNestedListItems.story = { name: 'with nested list items' };
