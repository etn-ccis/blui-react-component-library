import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypesNew, { componentType } from '../data/DrawerTypesNew';
interface DrawerState {
    drawerComponent: componentType[];
}
const initialState: DrawerState = {
    drawerComponent: drawerTypesNew,
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
