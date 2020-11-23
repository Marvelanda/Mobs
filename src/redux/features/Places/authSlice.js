import { createSlice } from '@reduxjs/toolkit';
import {GETUSER} from '../../types/users'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: '',
  },
  reducers: {
    newUserName: (state, action) => {
      state.userName = action.payload
    }
  },
});

export const getUser = (email, password) => { 
  return {
    type: GETUSER,
    email,
    password,
  };
};

// export const addUser = (username, email, password) =>{
//   return {
//     type: ADDUSER,
//     username,
//     email,
//     password,
//   };
// };


export const { newUserName } = authSlice.actions;

export default authSlice.reducer;
