import { configureStore } from "@reduxjs/toolkit";
import comicsReducer from "./comicSlice";
import userReducer from "./userSlice";
import workshopReducer from "./workshopSlice";
import authReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    comics: comicsReducer,
    user: userReducer,
    workshop: workshopReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;