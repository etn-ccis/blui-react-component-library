import React, { useState } from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
} from '@brightlayer-ui/react-components/core/Drawer';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { Devices, AirportShuttle, Menu, Dashboard, Toc } from '@mui/icons-material';

import * as Colors from '@brightlayer-ui/colors';

export const PreviewComponent = (): JSX.Element => {
    const drawerNavGroupJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerNavGroupComponent);
    const [drawerActiveItem, setDrawerActiveItem] = useState('Overview');

    const drawerNavGroupProps = createProps(drawerNavGroupJson.props as PropsType[]);
    const drawerNavGroupSharedProps = createProps(drawerNavGroupJson.sharedProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any, groupType?: string): string =>
        hideDefaultPropsFromSnippet(drawerNavGroupJson, propName, currentValue, groupType);

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={true} activeItem={"${drawerActiveItem}"}>
    <DrawerHeader 
        icon={<Menu />}
        title={'Header Title'}
    />

    <DrawerBody>
        <DrawerNavGroup
            ${toggleDefaultProp('title', drawerNavGroupProps.title)}
            titleColor={"${drawerNavGroupProps.titleColor}"}
            ${toggleDefaultProp('titleDivider', drawerNavGroupProps.titleDivider)}
            activeItemBackgroundColor={"${drawerNavGroupSharedProps.activeItemBackgroundColor}"}
            activeItemFontColor={"${drawerNavGroupSharedProps.activeItemFontColor}"}
            activeItemIconColor={"${drawerNavGroupSharedProps.activeItemIconColor}"}
            chevron={${drawerNavGroupSharedProps.chevron}}
            chevronColor={"${drawerNavGroupSharedProps.chevronColor}"}
            ${toggleDefaultProp('collapseIcon', drawerNavGroupSharedProps.collapseIcon, 'sharedProps')}
            ${toggleDefaultProp(
                'disableActiveItemParentStyles',
                drawerNavGroupSharedProps.disableActiveItemParentStyles,
                'sharedProps'
            )}
            ${toggleDefaultProp('divider', drawerNavGroupSharedProps.divider, 'sharedProps')}
            ${toggleDefaultProp('expandIcon', drawerNavGroupSharedProps.expandIcon, 'sharedProps')}
            hidePadding={${drawerNavGroupSharedProps.hidePadding}}
            itemFontColor={"${drawerNavGroupSharedProps.itemFontColor}"}
            itemIconColor={"${drawerNavGroupSharedProps.itemIconColor}"}
            nestedBackgroundColor={"${drawerNavGroupSharedProps.nestedBackgroundColor}"}
            ${toggleDefaultProp('nestedDivider', drawerNavGroupSharedProps.nestedDivider, 'sharedProps')}
            ${toggleDefaultProp('ripple', drawerNavGroupSharedProps.ripple, 'sharedProps')}
        >
        <DrawerNavItem
            icon={<Dashboard />}
            itemID={'Overview'}
            title={'Overview'}
            onClick={(): void => setDrawerActiveItem('Overview')}
        >
            <DrawerNavItem
                itemID={'Monthly Report'}
                title={'Monthly Report'}
                onClick={(): void => setDrawerActiveItem('Monthly Report')}
            />
            <DrawerNavItem
                itemID={'Annual Report'}
                title={'Annual Report'}
                onClick={(): void => setDrawerActiveItem('Annual Report')}
            />
        </DrawerNavItem>
        <DrawerNavItem
            icon={<Toc />}
            itemID={'Timeline'}
            title={'Timeline'}
            onClick={(): void => setDrawerActiveItem('Timeline')}
        />
        <DrawerNavItem
            icon={<Devices />}
            title={'Devices'}
            itemID={'Devices'}
            subtitle={'5 new warnings'}
            statusColor={Colors.yellow[500]}
            onClick={(): void => setDrawerActiveItem('Devices')}
        />
        <DrawerNavItem
            icon={<AirportShuttle />}
            itemID={'Schedule'}
            title={'Schedule'}
            onClick={(): void => setDrawerActiveItem('Schedule')}
        />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={true} activeItem={drawerActiveItem} noLayout sx={{ minHeight: 'auto' }}>
                    <DrawerHeader icon={<Menu />} title={'Header Title'} />

                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup
                            title={drawerNavGroupProps.title}
                            titleColor={drawerNavGroupProps.titleColor}
                            titleDivider={drawerNavGroupProps.titleDivider}
                            activeItemBackgroundColor={drawerNavGroupSharedProps.activeItemBackgroundColor}
                            activeItemBackgroundShape={drawerNavGroupSharedProps.activeItemBackgroundShape}
                            activeItemFontColor={drawerNavGroupSharedProps.activeItemFontColor}
                            activeItemIconColor={drawerNavGroupSharedProps.activeItemIconColor}
                            chevron={drawerNavGroupSharedProps.chevron}
                            chevronColor={drawerNavGroupSharedProps.chevronColor}
                            collapseIcon={getIcon(drawerNavGroupSharedProps.collapseIcon)}
                            disableActiveItemParentStyles={drawerNavGroupSharedProps.disableActiveItemParentStyles}
                            divider={drawerNavGroupSharedProps.divider}
                            expandIcon={getIcon(drawerNavGroupSharedProps.expandIcon)}
                            hidePadding={drawerNavGroupSharedProps.hidePadding}
                            itemFontColor={drawerNavGroupSharedProps.itemFontColor}
                            itemIconColor={drawerNavGroupSharedProps.itemIconColor}
                            nestedBackgroundColor={drawerNavGroupSharedProps.nestedBackgroundColor}
                            nestedDivider={drawerNavGroupSharedProps.nestedDivider}
                            ripple={drawerNavGroupSharedProps.ripple}
                        >
                            <DrawerNavItem
                                icon={<Dashboard />}
                                itemID={'Overview'}
                                title={'Overview'}
                                onClick={(): void => setDrawerActiveItem('Overview')}
                            >
                                <DrawerNavItem
                                    itemID={'Monthly Report'}
                                    title={'Monthly Report'}
                                    onClick={(): void => setDrawerActiveItem('Monthly Report')}
                                />
                                <DrawerNavItem
                                    itemID={'Annual Report'}
                                    title={'Annual Report'}
                                    onClick={(): void => setDrawerActiveItem('Annual Report')}
                                />
                            </DrawerNavItem>
                            <DrawerNavItem
                                icon={<Toc />}
                                itemID={'Timeline'}
                                title={'Timeline'}
                                onClick={(): void => setDrawerActiveItem('Timeline')}
                            />
                            <DrawerNavItem
                                icon={<Devices />}
                                title={'Devices'}
                                itemID={'Devices'}
                                subtitle={'5 new warnings'}
                                statusColor={Colors.yellow[500]}
                                onClick={(): void => setDrawerActiveItem('Devices')}
                            />
                            <DrawerNavItem
                                icon={<AirportShuttle />}
                                itemID={'Schedule'}
                                title={'Schedule'}
                                onClick={(): void => setDrawerActiveItem('Schedule')}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
