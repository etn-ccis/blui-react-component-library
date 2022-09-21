import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Devices from '@mui/icons-material/Devices';
import Gavel from '@mui/icons-material/Gavel';
import LocationOn from '@mui/icons-material/LocationOn';

export const PreviewComponent = (): JSX.Element => {
    const drawerRailItemJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerRailItemComponent);

    const drawerRailItemProps = createProps(drawerRailItemJson.props as PropsType[]);
    const drawerRailItemSharedProps = createProps(drawerRailItemJson.sharedProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any, groupType?: string): string =>
        hideDefaultPropsFromSnippet(drawerRailItemJson, propName, currentValue, groupType);

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={true} variant={"rail"} activeItem={"${drawerRailItemProps.title}"}>
    <DrawerBody sx={{ flex: "1 1 auto" }} backgroundColor={"transparent"}>
        <DrawerNavGroup>
            <DrawerRailItem
                ${toggleDefaultProp('condensed', drawerRailItemProps.condensed, 'props')}
                ${toggleDefaultProp('disableRailTooltip', drawerRailItemProps.disableRailTooltip, 'props')}
                ${toggleDefaultProp('hidden', drawerRailItemProps.hidden, 'props')}
                icon={${drawerRailItemProps.icon}}
                itemID={"${drawerRailItemProps.title}"}
                statusColor={"${drawerRailItemProps.statusColor}"}
                title={"${drawerRailItemProps.title}"}
                activeItemBackgroundColor={"${drawerRailItemSharedProps.activeItemBackgroundColor}"}
                activeItemFontColor={"${drawerRailItemSharedProps.activeItemFontColor}"}
                activeItemIconColor={"${drawerRailItemSharedProps.activeItemIconColor}"}
                backgroundColor={"${drawerRailItemSharedProps.backgroundColor}"}
                ${toggleDefaultProp('divider', drawerRailItemSharedProps.divider, 'sharedProps')}
                itemFontColor={"${drawerRailItemSharedProps.itemFontColor}"}
                itemIconColor={"${drawerRailItemSharedProps.itemIconColor}"}
                ${toggleDefaultProp('ripple', drawerRailItemSharedProps.ripple, 'sharedProps')}
                onClick={(): void => {
                    // eslint-disable-next-line
                    console.log('clicked');
                }}
            />
            <DrawerRailItem icon={<LocationOn />} itemID={"Locations"} title={"Locations"} />
            <DrawerRailItem icon={<Gavel />} itemID={"Legal"} title={"Legal"} />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={true} variant={'rail'} activeItem={'Title'} noLayout sx={{ minHeight: 'auto' }}>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup>
                            <DrawerRailItem
                                condensed={drawerRailItemProps.condensed}
                                disableRailTooltip={drawerRailItemProps.disableRailTooltip}
                                hidden={drawerRailItemProps.hidden}
                                icon={getIcon(drawerRailItemProps.icon) || <Devices />}
                                itemID={drawerRailItemProps.itemID}
                                statusColor={drawerRailItemProps.statusColor}
                                title={drawerRailItemProps.title}
                                activeItemBackgroundColor={drawerRailItemSharedProps.activeItemBackgroundColor}
                                activeItemFontColor={drawerRailItemSharedProps.activeItemFontColor}
                                activeItemIconColor={drawerRailItemSharedProps.activeItemIconColor}
                                backgroundColor={drawerRailItemSharedProps.backgroundColor}
                                divider={drawerRailItemSharedProps.divider}
                                itemFontColor={drawerRailItemSharedProps.itemFontColor}
                                itemIconColor={drawerRailItemSharedProps.itemIconColor}
                                ripple={drawerRailItemSharedProps.ripple}
                                onClick={(): void => {
                                    // eslint-disable-next-line
                                    console.log('clicked');
                                }}
                            />
                            <DrawerRailItem icon={<LocationOn />} itemID={'Locations'} title={'Locations'} />
                            <DrawerRailItem icon={<Gavel />} itemID={'Legal'} title={'Legal'} />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
