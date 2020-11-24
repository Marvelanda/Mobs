import { createSlice } from '@reduxjs/toolkit';

import { GETUSER, ADDUSER } from '../../types/users'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: '',
    status: false,
    error: '',
  },
  reducers: {
    newUserName: (state, action) => {
      state.userName = action.payload.userName;
      state.status = action.payload.status;
      state.error = action.payload.error;
    },

    setStatus: (state, action) => {
      state.status = true;
    },

    logoutUser: (state, action) => {
      state.userName = '';
      state.status = false;
    },
  },
});

export const getUser = (email, password) => {
  return {
    type: GETUSER,
    email,
    password,
  };
};

export const addUser = (username, email, password, fivePlaces) => {
  return {
    type: ADDUSER,
    username,
    email,
    password,
    fivePlaces,
  };
};

export const { newUserName, logoutUser, setStatus } = authSlice.actions;

export default authSlice.reducer;
