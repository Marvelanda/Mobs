import { createSlice } from '@reduxjs/toolkit';

import { GETUSER, ADDUSER, REMOVEUSER } from '../../types/users';

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
      console.log(action.payload);
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

export const addUser = (userName, email, password, fivePlaces) => {
  return {
    type: ADDUSER,
    userName,
    email,
    password,
    fivePlaces,
  };
};

export const removeUser = () => {
  return {
    type: REMOVEUSER,
  };
};

export const { newUserName, logoutUser, setStatus } = authSlice.actions;

export default authSlice.reducer;
