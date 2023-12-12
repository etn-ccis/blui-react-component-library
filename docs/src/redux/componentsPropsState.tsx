import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerConfig from '../componentDocs/Drawer/playground/DrawerConfig';
import drawerSubheaderConfig from '../componentDocs/DrawerSubheader/playground/DrawerSubheaderConfig';
import drawerFooterConfig from '../componentDocs/DrawerFooter/playground/DrawerFooterConfig';
import drawerNavGroupConfig from '../componentDocs/DrawerNavGroup/playground/DrawerNavGroupConfig';
import drawerNavItemConfig from '../componentDocs/DrawerNavItem/playground/DrawerNavItemConfig';
import drawerRailItemConfig from '../componentDocs/DrawerRailItem/playground/DrawerRailItemConfig';
import { getComponentState } from '../shared/utilities';
import { ComponentDocPayloadType, ComponentType } from '../__types__';

type ComponentState = {
    drawerComponent: ComponentType;
    drawerSubheaderComponent: ComponentType;
    drawerFooterComponent: ComponentType;
    drawerNavGroupComponent: ComponentType;
    drawerNavItemComponent: ComponentType;
    drawerRailItemComponent: ComponentType;
};

const initialState: ComponentState = {
    drawerComponent: drawerConfig,
    drawerSubheaderComponent: drawerSubheaderConfig,
    drawerFooterComponent: drawerFooterConfig,
    drawerNavGroupComponent: drawerNavGroupConfig,
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
