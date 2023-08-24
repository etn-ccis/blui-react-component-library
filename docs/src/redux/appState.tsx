import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SiteThemePayloadType, SiteDirectionPayloadType, SiteThemeType, UIDirection } from '../__types__';

type AppState = {
    drawerOpen: boolean;
    siteTheme: SiteThemeType;
    siteDirection: UIDirection;
};

const siteTheme = localStorage.getItem('site-theme') as null | SiteThemeType;
const siteDirection = localStorage.getItem('site-direction') as null | UIDirection;

const initialState: AppState = {
    drawerOpen: false,
    siteTheme: siteTheme === null ? 'light' : siteTheme,
    siteDirection: siteDirection === null ? 'ltr' : siteDirection,
};

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: initialState,
    reducers: {
        closeDrawer: (state:AppState) => ({
            ...state,
            drawerOpen: false,
        }),
        toggleDrawer: (state:AppState) => ({
            ...state,
            drawerOpen: !state.drawerOpen,
        }),
        changeSiteTheme: (state:AppState, action: PayloadAction<SiteThemePayloadType>) => {
            localStorage.setItem('site-theme', action.payload.siteTheme);
            return {
                ...state,
                siteTheme: action.payload.siteTheme,
            };
        },
        changeDirection: (state:AppState, action: PayloadAction<SiteDirectionPayloadType>) => {
            localStorage.setItem('site-direction', action.payload.siteDirection);
            return {
                ...state,
                siteDirection: action.payload.siteDirection,
            };
        },
    },
});

export const { closeDrawer, toggleDrawer, changeSiteTheme, changeDirection } = appStateSlice.actions;

export default appStateSlice.reducer;
