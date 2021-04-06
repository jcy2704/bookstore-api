import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { loadBooks, removeBook } from '../actions/index';
import { getBooks } from '../helpers/api_methods/api';
import { filteredBooks } from '../helpers/filter';

const BooksList = ({
  books, filter, delete: handleRemoveBook, loader
}) => {
  useEffect(() => {
    getBooks(loader);
  }, [loader]);

  return (
    <>
      <ul className="books-cards-cont">
        {filteredBooks(books, filter).map(book => <Book key={book.id} book={book} delete={handleRemoveBook} />)}
      </ul>
      <div className="form-divider" />
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delete: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  loader: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  delete: book => dispatch(removeBook(book)),
  loader: books => dispatch(loadBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
