import { createSlice } from '@reduxjs/toolkit';

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

export const { newUserName } = authSlice.actions;

export default authSlice.reducer;
