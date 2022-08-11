import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypes, { componentType } from '../data/DrawerTypes';
interface DrawerState {
    drawerComponent: componentType[];
}
const initialState: DrawerState = {
    drawerComponent: drawerTypes,
};
export const drawerSlice = createSlice({
    name: 'drawerComponent',
    initialState: initialState,
    reducers: {
        // updateDrawerComponent: (state, action: PayloadAction<Array<componentType>>) => {
        //     return {
        //         ...state,
        //         drawerComponent: action.payload,
        //     };
        // },
        updateDrawerProps: (state, action: PayloadAction<any>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'Drawer');
            newArray[drawerIndex].props = action.payload;
            state.drawerComponent = newArray;
        },
        updateDrawerHeaderProps: (state, action: PayloadAction<any>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'DrawerHeader');
            newArray[drawerIndex].props = action.payload;
            state.drawerComponent = newArray;
        },
        updateDrawerBodyProps: (state, action: PayloadAction<any>) => {
            const newArray = [...state.drawerComponent];
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.componentName === 'DrawerBody');
            newArray[drawerIndex].props = action.payload;
            state.drawerComponent = newArray;
        },
        updateDrawerNavGroupProps: (state, action: PayloadAction<any>) => {
            const newArray = [...state.drawerComponent];
            console.log(action.payload);
            const drawerIndex = newArray.findIndex((drawerData) => drawerData.id === action.payload.id);
            console.log(drawerIndex, 'drawerIndex');
            // const navGroup = newArray[drawerIndex].find((comp: componentType) => comp.componentName === componentName);
        },
        // updateDrawerNavGroupProps1: (state, action: PayloadAction<any>) => {
        //     const newArray = [...state.drawerComponent];
        //     const a = action.payload;
        //     const drawerIndex = newArray.findIndex(drawerData => drawerData.componentName === 'DrawerNavGroup');
        //     console.log(drawerIndex, 'drawerIndex');
        //     newArray[drawerIndex].nestedChildren[action.payload.index].nestedChildrenProps = action.payload.updatedProps;
        //     state.drawerComponent = newArray;
        // },
    },
});

export const { updateDrawerProps, updateDrawerHeaderProps, updateDrawerBodyProps, updateDrawerNavGroupProps } =
    drawerSlice.actions;

export default drawerSlice.reducer;