import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "../../types/models";
import { loadTodos, saveTodos } from "../utils/storage";

const initialTodo: TodoState = {
  todos: loadTodos(),
  filter: 'all'
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodo,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
      saveTodos(state.todos);
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      saveTodos(state.todos);
    },
    toggleCompletedTodo(state, action: PayloadAction<string>) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state.todos);
      }
    }
  }
});

export const { addTodo, deleteTodo, toggleCompletedTodo } = todoSlice.actions;
export default todoSlice.reducer;