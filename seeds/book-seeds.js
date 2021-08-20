const { Book } = require("../models");

const bookData = [
  {
    book_name: "Goodnight Moon",
    author_name: "Margaret Wise Brown",
    book_url: "https://www.hoopladigital.com/title/12293865",
    category_id: "1",
    img_url: "https://m.media-amazon.com/images/M/MV5BMTkzNjQ0MTE4NF5BMl5BanBnXkFtZTcwNjk2MTgyMQ@@._V1_.jpg",
  },
  {
    book_name: "The Little Engine that Could",
    author_name: "Watty Piper",
    book_url: "https://www.hoopladigital.com/title/12193985",
    category_id: "1",
    img_url: "https://images.penguinrandomhouse.com/cover/9780448190785",
  },
  {
    book_name: "Dragonflight",
    author_name: "Anne McCaffrey",
    book_url:
      "https://www.amazon.com/Dragonflight-Dragonriders-Pern-Anne-McCaffrey/dp/0345335465",
    category_id: "2",
    img_url: "https://img.thriftbooks.com/api/images/m/bd987a5ee47ab2ea769a319f86ec8f6509eb7dd2.jpg",
  },
  {
    book_name: "Trail of Lightning",
    author_name: "Rebecca Roanhorse",
    book_url:
      "https://www.amazon.com/s?k=trail+of+lightning+by+rebecca+roanhorse&i=stripbooks&crid=3FRI0RLR85Z8D&sprefix=Trail+of+Light%2Cstripbooks%2C248&ref=nb_sb_ss_ts-doa-p_1_14",
    category_id: "2",
    img_url: "https://pictures.abebooks.com/isbn/9781534413504-us.jpg",
  },
  {
    book_name: "Treasure Island",
    author_name: "Robert Louis Stevenson",
    book_url: "https://www.hoopladigital.com/title/12638617",
    category_id: "3",
    img_url: "https://images-na.ssl-images-amazon.com/images/I/510rbQ0DfEL._SX331_BO1,204,203,200_.jpg",
  },
  {
    book_name: "Life of Pi",
    author_name: "Yann Martel",
    book_url: "https://www.hoopladigital.com/title/13919129",
    category_id: "3",
    img_url: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9101/9781910173206.jpg",
  },
  {
    book_name: "And Then There Were None",
    author_name: "Agatha Christie",
    book_url: "https://www.amazon.com/Then-There-Were-None/dp/0062073486",
    category_id: "4",
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51MlxNgCsyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    book_name: "The Big Sleep",
    author_name: "Raymond Chandler",
    book_url: "https://www.hoopladigital.com/title/12679300",
    category_id: "4",
    img_url: "https://productimages.worldofbooks.com/0241956285.jpg",
  },
  {
    book_name: "The Great Gatsby",
    author_name: "F. Scott Fitzgerald",
    book_url: "https://www.hoopladigital.com/title/13810718",
    category_id: "5",
    img_url: "https://images-na.ssl-images-amazon.com/images/I/515Ra7ttqIL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    book_name: "To Kill a Mockingbird",
    author_name: "Harper Lee",
    book_url: "https://www.hoopladigital.com/title/13326642",
    category_id: "5",
    img_url: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg",
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
