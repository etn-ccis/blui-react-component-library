import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypesNew, { componentType, propsType } from '../data/DrawerTypesNew';

// interface DrawerState {
//     drawerComponent: componentType[];
// }

const initialState = {
    drawerComponent: drawerTypesNew,
};

export const drawerSlice = createSlice({
    name: 'drawerComponent',
    initialState,
    reducers: {
        updateDrawerComponent: (state, action: any) => {
            const newArray = state.drawerComponent;
            console.log(newArray, 'newArray');
            newArray[0].props = action.payload;
            state.drawerComponent = { ...state.drawerComponent, ...newArray };
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateDrawerComponent } = drawerSlice.actions;

export default drawerSlice.reducer;
