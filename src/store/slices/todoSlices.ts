import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterType, Todo, TodoState } from "../../types/models";
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
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
        saveTodos(state.todos);
      }
    },
    setFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
    }
  }
});

export const { addTodo, deleteTodo, toggleCompletedTodo, updateTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;