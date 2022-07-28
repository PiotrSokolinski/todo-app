import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo } from '../../types';

const initialState: Todo[] = [];

export const counterSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.unshift(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((el) => el.uuid === action.payload),
        1,
      );
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state[state.findIndex((el) => el.uuid === action.payload.uuid)] = action.payload;
    },
    replaceTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, replaceTodos } = counterSlice.actions;

export default counterSlice.reducer;
