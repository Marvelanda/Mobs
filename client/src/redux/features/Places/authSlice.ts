import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from '../../types/placesTypes';

import { Types, ActionTypes, UserState } from '../../types/users';

const initialState: UserState = {
  userName: '',
  status: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    newUserName: (state, action: PayloadAction<UserState>) => {
      state.userName = action.payload.userName;
      state.status = action.payload.status;
      state.error = action.payload.error;
    },

    setStatus: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },

    logoutUser: (state, action: PayloadAction<UserState>) => {
      state.userName = '';
      state.status = false;
    },
  },
});

export const getUser = (email: string, password: string): ActionTypes => {
  return {
    type: Types.GETUSER,
    email,
    password,
  };
};

export const addUser = (
  userName: string,
  email: string,
  password: string,
  fivePlaces: ModalState[]
): ActionTypes => {
  return {
    type: Types.ADDUSER,
    userName,
    email,
    password,
    fivePlaces,
  };
};

export const removeUser = (): ActionTypes => {
  return {
    type: Types.REMOVEUSER,
  };
};

export const { newUserName, logoutUser, setStatus } = authSlice.actions;

export default authSlice.reducer;
