import React from 'react';
// import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components/core/Drawer';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { componentType } from '../../../data/DrawerTypes';

const Components: { [key: string]: any } = {
    Drawer: Drawer,
    DrawerHeader: DrawerHeader,
    DrawerBody: DrawerBody,
    DrawerNavGroup: DrawerNavGroup,
    DrawerNavItem: DrawerNavItem,
};

export const DrawerComponent = (): JSX.Element => {
    const drawerJson1 = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    function passProps(drawerJson: componentType, index: number) {
        const a = drawerJson.props.reduce(
            (acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue, key: `${cur.key}-${index}` }),
            {}
        );
        return a;
    }

    function renderDrawer(drawerJson: componentType, index: number): any {
        if (typeof Components[drawerJson.componentName] !== 'undefined') {
            return React.createElement(
                Components[drawerJson.componentName],
                passProps(drawerJson, index),
                drawerJson.subComponentsList &&
                    (typeof drawerJson.subComponentsList === 'string'
                        ? drawerJson.subComponentsList
                        : drawerJson.subComponentsList.map((c) => renderDrawer(c, index + 1)))
            );
        }
    }

    return <Box style={{ width: '300px' }}>{renderDrawer(drawerJson1[0], 0)}</Box>;
};
