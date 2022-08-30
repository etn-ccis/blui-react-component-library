import { configureStore } from '@reduxjs/toolkit';
import componentsPropsStateReducer from './componentsPropsState';

export const store = configureStore({
    reducer: {
        componentsPropsState: componentsPropsStateReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
