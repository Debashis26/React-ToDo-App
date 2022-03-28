export interface ITodo {
  id: number;
  task: string;
  completed: boolean;
}
export type AddTodo = (newTodo: ITodo) => void;
export type RemoveTodo = (id: number) => void;
export type ToggleTodo = (id: number) => void;
export type UpdateTodo = (id: number, values: string) => void;
