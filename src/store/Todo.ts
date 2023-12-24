import { create } from "zustand";

type Todo={
  id: number;
  title: string;
  completed: boolean;
}
interface TodoStore{
  todos: Todo[] | [];
  addTodo : (todo: Todo) => (void)
}
export const useTodoStore = create<TodoStore>()((set)=>({
  todos : [],
  addTodo: (todo) => set(state => ({todos: [...state.todos,todo]}))
}))