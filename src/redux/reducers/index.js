import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import todosReducer from './todos';
import postsReducer from './posts'

const rootReducer = combineReducers({
	counter: counterReducer,
	isLogged: isLoggedReducer,
	todos: todosReducer,
	posts: postsReducer
});

export default rootReducer;
