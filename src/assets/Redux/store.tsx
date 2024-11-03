import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../Redux/feature/tasksSlice';
import filterReducer from '../Redux/feature/filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;