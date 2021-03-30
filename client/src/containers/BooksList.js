/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Book from '../components/Book';
import { loadBooks, removeBook } from '../actions/index';

const BooksList = ({
  books, filter, delete: handleRemoveBook, loader
}) => {
  const getBooks = () => {
    axios.get('/v1/books')
      .then(response => {
        loader(response.data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getBooks();
  });

  const filteredBooks = () => {
    if (filter === 'All') {
      return books.sort((a, b) => a.id - b.id);
    }
    return books.filter(book => book.category === filter).sort((a, b) => a.id - b.id);
  };

  return (
    <>
      <ul className="books-cards-cont">
        {filteredBooks().map(book => <Book key={book.id} book={book} delete={handleRemoveBook} />)}
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
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  delete: book => dispatch(removeBook(book)),
  loader: books => dispatch(loadBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
