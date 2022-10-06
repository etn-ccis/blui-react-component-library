import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './appState';
import componentsPropsStateReducer from './componentsPropsState';

export const store = configureStore({
    reducer: {
        appState: appStateReducer,
        componentsPropsState: componentsPropsStateReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
