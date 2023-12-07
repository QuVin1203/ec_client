import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
    changeCurrentUser: (state, action) => {
      state.currentUser = {
        ...action.payload,
        accessToken: state.currentUser.accessToken,
      };
    },
    logoutSuccess: (state) => {
      (state.currentUser = null), (state.isLogin = false);
    },
  },
});

export const { loginSuccess, logoutSuccess, addAddress } = authSlice.actions;

export default authSlice.reducer;
