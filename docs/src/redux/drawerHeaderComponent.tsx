import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerHeaderTypes from '../componentDocs/DrawerHeader/playground/DrawerHeaderTypes';
import { PropsType, ComponentType } from '../__types__';
type DrawerState = {
    drawerHeaderComponent: ComponentType[];
};
const initialState: DrawerState = {
    drawerHeaderComponent: drawerHeaderTypes,
};
export const drawerHeaderSlice = createSlice({
    name: 'drawerHeaderComponent',
    initialState: initialState,
    reducers: {
        updateDrawerHeaderProps: (state, action: PayloadAction<PropsType[]>) => {
            const newArray = [...state.drawerHeaderComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'DrawerHeader');
            newArray[drawerIndex].props = action.payload;
            state.drawerHeaderComponent = newArray;
        },
    },
});

export const { updateDrawerHeaderProps } = drawerHeaderSlice.actions;

export default drawerHeaderSlice.reducer;
