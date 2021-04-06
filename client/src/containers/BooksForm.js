import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import { addBookToApi } from '../helpers/api_methods/api';

const BooksForm = ({ bookCreator }) => {
  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: '',
    author: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setBookInfo({ ...bookInfo, [name]: value });
  };

  const handleSubmit = () => {
    if (bookInfo.title !== '' && bookInfo.category !== '') {
      addBookToApi(bookInfo, bookCreator);
      setBookInfo({ title: '', category: '', author: '' });
    } else {
      setBookInfo({ ...bookInfo });
    }
  };

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <form className="p-100 form">
        <h2 className="add-new-book">ADD NEW BOOK</h2>
        <div className="flex just-sb">
          <input onChange={handleChange} id="titleInput" name="title" type="text" value={bookInfo.title} placeholder="Book Title" />
          <input onChange={handleChange} id="authorInput" name="author" type="text" value={bookInfo.author} placeholder="Author" />
          <select id="categoryInput" className="pointer" name="category" onChange={handleChange} value={bookInfo.category}>
            <option className="categories-option" value="" disabled>Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button className="add-btn pointer" onClick={handleSubmit} type="button">Add Book</button>
        </div>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  bookCreator: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  bookCreator: book => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BooksForm);
