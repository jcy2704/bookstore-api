/* eslint-disable max-len */
import { CREATE_BOOK, REMOVE_BOOK, LOAD_BOOKS } from '../actions/index';

export const randInt = (minim, maxim) => {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    case CREATE_BOOK:
      return [
        ...state, { title: action.book.title, category: action.book.category },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;