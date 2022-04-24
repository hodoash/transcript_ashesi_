// import { configureStore } from '@reduxjs/toolkit'
// import { updatePersonalInfo } from './userSlice'

// export const store = configureStore({
//   reducer:{
//     user:updatePersonalInfo,
//   }
// })

// // // Infer the `RootState` and `AppDispatch` types from the store itself
// // export type RootState = ReturnType<typeof store.getState>
// // // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// // export type AppDispatch = typeof store.dispatch

import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

export const store = createStore(rootReducer);
