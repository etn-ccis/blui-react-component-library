import React, { useState } from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components/core/Drawer';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const drawerNavItemJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerNavItemComponent);
    const [activeItem, setActiveItem] = useState<string>('Title');

    const drawerNavItemProps = createProps(drawerNavItemJson.props as PropsType[]);
    const drawerNavItemSharedProps = createProps(drawerNavItemJson.sharedProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any, groupType?: string): string =>
        hideDefaultPropsFromSnippet(drawerNavItemJson, propName, currentValue, groupType);

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={true} activeItem={"${activeItem}"}>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem
                ${toggleDefaultProp('hidden', drawerNavItemProps.hidden)}
                ${toggleDefaultProp('hidePadding', drawerNavItemSharedProps.hidePadding)}
                ${toggleDefaultProp('icon', drawerNavItemProps.icon)}
                itemID={"Title"}
                ${toggleDefaultProp('statusColor', drawerNavItemProps.statusColor, 'props')}
                ${toggleDefaultProp('subtitle', drawerNavItemProps.subtitle, 'props')}
                title={"${drawerNavItemProps.title}"}
                ${toggleDefaultProp(
                    'activeItemBackgroundColor',
                    drawerNavItemSharedProps.activeItemBackgroundColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp(
                    'activeItemBackgroundShape',
                    drawerNavItemSharedProps.activeItemBackgroundShape,
                    'sharedProps'
                )}
                ${toggleDefaultProp('activeItemFontColor', drawerNavItemSharedProps.activeItemFontColor, 'sharedProps')}
                ${toggleDefaultProp('activeItemIconColor', drawerNavItemSharedProps.activeItemIconColor, 'sharedProps')}
                ${toggleDefaultProp('chevron', drawerNavItemSharedProps.chevron, 'sharedProps')}
                ${toggleDefaultProp('chevronColor', drawerNavItemSharedProps.chevronColor, 'sharedProps')}
                ${toggleDefaultProp('collapseIcon', drawerNavItemSharedProps.collapseIcon, 'sharedProps')}
                ${toggleDefaultProp(
                    'disableActiveItemParentStyles',
                    drawerNavItemSharedProps.disableActiveItemParentStyles,
                    'sharedProps'
                )}
                ${toggleDefaultProp('divider', drawerNavItemSharedProps.divider, 'sharedProps')}
                ${toggleDefaultProp('expandIcon', drawerNavItemSharedProps.expandIcon, 'sharedProps')}
                ${toggleDefaultProp('hidePadding', drawerNavItemSharedProps.hidePadding, 'sharedProps')}
                ${toggleDefaultProp('itemFontColor', drawerNavItemSharedProps.itemFontColor, 'sharedProps')}
                ${toggleDefaultProp('itemIconColor', drawerNavItemSharedProps.itemIconColor, 'sharedProps')}
                ${toggleDefaultProp(
                    'nestedBackgroundColor',
                    drawerNavItemSharedProps.nestedBackgroundColor,
                    'sharedProps'
                )}
                ${toggleDefaultProp('nestedDivider', drawerNavItemSharedProps.nestedDivider, 'sharedProps')}
                ${toggleDefaultProp('ripple', drawerNavItemSharedProps.ripple, 'sharedProps')}
                onClick={(): void => setActiveItem("Title")}
            >
                <DrawerNavItem
                    itemID={"Monthly Report"}
                    title={"Monthly Report"}
                    onClick={(): void => setActiveItem("Monthly Report")}
                />
                <DrawerNavItem
                    itemID={"Annual Report"}
                    title={"Annual Report"}
                    onClick={(): void => setActiveItem("Annual Report")}
                />
            </DrawerNavItem>
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={true} noLayout sx={{ minHeight: 'auto' }} activeItem={activeItem}>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup>
                            <DrawerNavItem
                                hidden={drawerNavItemProps.hidden}
                                hidePadding={
                                    drawerNavItemProps.hidePadding
                                        ? drawerNavItemProps.hidePadding
                                        : drawerNavItemSharedProps.hidePadding
                                }
                                icon={getIcon(drawerNavItemProps.icon)}
                                itemID={'Title'}
                                statusColor={drawerNavItemProps.statusColor}
                                subtitle={drawerNavItemProps.subtitle}
                                title={drawerNavItemProps.title}
                                activeItemBackgroundColor={drawerNavItemSharedProps.activeItemBackgroundColor}
                                activeItemBackgroundShape={drawerNavItemSharedProps.activeItemBackgroundShape}
                                activeItemFontColor={drawerNavItemSharedProps.activeItemFontColor}
                                activeItemIconColor={drawerNavItemSharedProps.activeItemIconColor}
                                chevron={drawerNavItemSharedProps.chevron}
                                chevronColor={drawerNavItemSharedProps.chevronColor}
                                collapseIcon={getIcon(drawerNavItemSharedProps.collapseIcon)}
                                disableActiveItemParentStyles={drawerNavItemSharedProps.disableActiveItemParentStyles}
                                divider={drawerNavItemSharedProps.divider}
                                expandIcon={getIcon(drawerNavItemSharedProps.expandIcon)}
                                itemFontColor={drawerNavItemSharedProps.itemFontColor}
                                itemIconColor={drawerNavItemSharedProps.itemIconColor}
                                nestedBackgroundColor={drawerNavItemSharedProps.nestedBackgroundColor}
                                nestedDivider={drawerNavItemSharedProps.nestedDivider}
                                ripple={drawerNavItemSharedProps.ripple}
                                onClick={(): void => setActiveItem('Title')}
                            >
                                <DrawerNavItem
                                    itemID={'Monthly Report'}
                                    title={'Monthly Report'}
                                    onClick={(): void => setActiveItem('Monthly Report')}
                                />
                                <DrawerNavItem
                                    itemID={'Annual Report'}
                                    title={'Annual Report'}
                                    onClick={(): void => setActiveItem('Annual Report')}
                                />
                            </DrawerNavItem>
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
