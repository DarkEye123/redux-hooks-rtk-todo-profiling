import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features';
import { Todo as TodoType } from '../features/todos';
import TodoHookFix from './TodoHookFix';

const TodoList: FC = () => {
  const todos = useSelector<RootState, TodoType[]>((state) => state.todos);
  return (
    <div>
      {todos.map(({ id, done, text }) => (
        <TodoHookFix done={done} key={id} id={id}>
          {text}
        </TodoHookFix>
      ))}
    </div>
  );
};

export default TodoList;
