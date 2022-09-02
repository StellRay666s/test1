import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    isAuth: false,
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state) => {
      state.user.isAuth = true;
    },
  },
});
export const { setUser } = userSlice.actions;

/** Reducer */
export default userSlice.reducer;
