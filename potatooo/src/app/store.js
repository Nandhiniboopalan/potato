import { configureStore } from "@reduxjs/toolkit";
import donorsReducer from "../features/usersSlice";
export const store = configureStore({
  reducer: {
    donors: donorsReducer,
  },
});

export default store;
