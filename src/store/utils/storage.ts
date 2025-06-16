import { Todo } from "../../types/models";

const TODOS_KEY = 'todos-rtk';

export const loadTodos = (): Todo[] => {
  const data = localStorage.getItem(TODOS_KEY)
  return data ? JSON.parse(data) : []
}

export const saveTodos = (data: Todo[]): void => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(data))
}