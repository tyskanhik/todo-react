import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "../../types/models";
import { loadTodos } from "../utils/storage";


const initialTodo: TodoState = {
  todos: loadTodos(),
  filter: 'all'
};

const slicesTodo = createSlice({
  name: 'todos',
  initialState: initialTodo,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },

    toggleCompletedTodo(state, action: PayloadAction<string>) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if(todo) todo.completed = !todo.completed;
    }
  }
});

export const { addTodo, deleteTodo, toggleCompletedTodo } = slicesTodo.actions;
export default slicesTodo.reducer;