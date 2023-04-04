import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStatePayloadType, SiteThemeType } from '../__types__';

type AppState = {
    drawerOpen: boolean;
    siteTheme: SiteThemeType;
};

const siteTheme = localStorage.getItem('site-theme') as null | SiteThemeType;

const initialState: AppState = {
    drawerOpen: false,
    siteTheme: siteTheme === null ? 'light' : siteTheme,
};

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: initialState,
    reducers: {
        closeDrawer: (state) => ({
            ...state,
            drawerOpen: false,
        }),
        toggleDrawer: (state) => ({
            ...state,
            drawerOpen: !state.drawerOpen,
        }),
        changeSiteTheme: (state, action: PayloadAction<AppStatePayloadType>) => {
            localStorage.setItem('site-theme', action.payload.siteTheme);
            return {
                ...state,
                siteTheme: action.payload.siteTheme,
            };
        },
    },
});

export const { closeDrawer, toggleDrawer, changeSiteTheme } = appStateSlice.actions;

export default appStateSlice.reducer;
