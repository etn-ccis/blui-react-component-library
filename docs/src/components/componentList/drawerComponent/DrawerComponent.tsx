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
    DrawerHeader: DrawerHeader,
    DrawerBody: DrawerBody,
    DrawerNavGroup: DrawerNavGroup,
    DrawerNavItem: DrawerNavItem,
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
    // const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent[0]);
    const drawerJson1 = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);

    // console.log('drawerJson', drawerJson);
    function passProps(drawerJson: componentType, index: number) {
        const a = drawerJson.props.reduce((acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }), {'key': index});
        return a;
    }

    function renderDrawer(drawerJson: componentType, index: number): any{
        console.log('drawerJson', drawerJson);

        if (typeof Components[drawerJson.componentName] !== "undefined") {
            return React.createElement(
              Components[drawerJson.componentName],
              passProps(drawerJson, index),
              drawerJson.subComponentsList &&
                (typeof drawerJson.subComponentsList === "string"
                  ? drawerJson.subComponentsList
                  : drawerJson.subComponentsList.map(c => renderDrawer(c, index+1)))
            );
          }

        // return React.createElement(Components[drawerJson.componentName], passProps(drawerJson));
    }

    return (
        <Box style={{ width: '300px' }}>
            <>
            {/* {drawerJson1.map((drawerJson:componentType, index: number) => (
                console.log('inside map drawerjson', drawerJson), */}
                {renderDrawer(drawerJson1[0], 0)}
            {/* ))} */}

            {/* <Drawer open={true} key={'drawer11'} noLayout width={'300'}>
                <DrawerHeader title={'Simple Drawer'} icon={<Menu />} />
                <DrawerNavGroup hidePadding>
                    <DrawerNavItem title="Dashboard" itemID="1" />
                    <DrawerNavItem title="Locations" itemID="2" />
                    <DrawerNavItem title="Legal" itemID="3" />
                </DrawerNavGroup>
            </Drawer> */}
            </>
        </Box>
    );
};
