import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apiClient from "./apiClient";

export type User = {
  name: string;
};

export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
};

const initialState: UserListState = {
  users: [],
  loading: false,
  error: false,
};

export const fetchUsers = createAsyncThunk<{ users: User[] }, { page: number }>(
  "fetchUsers",
  async ({ page }) => {
    const respone = await apiClient.fetchUsers(page, 10);
    if (respone.kind === "success") {
      return {
        users: respone.body ?? [],
      };
    } else {
      throw "Error fetching user ";
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
        (state.loading = true), (state.error = false);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.loading = false), (state.users = action.payload.users);
      })
      .addCase(fetchUsers.rejected, (state) => {
        (state.loading = false), (state.error = true);
      });
  },
});

export default userListSlice.reducer;
