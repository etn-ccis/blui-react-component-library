import React from 'react';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerBodyProps,
    DrawerFooter,
    DrawerHeader,
    DrawerHeaderProps,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerProps,
} from '@brightlayer-ui/react-components';
import { componentType, propsType } from '../../../data/DrawerTypes';
import EatonFooterLogoLight from '../../../assets/EatonLogoLight.png';
import Typography from '@mui/material/Typography';

export const DrawerComponentPlayground = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    function iterateComponentProps(props: propsType[]) {
        const componentProps = props?.reduce(
            (acc: any, cur: any) => ({
                ...acc,
                [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
            }),
            {}
        );
        return componentProps;
    }
    function createProps(drawerJson: componentType[], componentName: string) {
        const component = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        })[0];

        return iterateComponentProps(component?.props as propsType[]);
    }

    function createOtherProps(drawerJson: componentType[], componentName: string) {
        const component = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        })[0];
        return iterateComponentProps(component?.otherProps as propsType[]);
    }

    function createNavItemProps(drawerNavItemComponent: any) {
        let navItemProps: any[] = [];
        drawerNavItemComponent.forEach((component1: componentType) => {
            navItemProps.push(iterateComponentProps(component1?.props as propsType[]));
        });
        return navItemProps;
    }

    function createNavGroupProps(drawerJson: componentType[], componentName: string) {
        const component = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        });
        let navGroupProps: any[] = [];
        component.forEach((component1: componentType) => {
            const drawerNavItemComponent = drawerJson.filter(function (obj: componentType) {
                return obj.parentId === component1.id;
            });
            navGroupProps.push(
                iterateComponentProps(component1?.props as propsType[]),
                createNavItemProps(drawerNavItemComponent)
            );
        });
        return navGroupProps;
    }
    const drawerProps: DrawerProps = createProps(drawerJson, 'Drawer');
    const drawerHeaderProps: DrawerHeaderProps = createProps(drawerJson, 'DrawerHeader');
    const drawerBodyProps: DrawerBodyProps = createProps(drawerJson, 'DrawerBody');
    const drawerNavGroupProps = createNavGroupProps(drawerJson, 'DrawerNavGroup');
    const drawerFooterProps = createProps(drawerJson, 'DrawerFooter');
    const drawerOtherFooterProps = createOtherProps(drawerJson, 'DrawerFooter');
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
                    {drawerOtherFooterProps.showFooter && (
                        <DrawerFooter
                            backgroundColor={drawerFooterProps.backgroundColor}
                            hideContentOnCollapse={drawerFooterProps.hideContentOnCollapse}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    padding: 16,
                                }}
                            >
                                <img src={EatonFooterLogoLight} alt="Eaton Logo" height={28} width={'auto'} />
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
            </Box>
        </>
    );
};
