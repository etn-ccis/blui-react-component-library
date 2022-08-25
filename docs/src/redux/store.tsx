import { configureStore } from '@reduxjs/toolkit';
import drawerComponentReducer from './drawerComponent';
import drawerHeaderComponentReducer from './drawerHeaderComponent';

export const store = configureStore({
    reducer: {
        drawerComponentData: drawerComponentReducer,
        drawerHeaderComponentData: drawerHeaderComponentReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
