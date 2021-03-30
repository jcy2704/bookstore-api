export const filteredBooks = (books, filter) => {
  if (filter === 'All') {
    return books.sort((a, b) => a.id - b.id);
  }
  return books.filter(book => book.category === filter).sort((a, b) => a.id - b.id);
};