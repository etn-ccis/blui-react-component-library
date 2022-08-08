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
        updateDrawerComponent: (state, action: PayloadAction<Array<componentType>>) => {
            return {
                ...state,
                drawerComponent: action.payload,
            };
        },
    },
});

export const { updateDrawerComponent } = drawerSlice.actions;

export default drawerSlice.reducer;
