import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  menuStatus: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.menuStatus = !state.menuStatus;
    },
  },
});

export const {toggleMenu} = categorySlice.actions;

export default categorySlice.reducer;
