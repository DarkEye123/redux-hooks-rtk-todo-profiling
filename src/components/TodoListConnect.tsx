import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../features';
import { Todo as TodoType } from '../features/todos';
import TodoConnect from './TodoConnect';

const mapStateToProps = (state: RootState): { todos: TodoType[] } => ({
  todos: state.todos,
});

const TodoList: FC<{ todos: TodoType[] }> = ({ todos }) => {
  return (
    <div>
      {todos.map(({ id, done, text }) => (
        <TodoConnect done={done} key={id} id={id}>
          {text}
        </TodoConnect>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(TodoList);
