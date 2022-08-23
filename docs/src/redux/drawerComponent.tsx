import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypes from '../componentDocs/Drawer/playground/DrawerTypes';
import { PropsType, ComponentType } from '../__types__';
type DrawerState = {
    drawerComponent: ComponentType[];
};
const initialState: DrawerState = {
    drawerComponent: drawerTypes,
};
export const drawerSlice = createSlice({
    name: 'drawerComponent',
    initialState: initialState,
    reducers: {
        updateDrawerProps: (state, action: PayloadAction<PropsType[]>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'Drawer');
            newArray[drawerIndex].props = action.payload;
            state.drawerComponent = newArray;
        },
        updateDrawerOtherProps: (state, action: PayloadAction<PropsType[]>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'Drawer');
            newArray[drawerIndex].otherProps = action.payload;
            state.drawerComponent = newArray;
        },
    },
});

export const { updateDrawerProps, updateDrawerOtherProps } = drawerSlice.actions;

export default drawerSlice.reducer;
