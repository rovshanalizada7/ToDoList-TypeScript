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
    deleteTask: (state,action: PayloadAction<number>) => {
      return state.filter(item => item.id != action.payload)
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], text: action.payload.text }; 
      }
    },
    toggle: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { add, deleteTask ,editTask, toggle } = tasksSlice.actions;
export default tasksSlice.reducer;