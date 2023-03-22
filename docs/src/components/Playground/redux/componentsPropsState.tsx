import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import appBarConfig from '../componentDocs/AppBar/playground/AppBarConfig';
import channelValueConfig from '../componentDocs/ChannelValue/playground/ChannelValueConfig';
import drawerConfig from '../componentDocs/Drawer/playground/DrawerConfig';
import drawerHeaderConfig from '../componentDocs/DrawerHeader/playground/DrawerHeaderConfig';
import drawerSubheaderConfig from '../componentDocs/DrawerSubheader/playground/DrawerSubheaderConfig';
import drawerFooterConfig from '../componentDocs/DrawerFooter/playground/DrawerFooterConfig';
import drawerNavGroupConfig from '../componentDocs/DrawerNavGroup/playground/DrawerNavGroupConfig';
import drawerNavItemConfig from '../componentDocs/DrawerNavItem/playground/DrawerNavItemConfig';
import drawerRailItemConfig from '../componentDocs/DrawerRailItem/playground/DrawerRailItemConfig';
import emptyStateConfig from '../componentDocs/EmptyState/playground/EmptyStateConfig';
import heroConfig from '../componentDocs/Hero/playground/HeroConfig';
import infoListItemConfig from '../componentDocs/InfoListItem/playground/InfoListItemConfig';
import listItemTagConfig from '../componentDocs/ListItemTag/playground/ListItemTagConfig';
import spacerConfig from '../componentDocs/Spacer/playground/SpacerConfig';
import scoreCardConfig from '../componentDocs/ScoreCard/playground/ScoreCardConfig';
import threeLinerConfig from '../componentDocs/ThreeLiner/playground/ThreeLinerConfig';
import toolbarMenuConfig from '../componentDocs/ToolbarMenu/playground/ToolbarMenuConfig';
import userMenuConfig from '../componentDocs/UserMenu/playground/UserMenuConfig';
import { getComponentState } from '../shared/utilities';
import { PayloadType, ComponentType } from '../__types__';

type ComponentState = {
    appBarComponent: ComponentType;
    channelValueComponent: ComponentType;
    drawerComponent: ComponentType;
    drawerHeaderComponent: ComponentType;
    drawerSubheaderComponent: ComponentType;
    drawerFooterComponent: ComponentType;
    drawerNavGroupComponent: ComponentType;
    drawerNavItemComponent: ComponentType;
    drawerRailItemComponent: ComponentType;
    emptyStateComponent: ComponentType;
    heroComponent: ComponentType;
    infoListItemComponent: ComponentType;
    listItemTagComponent: ComponentType;
    spacerComponent: ComponentType;
    scoreCardComponent: ComponentType;
    threeLinerComponent: ComponentType;
    toolbarMenuComponent: ComponentType;
    userMenuComponent: ComponentType;
};

const initialState: ComponentState = {
    appBarComponent: appBarConfig,
    channelValueComponent: channelValueConfig,
    drawerComponent: drawerConfig,
    drawerHeaderComponent: drawerHeaderConfig,
    drawerSubheaderComponent: drawerSubheaderConfig,
    drawerFooterComponent: drawerFooterConfig,
    drawerNavGroupComponent: drawerNavGroupConfig,
    drawerNavItemComponent: drawerNavItemConfig,
    drawerRailItemComponent: drawerRailItemConfig,
    emptyStateComponent: emptyStateConfig,
    heroComponent: heroConfig,
    infoListItemComponent: infoListItemConfig,
    listItemTagComponent: listItemTagConfig,
    spacerComponent: spacerConfig,
    scoreCardComponent: scoreCardConfig,
    threeLinerComponent: threeLinerConfig,
    toolbarMenuComponent: toolbarMenuConfig,
    userMenuComponent: userMenuConfig,
};

export const componentPropsStateSlice = createSlice({
    name: 'componentsPropsState',
    initialState: initialState,
    reducers: {
        resetProps: () => initialState,
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
        updateOtherComponentProp: (state, action: PayloadAction<PayloadType>) => {
            const newArray = getComponentState(action.payload.componentName, state);
            const updatedKnob = newArray?.otherComponentProps?.childComponentProps?.filter(
                (prop) => prop.propName === action.payload.propName
            );
            if (updatedKnob) {
                updatedKnob[0].inputValue = action.payload.propValue;
            }
        },
        updateComponentProp: (state, action: PayloadAction<PayloadType>) => {
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
