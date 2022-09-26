import React from 'react';
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
import LooksOne from '@mui/icons-material/LooksOne';
import LooksTwo from '@mui/icons-material/LooksTwo';
import Menu from '@mui/icons-material/Menu';

export const PreviewComponent = (): JSX.Element => {
    const drawerNavGroupJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerNavGroupComponent);

    const drawerNavGroupProps = createProps(drawerNavGroupJson.props as PropsType[]);
    const drawerNavGroupSharedProps = createProps(drawerNavGroupJson.sharedProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(drawerNavGroupJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={true}>
    <DrawerHeader 
        icon={<Menu />}
        title={'Header Title'}
    />

    <DrawerBody>
        <DrawerNavGroup
            title={"${drawerNavGroupProps.title}"}
            titleColor={"${drawerNavGroupProps.titleColor}"}
            ${toggleDefaultProp('titleDivider', drawerNavGroupProps.titleDivider)}
        >
            <DrawerNavItem
                icon={<LooksOne />}
                itemID={'Nav Item 1'}
                title={'Nav Item 1'}
            />
            <DrawerNavItem
                icon={<LooksTwo />}
                itemID={'Nav Item 2'}
                title={'Nav Item 2'}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={true} activeItem={'Nav Item 1'} noLayout sx={{ minHeight: 'auto' }}>
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
                            <DrawerNavItem icon={<LooksOne />} itemID={'Nav Item 1'} title={'Nav Item 1'} />
                            <DrawerNavItem icon={<LooksTwo />} itemID={'Nav Item 2'} title={'Nav Item 2'} />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
