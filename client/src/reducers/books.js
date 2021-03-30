/* eslint-disable max-len */
import { CREATE_BOOK, REMOVE_BOOK, LOAD_BOOKS } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    case CREATE_BOOK:
      return [
        ...state, { title: action.book.title, category: action.book.category, author: action.book.author },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;