import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { deleteTodo, toggleTodo } from '../features';
import './Todo.css';

interface TodoProps {
  id: number;
  done: boolean;
}

const TodoHook: FC<TodoProps> = ({ children, id, done }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <span className={done ? 'cross' : undefined}>{children}</span>
      <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
      <button onClick={() => dispatch(toggleTodo(id))}>toggle DONE</button>
    </div>
  );
};

export default TodoHook;
