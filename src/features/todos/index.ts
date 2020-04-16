import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { todos } from '../../db/todos.json';

type State = Todo[];

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const addTodoReducer: CaseReducer<State, PayloadAction<Todo>> = (
  state,
  action,
) => {
  state.push({
    id: Date.now(),
    text: action.payload.text,
    done: action.payload.done,
  });
};

const deleteTodoReducer: CaseReducer<State, PayloadAction<number>> = (
  state,
  action,
) => {
  return state.filter(({ id }) => id !== action.payload);
};

const toggleTodoReducer: CaseReducer<State, PayloadAction<number>> = (
  state,
  action,
) => {
  const todo = state.find(({ id }) => id === action.payload);
  todo!.done = !todo?.done;
};

const renewReducer: CaseReducer<State> = () => {
  return todos;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: todos as State,
  reducers: {
    addTodo: addTodoReducer,
    renew: renewReducer,
    deleteTodo: deleteTodoReducer,
    toggleTodo: toggleTodoReducer,
  },
});

export const addTodo = todoSlice.actions.addTodo;
export const renew = todoSlice.actions.renew;
export const deleteTodo = todoSlice.actions.deleteTodo;
export const toggleTodo = todoSlice.actions.toggleTodo;
export default todoSlice.reducer;
