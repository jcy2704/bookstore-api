import axios from 'axios';

export const getBooks = (loader) => {
  axios.get('api/v1/books')
    .then(response => {
      loader(response.data)
    })
    .catch(error => console.log(error))
}

export const addBookToApi = (bookInfo, bookCreator) => {
  axios.post('/api/v1/books', bookInfo)
  .then(response => {
    bookCreator(response.data);
  })
  .catch(error => console.log(error))
};

export const deleteBook = (id, handleRemoveBook, book) => {
  axios.delete(`/api/v1/books/${id}`)
  .then(response => {
    handleRemoveBook(book)
  })
  .catch(error => console.log(error))
}