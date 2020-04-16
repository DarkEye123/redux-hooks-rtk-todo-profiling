import React, { FC, ReactNode } from 'react';
import { deleteTodo, toggleTodo } from '../features';
import './Todo.css';
import { connect } from 'react-redux';
import { AppDispatch } from '../store';

const mapDispatchToProps = (dispatch: AppDispatch, ownProps: TodoProps) => ({
  deleteTodo: () => dispatch(deleteTodo(ownProps.id)),
  toggleTodo: () => dispatch(toggleTodo(ownProps.id)),
});

interface TodoProps {
  id: number;
  done: boolean;
  children: ReactNode;
}

const TodoConnect: FC<TodoProps & ReturnType<typeof mapDispatchToProps>> = ({
  children,
  done,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <div>
      <span className={done ? 'cross' : undefined}>{children}</span>
      <button onClick={deleteTodo}>delete</button>
      <button onClick={toggleTodo}>toggle DONE</button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TodoConnect);
