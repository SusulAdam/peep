import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apiClient from "./apiClient";

export type User = {
  name: {
    first: string;
  };
  picture: {
    thumbnail: string;
  };
};

export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
};

const initialState: UserListState = {
  users: [],
  loading: false,
  error: true,
};

export const fetchUsers = createAsyncThunk<{ users: User[] }, { page: number }>(
  "fetchUsers",
  async ({ page }) => {
    const response = await apiClient.fetchUsers(page, 12);
    if (response.kind === "success") {
      return {
        users: response.body ?? [],
      };
    } else {
      throw "Error fetching users";
    }
  }
);

const userListSlice = createSlice({
  name: "userList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = state.users.concat(action.payload.users);
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default userListSlice.reducer;
