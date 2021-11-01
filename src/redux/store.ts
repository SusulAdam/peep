import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userListSlice from "./UserListSlice";

const rootReducer = combineReducers({
  userList: userListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export { store };
