import React from 'react';
// import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components/core/Drawer';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';

const DrawerContainerStyles = {
    height: '100%',
    display: 'flex',
    minHeight: '100%',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
};

export const DrawerComponent = (): JSX.Element => {
    const drawerJson = useAppSelector(
        (state: RootState) => state.drawerComponentData.drawerComponent[0]
    );

    console.log('drawerJson', drawerJson)
    // function passProps(listItemTagJson: { children: any[] }) {
    //     const a = listItemTagJson.children.reduce(
    //         (acc: any, cur: any) => ({ ...acc, [cur.fieldName]: cur.inputText }),
    //         {}
    //     );
    //     return a;
    // }

    // function renderListItemTag(listItemTagJson: { children: any[] }) {
    //     return React.createElement(ListItemTag, passProps(listItemTagJson));
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={DrawerContainerStyles}>Ekta</Box>
        </div>
    );
};
