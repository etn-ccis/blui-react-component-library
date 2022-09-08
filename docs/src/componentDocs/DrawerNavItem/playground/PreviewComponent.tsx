import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components/core/Drawer';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const drawerNavItemJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerNavItemComponent);

    const drawerNavItemProps = createProps(drawerNavItemJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(drawerNavItemJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={true} activeItem={"${drawerNavItemProps.itemID}"}>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem 
                hidden={${drawerNavItemProps.hidden}}
                ${toggleDefaultProp('hidePadding', drawerNavItemProps.hidePadding)}
                ${toggleDefaultProp('icon', drawerNavItemProps.icon)}
                itemID={"${drawerNavItemProps.itemID}"}
                statusColor={"${drawerNavItemProps.statusColor}"}
                subtitle={"${drawerNavItemProps.subtitle}"}
                title={"${drawerNavItemProps.title}"}
            />
            <DrawerNavItem itemID={'Item 2'} title={'Item 2'} />
            <DrawerNavItem itemID={'Item 3'} title={'Item 3'} />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={true} noLayout sx={{ minHeight: 'auto' }} activeItem={drawerNavItemProps.itemID}>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup>
                            <DrawerNavItem
                                hidden={drawerNavItemProps.hidden}
                                hidePadding={drawerNavItemProps.hidePadding}
                                icon={getIcon(drawerNavItemProps.icon)}
                                itemID={drawerNavItemProps.itemID}
                                statusColor={drawerNavItemProps.statusColor}
                                subtitle={drawerNavItemProps.subtitle}
                                title={drawerNavItemProps.title}
                            />
                            <DrawerNavItem itemID={'Item 2'} title={'Item 2'} />
                            <DrawerNavItem itemID={'Item 3'} title={'Item 3'} />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
