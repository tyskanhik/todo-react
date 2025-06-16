import { configureStore } from "@reduxjs/toolkit";
import slicesTodo from './slices/todoSlices'


export const store = configureStore({
  reducer: {
    todos: slicesTodo
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;