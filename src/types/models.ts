export interface Todo {
  id: string;
  text: string;
  description: string;
  completed: boolean;
};

export type FilterType = 'all' | 'active' | 'completed';

export interface TodoState {
  todos: Todo[];
  filter: FilterType
};