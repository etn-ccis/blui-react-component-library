import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import drawerTypes from '../componentDocs/Drawer/playground/DrawerConfig';
import drawerHeaderConfig from '../componentDocs/DrawerHeader/playground/DrawerHeaderConfig';
import drawerSubheaderConfig from '../componentDocs/DrawerSubheader/playground/DrawerSubheaderConfig';
import drawerFooterConfig from '../componentDocs/DrawerFooter/playground/DrawerFooterConfig';
import drawerNavGroupConfig from '../componentDocs/DrawerNavGroup/playground/DrawerNavGroupConfig';
import heroConfig from '../componentDocs/Hero/playground/HeroConfig';
import listItemTagConfig from '../componentDocs/ListItemTag/playground/ListItemTagConfig';
import threeLinerConfig from '../componentDocs/ThreeLiner/playground/ThreeLinerConfig';
import { getComponentState } from '../shared/utilities';
import { PayloadType, ComponentType } from '../__types__';

type ComponentState = {
    drawerComponent: ComponentType;
    drawerHeaderComponent: ComponentType;
    drawerSubheaderComponent: ComponentType;
    drawerFooterComponent: ComponentType;
    heroComponent: ComponentType;
    drawerNavGroupComponent: ComponentType;
    listItemTagComponent: ComponentType;
    threeLinerComponent: ComponentType;
};

const initialState: ComponentState = {
    drawerComponent: drawerTypes,
    drawerHeaderComponent: drawerHeaderConfig,
    drawerSubheaderComponent: drawerSubheaderConfig,
    drawerFooterComponent: drawerFooterConfig,
    drawerNavGroupComponent: drawerNavGroupConfig,
    heroComponent: heroConfig,
    listItemTagComponent: listItemTagConfig,
    threeLinerComponent: threeLinerConfig,
};

export const componentPropsStateSlice = createSlice({
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

export const { updateProp, updateSharedProp, updateOtherProp, updateActiveItemProp } = componentPropsStateSlice.actions;

export default componentPropsStateSlice.reducer;
