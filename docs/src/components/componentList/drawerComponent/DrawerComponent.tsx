import React from 'react';
// import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components/core/Drawer';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    DrawerLayout,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
} from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import { NavigationDrawer } from '../../../router/drawer';
import { propsType, componentType } from '../../../data/DrawerTypes';

// export type propsType = {
//     propName: string;
//     inputType: string;
//     inputValue: boolean | string | string[];
//     propType: string;
//     helperText: string;
//     required: boolean;
// };

// export type componentType = {
//     componentName: string;
//     props: propsType[];
//     subComponentsList?: componentType[];
// };

// import DrawerCOMP from "@brightlayer-ui/react-components/core/Drawer";

// export const Components = {
//   Drawer: Drawer,
// };

const Components: { [key: string]: any } = {
    Drawer: Drawer,
};

// const DrawerContainerStyles = {
//     height: '100%',
//     display: 'flex',
//     minHeight: '100%',
//     textAlign: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     justifyContent: 'center',
// };

export const DrawerComponent = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent[0]);

    console.log('drawerJson', drawerJson);
    function passProps(drawerJson: componentType) {
        const a = drawerJson.props.reduce((acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }), {});
        return a;
    }

    function renderDrawer(drawerJson: componentType) {
        return React.createElement(Components[drawerJson.componentName], passProps(drawerJson));
    }

    return (
        <Box style={{ width: '300px' }}>
            <>
                {/* {renderDrawer(drawerJson)} */}
                <Drawer open={true} noLayout sx={{ height: '400px' }} width={'300'}>
                    <DrawerHeader title={'Simple Drawer'} icon={<Menu />} />
                    <DrawerBody>
                        <DrawerNavGroup hidePadding>
                            <DrawerNavItem title="Dashboard" itemID="1" />
                            <DrawerNavItem title="Locations" itemID="2" />
                            <DrawerNavItem title="Legal" itemID="3" />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            </>
        </Box>
    );
};
