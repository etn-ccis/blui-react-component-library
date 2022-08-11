import React from 'react';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerBodyProps,
    DrawerHeader,
    DrawerHeaderProps,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerProps,
} from '@brightlayer-ui/react-components';
import { componentType } from '../../../data/DrawerTypes';

export const DrawerComponentPlayground = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    function createProps(drawerJson: componentType[], componentName: string) {
        const component = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        })[0];
        const componentProps = component?.props?.reduce(
            (acc: any, cur: any) => ({
                ...acc,
                [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
            }),
            {}
        );
        return componentProps;
    }

    function createNavItemProps(drawerNavItemComponent: any) {
        let navItemProps: any[] = [];
        drawerNavItemComponent.map((component1: componentType) => {
            navItemProps.push(
                component1?.props?.reduce(
                    (acc: any, cur: any) => ({
                        ...acc,
                        [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
                    }),
                    {}
                )
            );
        });
        return navItemProps;
    }

    function createNavGroupProps(drawerJson: componentType[], componentName: string) {
        const component = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        });
        let navGroupProps: any[] = [];
        component.map((component1: componentType) => {
            const drawerNavItemComponent = drawerJson.filter(function (obj: componentType) {
                return obj.parentId === component1.id;
            });
            navGroupProps.push(
                component1?.props?.reduce(
                    (acc: any, cur: any) => ({
                        ...acc,
                        [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
                    }),
                    {}
                ),
                createNavItemProps(drawerNavItemComponent)
            );
        });
        return navGroupProps;
    }
    const drawerProps: DrawerProps = createProps(drawerJson, 'Drawer');
    const drawerHeaderProps: DrawerHeaderProps = createProps(drawerJson, 'DrawerHeader');
    const drawerBodyProps: DrawerBodyProps = createProps(drawerJson, 'DrawerBody');
    const drawerNavGroupProps = createNavGroupProps(drawerJson, 'DrawerNavGroup');
    return (
        <>
            <Box style={{ width: '300px' }}>
                <Drawer open={drawerProps.open} noLayout={drawerProps.noLayout} variant={drawerProps.variant}>
                    <DrawerHeader
                        title={drawerHeaderProps.title}
                        backgroundColor={drawerHeaderProps.backgroundColor}
                        divider={drawerHeaderProps.divider}
                    ></DrawerHeader>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={drawerBodyProps.backgroundColor}>
                        {drawerNavGroupProps.map((navGroup: any, index: number) => (
                            <DrawerNavGroup
                                key={index}
                                hidePadding={navGroup.hidePadding}
                                titleColor={navGroup.titleColor}
                                titleDivider={navGroup.titleDivider}
                                title={navGroup.title}
                            >
                                {navGroup.length > 0
                                    ? navGroup.map((item: any, index: number) => (
                                          <DrawerNavItem
                                              key={index}
                                              itemID={item.itemId}
                                              title={item.title}
                                          ></DrawerNavItem>
                                      ))
                                    : undefined}
                            </DrawerNavGroup>
                        ))}
                    </DrawerBody>
                </Drawer>
            </Box>
        </>
    );
};