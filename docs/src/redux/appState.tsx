import { createSlice } from '@reduxjs/toolkit';

type AppState = {
    drawerOpen: boolean;
};

const initialState: AppState = {
    drawerOpen: false,
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
    },
});

export const { closeDrawer, toggleDrawer } = appStateSlice.actions;

export default appStateSlice.reducer;
