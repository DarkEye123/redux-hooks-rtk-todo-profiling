import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import TodoListHookPerfBug from './components/TodoListHookPerfBug';
import TodoListConnect from './components/TodoListConnect';
import Filter from './components/Filter';
import { renew } from './features';
import TodoListHookPerfBugFix from './components/TodoListHookPerfBugFix';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Filter></Filter>
      <TodoListHookPerfBug></TodoListHookPerfBug>
      <br></br>
      <TodoListHookPerfBugFix></TodoListHookPerfBugFix>
      <br></br>
      <TodoListConnect></TodoListConnect>
      <button onClick={() => dispatch(renew())}>renew db</button>
    </>
  );
}

export default App;
