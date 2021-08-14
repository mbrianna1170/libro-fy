const { Books } = require('../models');

const categoryData = [
  {
    book_name: 'Goodnight Moon',
    author_name: 'Margaret Wise Brown',
    book_url: 'https://www.hoopladigital.com/title/12293865',
    category_id: '1',
  },
  {
    book_name: 'The Little Engine that Could',
    author_name: 'Watty Piper',
    book_url: 'https://www.hoopladigital.com/title/12193985',
    category_id: '1',
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