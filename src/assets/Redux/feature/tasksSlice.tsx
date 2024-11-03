import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types/types';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState:[] as Task[],
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { add, toggle } = tasksSlice.actions;
export default tasksSlice.reducer;