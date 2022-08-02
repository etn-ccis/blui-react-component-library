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
import { componentType } from '../../../data/DrawerTypesNew';

export const DrawerComponentPlayground = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    function createProps(drawerJson: componentType[], componentName: string) {
        const compo = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        })[0];
        const a = compo.props.reduce((acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }), {});
        return a;
    }
    const drawerProps: DrawerProps = createProps(drawerJson, 'Drawer');
    const drawerHeaderProps: DrawerHeaderProps = createProps(drawerJson, 'DrawerHeader');
    const drawerBodyProps: DrawerBodyProps = createProps(drawerJson, 'DrawerBody');
    const drawerNavGroupProps: DrawerNavGroupProps = createProps(drawerJson, 'DrawerNavGroup');
    const drawerNavItemProps: DrawerNavItemProps = createProps(drawerJson, 'DrawerNavItem');
    return (
        <Box style={{ width: '300px' }}>
            <Drawer open={drawerProps.open} noLayout={drawerProps.noLayout} variant={drawerProps.variant}>
                <DrawerHeader
                    title={drawerHeaderProps.title}
                    backgroundColor={drawerHeaderProps.backgroundColor}
                ></DrawerHeader>
                <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={drawerBodyProps.backgroundColor}>
                    <DrawerNavGroup
                        titleColor={drawerNavGroupProps.titleColor}
                        titleDivider={drawerNavGroupProps.titleDivider}
                        hidePadding={drawerNavGroupProps.hidePadding}
                    >
                        <DrawerNavItem
                            itemID={drawerNavItemProps.itemID}
                            title={drawerNavItemProps.title}
                        ></DrawerNavItem>
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
    );
};
