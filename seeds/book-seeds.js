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
    book_name: 'Dragonflight',
    author_name: 'Anne McCaffrey',
    book_url: 'https://www.amazon.com/Dragonflight-Dragonriders-Pern-Anne-McCaffrey/dp/0345335465',
    category_id: '2',
  },
  {
    book_name: 'Trail of Lightning',
    author_name: 'Rebecca Roanhorse',
    book_url: 'https://www.amazon.com/s?k=trail+of+lightning+by+rebecca+roanhorse&i=stripbooks&crid=3FRI0RLR85Z8D&sprefix=Trail+of+Light%2Cstripbooks%2C248&ref=nb_sb_ss_ts-doa-p_1_14',
    category_id: '2',
  },
  {
    book_name: 'Treasure Island',
    author_name: 'Robert Louis Stevenson',
    book_url: 'https://www.hoopladigital.com/title/12638617',
    category_id: '3',
  },
  {
    book_name: 'Life of Pi',
    author_name: 'Yann Martel',
    book_url: 'https://www.hoopladigital.com/title/13919129',
    category_id: '3',
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