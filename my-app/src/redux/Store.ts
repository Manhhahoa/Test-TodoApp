import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/UserSlice";
import userToken from ".././redux/user/UserToken";
export const store = configureStore({
  reducer: {
    user: userReducer,
    userToken: userToken,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
