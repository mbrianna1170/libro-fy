const { Books } = require('../models');

const categoryData = [
  {
    book_name: '',
    author_name: '',
    book_url: '',
    category_id: '',
  },
  {
    book_name: '',
    author_name: '',
    book_url: '',
    category_id: '',
  },
  {
    book_name: '',
    author_name: '',
    book_url: '',
    category_id: '',
  },
  {
    book_name: '',
    author_name: '',
    book_url: '',
    category_id: '',
  },
  {
    book_name: '',
    author_name: '',
    book_url: '',
    category_id: '',
  },
];

const seedBooks = () => Books.bulkCreate(bookData);



module.exports = seedBooks;