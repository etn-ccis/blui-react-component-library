import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import appBarConfig from '../componentDocs/AppBar/playground/AppBarConfig';
import drawerConfig from '../componentDocs/Drawer/playground/DrawerConfig';
import drawerHeaderConfig from '../componentDocs/DrawerHeader/playground/DrawerHeaderConfig';
import drawerSubheaderConfig from '../componentDocs/DrawerSubheader/playground/DrawerSubheaderConfig';
import drawerFooterConfig from '../componentDocs/DrawerFooter/playground/DrawerFooterConfig';
import drawerNavGroupConfig from '../componentDocs/DrawerNavGroup/playground/DrawerNavGroupConfig';
import drawerNavItemConfig from '../componentDocs/DrawerNavItem/playground/DrawerNavItemConfig';
import heroConfig from '../componentDocs/Hero/playground/HeroConfig';
import listItemTagConfig from '../componentDocs/ListItemTag/playground/ListItemTagConfig';
import threeLinerConfig from '../componentDocs/ThreeLiner/playground/ThreeLinerConfig';
import { getComponentState } from '../shared/utilities';
import { PayloadType, ComponentType } from '../__types__';

type ComponentState = {
    appBarComponent: ComponentType;
    drawerComponent: ComponentType;
    drawerHeaderComponent: ComponentType;
    drawerSubheaderComponent: ComponentType;
    drawerFooterComponent: ComponentType;
    drawerNavGroupComponent: ComponentType;
    drawerNavItemComponent: ComponentType;
    heroComponent: ComponentType;
    listItemTagComponent: ComponentType;
    threeLinerComponent: ComponentType;
};

const initialState: ComponentState = {
    appBarComponent: appBarConfig,
    drawerComponent: drawerConfig,
    drawerHeaderComponent: drawerHeaderConfig,
    drawerSubheaderComponent: drawerSubheaderConfig,
    drawerFooterComponent: drawerFooterConfig,
    drawerNavGroupComponent: drawerNavGroupConfig,
    drawerNavItemComponent: drawerNavItemConfig,
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
