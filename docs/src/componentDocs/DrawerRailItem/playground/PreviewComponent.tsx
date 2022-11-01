import React, { useState } from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Gavel from '@mui/icons-material/Gavel';
import LocationOn from '@mui/icons-material/LocationOn';

export const PreviewComponent = (): JSX.Element => {
    const drawerRailItemJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerRailItemComponent);
    const drawerRailItemProps = createProps(drawerRailItemJson.props as PropsType[]);
    const drawerRailItemSharedProps = createProps(drawerRailItemJson.sharedProps as PropsType[]);
    const drawerProps = createProps(drawerRailItemJson.otherComponentProps?.childComponentProps as PropsType[]);
    const [activeItem, setActiveItem] = useState(drawerRailItemProps.title as string);

    const toggleDefaultProp = (propName: string, currentValue: any, groupType?: string): string =>
        hideDefaultPropsFromSnippet(drawerRailItemJson, propName, currentValue, groupType);

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer 
    open={true} 
    variant={"rail"} 
    activeItem={"${activeItem}"} 
    ${toggleDefaultProp('condensed', drawerProps.condensed, 'props')}
>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerRailItem
                ${toggleDefaultProp('disableRailTooltip', drawerRailItemProps.disableRailTooltip, 'props')}
                ${toggleDefaultProp('hidden', drawerRailItemProps.hidden, 'props')}
                icon={${drawerRailItemProps.icon}}
                itemID={"${drawerRailItemProps.title}"}
                ${toggleDefaultProp('statusColor', drawerRailItemProps.statusColor)}
                ${toggleDefaultProp('title', drawerRailItemProps.title)}
                ${toggleDefaultProp(
                    'activeItemBackgroundColor',
                    drawerRailItemSharedProps.activeItemBackgroundColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp(
                    'activeItemFontColor',
                    drawerRailItemSharedProps.activeItemFontColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp(
                    'activeItemIconColor',
                    drawerRailItemSharedProps.activeItemIconColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp('backgroundColor', drawerRailItemSharedProps.backgroundColor, 'sharedProps')}
                ${toggleDefaultProp('divider', drawerRailItemSharedProps.divider, 'sharedProps')}
                ${toggleDefaultProp('itemFontColor', drawerRailItemSharedProps.itemFontColor, 'sharedProps')}
                ${toggleDefaultProp('itemIconColor', drawerRailItemSharedProps.itemIconColor, 'sharedProps')}
                ${toggleDefaultProp('ripple', drawerRailItemSharedProps.ripple, 'sharedProps')}
                onClick={(): void => {
                    setActiveItem("${drawerRailItemProps.title}");
                }}
            />
            <DrawerRailItem
                icon={<LocationOn />}
                itemID={'Locations'}
                title={'Locations'}
                ${toggleDefaultProp('disableRailTooltip', drawerRailItemProps.disableRailTooltip, 'props')}
                ${toggleDefaultProp(
                    'activeItemBackgroundColor',
                    drawerRailItemSharedProps.activeItemBackgroundColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp(
                    'activeItemFontColor',
                    drawerRailItemSharedProps.activeItemFontColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp(
                    'activeItemIconColor',
                    drawerRailItemSharedProps.activeItemIconColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp('backgroundColor', drawerRailItemSharedProps.backgroundColor, 'sharedProps')}
                ${toggleDefaultProp('divider', drawerRailItemSharedProps.divider, 'sharedProps')}
                ${toggleDefaultProp('itemFontColor', drawerRailItemSharedProps.itemFontColor, 'sharedProps')}
                ${toggleDefaultProp('itemIconColor', drawerRailItemSharedProps.itemIconColor, 'sharedProps')}
                ${toggleDefaultProp('ripple', drawerRailItemSharedProps.ripple, 'sharedProps')}
                onClick={(): void => {
                    setActiveItem("Locations");
                }}
            />
            <DrawerRailItem
                icon={<Gavel />}
                itemID={"Legal"}
                title={"Legal"}
                ${toggleDefaultProp('disableRailTooltip', drawerRailItemProps.disableRailTooltip, 'props')}
                ${toggleDefaultProp(
                    'activeItemBackgroundColor',
                    drawerRailItemSharedProps.activeItemBackgroundColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp(
                    'activeItemFontColor',
                    drawerRailItemSharedProps.activeItemFontColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp(
                    'activeItemIconColor',
                    drawerRailItemSharedProps.activeItemIconColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp('backgroundColor', drawerRailItemSharedProps.backgroundColor, 'sharedProps')}
                ${toggleDefaultProp('divider', drawerRailItemSharedProps.divider, 'sharedProps')}
                ${toggleDefaultProp('itemFontColor', drawerRailItemSharedProps.itemFontColor, 'sharedProps')}
                ${toggleDefaultProp('itemIconColor', drawerRailItemSharedProps.itemIconColor, 'sharedProps')}
                ${toggleDefaultProp('ripple', drawerRailItemSharedProps.ripple, 'sharedProps')}
                onClick={(): void => {
                    setActiveItem("Legal");
                }}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer
                    open={true}
                    variant={'rail'}
                    activeItem={activeItem}
                    noLayout
                    sx={{ minHeight: 'auto' }}
                    condensed={drawerProps.condensed}
                >
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup>
                            <DrawerRailItem
                                disableRailTooltip={drawerRailItemProps.disableRailTooltip}
                                hidden={drawerRailItemProps.hidden}
                                icon={getIcon(drawerRailItemProps.icon) as JSX.Element}
                                itemID={drawerRailItemProps.title}
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
                                    setActiveItem(drawerRailItemProps.title);
                                }}
                            />
                            <DrawerRailItem
                                icon={<LocationOn />}
                                itemID={'Locations'}
                                title={'Locations'}
                                onClick={(): void => {
                                    setActiveItem('Locations');
                                }}
                                disableRailTooltip={drawerRailItemProps.disableRailTooltip}
                                activeItemBackgroundColor={drawerRailItemSharedProps.activeItemBackgroundColor}
                                activeItemFontColor={drawerRailItemSharedProps.activeItemFontColor}
                                activeItemIconColor={drawerRailItemSharedProps.activeItemIconColor}
                                backgroundColor={drawerRailItemSharedProps.backgroundColor}
                                divider={drawerRailItemSharedProps.divider}
                                itemFontColor={drawerRailItemSharedProps.itemFontColor}
                                itemIconColor={drawerRailItemSharedProps.itemIconColor}
                                ripple={drawerRailItemSharedProps.ripple}
                            />
                            <DrawerRailItem
                                icon={<Gavel />}
                                itemID={'Legal'}
                                title={'Legal'}
                                onClick={(): void => {
                                    setActiveItem('Legal');
                                }}
                                disableRailTooltip={drawerRailItemProps.disableRailTooltip}
                                activeItemBackgroundColor={drawerRailItemSharedProps.activeItemBackgroundColor}
                                activeItemFontColor={drawerRailItemSharedProps.activeItemFontColor}
                                activeItemIconColor={drawerRailItemSharedProps.activeItemIconColor}
                                backgroundColor={drawerRailItemSharedProps.backgroundColor}
                                divider={drawerRailItemSharedProps.divider}
                                itemFontColor={drawerRailItemSharedProps.itemFontColor}
                                itemIconColor={drawerRailItemSharedProps.itemIconColor}
                                ripple={drawerRailItemSharedProps.ripple}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
