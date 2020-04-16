import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features';
import { Todo as TodoType } from '../features/todos';
import TodoHook from './TodoHook';

const TodoList: FC = () => {
  const todos = useSelector<RootState, TodoType[]>((state) => state.todos);
  return (
    <div>
      {todos.map(({ id, done, text }) => (
        <TodoHook done={done} key={id} id={id}>
          {text}
        </TodoHook>
      ))}
    </div>
  );
};

export default TodoList;
