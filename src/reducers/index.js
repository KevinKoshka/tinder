import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//Acá se combinan los reducers en un mismo objeto.

const rootReducer = combineReducers({
  books : BooksReducer
});

export default rootReducer;
