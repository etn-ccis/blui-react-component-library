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
    DrawerNavGroupProps,
    DrawerNavItem,
    DrawerNavItemProps,
    DrawerProps,
} from '@brightlayer-ui/react-components';
import { componentType, nestedChildrenType, propsType } from '../../../data/DrawerTypesNew';

export const DrawerComponentPlayground = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    console.log('drawerjson', drawerJson);
    function createProps(drawerJson: componentType[], componentName: string) {
        const compo = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        })[0];
        if (compo.props) {
            const a = compo.props.reduce((acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }), {});
            return a;
        } else if (compo.nestedChildren) {
            let nestedArray: any[] = [];
            compo.nestedChildren.map((child: nestedChildrenType, index: number) => {
                const b = nestedArray.push(
                    child.nestedChildrenProps.reduce(
                        (acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }),
                        {}
                    )
                );
                return b;
            });
            return nestedArray;
        }
    }
    const drawerProps: DrawerProps = createProps(drawerJson, 'Drawer');
    const drawerHeaderProps: DrawerHeaderProps = createProps(drawerJson, 'DrawerHeader');
    const drawerBodyProps: DrawerBodyProps = createProps(drawerJson, 'DrawerBody');
    const drawerNavGroupProps = createProps(drawerJson, 'DrawerNavGroup');
    console.log(drawerNavGroupProps, 'drawerNavGroupProps');
    // const drawerNavItemProps: DrawerNavItemProps = createProps(drawerJson, 'DrawerNavItem');
    return (
        <Box style={{ width: '300px' }}>
            <Drawer open={drawerProps.open} noLayout={drawerProps.noLayout} variant={drawerProps.variant}>
                <DrawerHeader
                    title={drawerHeaderProps.title}
                    backgroundColor={drawerHeaderProps.backgroundColor}
                ></DrawerHeader>
                <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={drawerBodyProps.backgroundColor}>
                    {/* <DrawerNavGroup
                        titleColor={drawerNavGroupProps.titleColor}
                        titleDivider={drawerNavGroupProps.titleDivider}
                        hidePadding={drawerNavGroupProps.hidePadding}
                    >
                        <DrawerNavItem
                            itemID={drawerNavItemProps.itemID}
                            title={drawerNavItemProps.title}
                        ></DrawerNavItem>
                    </DrawerNavGroup> */}
                    {drawerNavGroupProps.map((navGroup: DrawerNavGroupProps, index: number) => (
                        <DrawerNavGroup
                            key={index}
                            hidePadding={navGroup.hidePadding}
                            titleColor={navGroup.titleColor}
                            titleDivider={navGroup.titleDivider}
                        >
                            <DrawerNavItem itemID="dd" title="ss"></DrawerNavItem>
                        </DrawerNavGroup>
                    ))}
                </DrawerBody>
            </Drawer>
        </Box>
    );
};
