import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypes from '../componentDocs/Drawer/playground/DrawerTypes';
import drawerHeaderTypes from '../componentDocs/DrawerHeader/playground/DrawerHeaderTypes';
import { getComponentState } from '../shared/utilities';
import { PayloadType, ComponentType } from '../__types__';
type ComponentState = {
    drawerComponent: ComponentType;
    drawerHeaderComponent: ComponentType;
};
const initialState: ComponentState = {
    drawerComponent: drawerTypes,
    drawerHeaderComponent: drawerHeaderTypes,
};
export const drawerHeaderSlice = createSlice({
    name: 'componentsPropsState',
    initialState: initialState,
    reducers: {
        updateProp: (state, action: PayloadAction<PayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.props?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateSharedProp: (state, action: PayloadAction<PayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.sharedProps?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateOtherProp: (state, action: PayloadAction<PayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.otherProps?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateActiveItemProp: (state, action: PayloadAction<PayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.props?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
    },
});

export const { updateProp, updateSharedProp, updateOtherProp, updateActiveItemProp } = drawerHeaderSlice.actions;

export default drawerHeaderSlice.reducer;
