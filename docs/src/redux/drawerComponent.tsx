import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypes, { componentType, propsType } from '../data/DrawerTypesNew';

interface DrawerState {
    drawerComponent: any;
}

const initialState: DrawerState = {
    drawerComponent: drawerTypes,
};

export const drawerSlice = createSlice({
    name: 'drawerComponent',
    initialState,
    reducers: {
        updateDrawerComponent: (state, action: PayloadAction<Array<propsType>>) => {
            const newArray = state.drawerComponent;
            console.log(newArray, 'newArray');
            // newArray[0].children = action.payload;
            // state.drawerComponent = { ...state.drawerComponent, ...newArray };
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateDrawerComponent } = drawerSlice.actions;

export default drawerSlice.reducer;
