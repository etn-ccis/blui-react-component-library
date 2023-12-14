import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerNavItemConfig from '../componentDocs/DrawerNavItem/playground/DrawerNavItemConfig';
import drawerRailItemConfig from '../componentDocs/DrawerRailItem/playground/DrawerRailItemConfig';
import { getComponentState } from '../shared/utilities';
import { ComponentDocPayloadType, ComponentType } from '../__types__';

type ComponentState = {
    drawerNavItemComponent: ComponentType;
    drawerRailItemComponent: ComponentType;
};

const initialState: ComponentState = {
    drawerNavItemComponent: drawerNavItemConfig,
    drawerRailItemComponent: drawerRailItemConfig,
};

export const componentPropsStateSlice = createSlice({
    name: 'componentsPropsState',
    initialState: initialState,
    reducers: {
        resetProps: () => initialState,
        updateProp: (state, action: PayloadAction<ComponentDocPayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.props?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateSharedProp: (state, action: PayloadAction<ComponentDocPayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.sharedProps?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateOtherProp: (state, action: PayloadAction<ComponentDocPayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.otherProps?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateOtherComponentProp: (state, action: PayloadAction<ComponentDocPayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.otherComponentProps?.childComponentProps?.filter(
                (prop) => prop.propName === action.payload.propName
            );
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateComponentProp: (state, action: PayloadAction<ComponentDocPayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.props?.filter((prop) => prop.propName === action.payload.propName);
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
    },
});

export const {
    resetProps,
    updateProp,
    updateSharedProp,
    updateOtherProp,
    updateComponentProp,
    updateOtherComponentProp,
} = componentPropsStateSlice.actions;

export default componentPropsStateSlice.reducer;
