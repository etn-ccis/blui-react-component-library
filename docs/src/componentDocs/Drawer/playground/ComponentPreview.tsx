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
import { ComponentType, PropsType } from '../../../__types__';
import EatonFooterLogoLight from '../../../assets/EatonLogoLight.png';
import Typography from '@mui/material/Typography';

export const DrawerComponentPreview = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);

    const iterateComponentProps = (props: PropsType[]): any => {
        const componentProps = props?.reduce(
            (acc: any, cur: any) => ({
                ...acc,
                [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
            }),
            {}
        );
        return componentProps;
    };

    const createProps = (drawerProps: ComponentType[], componentName: string): any => {
        const component = drawerProps.filter((obj: ComponentType) => obj.componentName === componentName)[0];
        return iterateComponentProps(component?.props as PropsType[]);
    };

    const createOtherProps = (drawerOtherProps: ComponentType[], componentName: string): any => {
        const component = drawerOtherProps.filter((obj: ComponentType) => obj.componentName === componentName)[0];
        return iterateComponentProps(component?.otherProps as PropsType[]);
    };

    const createNavItemProps = (drawerNavItemComponent: any): any => {
        const navItemProps: any[] = [];
        drawerNavItemComponent.forEach((component1: ComponentType) => {
            navItemProps.push(iterateComponentProps(component1?.props as PropsType[]));
        });
        return navItemProps;
    };

    const createNavGroupProps = (navGroupPropsJson: ComponentType[], componentName: string): any[] => {
        const component = navGroupPropsJson.filter((obj: ComponentType) => obj.componentName === componentName);
        const navGroupProps: any[] = [];
        component.forEach((navItem: ComponentType) => {
            const drawerNavItemComponent = navGroupPropsJson.filter(
                (obj: ComponentType) => obj.parentId === navItem.id
            );
            navGroupProps.push(
                iterateComponentProps(navItem?.props as PropsType[]),
                createNavItemProps(drawerNavItemComponent)
            );
        });
        return navGroupProps;
    };
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
                                    ? navGroup.map((item: any, id: number) => (
                                          <DrawerNavItem
                                              key={id}
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
