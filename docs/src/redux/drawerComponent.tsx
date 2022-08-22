import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypes from '../componentDocs/Drawer/data/DrawerTypes';
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
        updateDrawerHeaderProps: (state, action: PayloadAction<PropsType[]>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'DrawerHeader');
            newArray[drawerIndex].props = action.payload;
            state.drawerComponent = newArray;
        },
        updateDrawerBodyProps: (state, action: PayloadAction<PropsType[]>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'DrawerBody');
            newArray[drawerIndex].props = action.payload;
            state.drawerComponent = newArray;
        },
        updateDrawerNavGroupProps: (state, action: PayloadAction<any>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.id === action.payload.id);
            newArray[drawerIndex].props = action.payload['props'];
            state.drawerComponent = newArray;
        },
        updateDrawerNavItemProps: (state, action: PayloadAction<any>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.id === action.payload.id);
            newArray[drawerIndex].props = action.payload['props'];
            state.drawerComponent = newArray;
        },
        updateDrawerFooterProps: (state, action: PayloadAction<PropsType[]>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'DrawerFooter');
            newArray[drawerIndex].props = action.payload;
            state.drawerComponent = newArray;
        },
        updateDrawerOtherProps: (state, action: PayloadAction<PropsType[]>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'DrawerFooter');
            newArray[drawerIndex].otherProps = action.payload;
            state.drawerComponent = newArray;
        },
    },
});

export const {
    updateDrawerProps,
    updateDrawerHeaderProps,
    updateDrawerBodyProps,
    updateDrawerNavGroupProps,
    updateDrawerNavItemProps,
    updateDrawerFooterProps,
    updateDrawerOtherProps,
} = drawerSlice.actions;

export default drawerSlice.reducer;
