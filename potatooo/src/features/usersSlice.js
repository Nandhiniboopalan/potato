import { createSlice } from '@reduxjs/toolkit';

const UsersSlice = createSlice({
  name: 'donors',
  initialState: [],
  reducers: {
    addDonor: (state, action) => {
      state.push(action.payload);
    },
    deleteDonor: (state, action) => {
      return state.filter((donor) => donor.id !== action.payload.id);
    },
  },
});

export const { addDonor, deleteDonor } = UsersSlice.actions;
export default UsersSlice.reducer;