import { combineReducers } from 'redux';
import todosReducer from './todos';
export { default as todosReducer } from './todos';
export * from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
