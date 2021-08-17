const { Book } = require("../models");

const bookData = [
  {
    book_name: "Goodnight Moon",
    author_name: "Margaret Wise Brown",
    book_url: "https://www.hoopladigital.com/title/12293865",
    category_id: "1",
  },
  {
    book_name: "The Little Engine that Could",
    author_name: "Watty Piper",
    book_url: "https://www.hoopladigital.com/title/12193985",
    category_id: "1",
  },
  {
    book_name: "Dragonflight",
    author_name: "Anne McCaffrey",
    book_url:
      "https://www.amazon.com/Dragonflight-Dragonriders-Pern-Anne-McCaffrey/dp/0345335465",
    category_id: "2",
  },
  {
    book_name: "Trail of Lightning",
    author_name: "Rebecca Roanhorse",
    book_url:
      "https://www.amazon.com/s?k=trail+of+lightning+by+rebecca+roanhorse&i=stripbooks&crid=3FRI0RLR85Z8D&sprefix=Trail+of+Light%2Cstripbooks%2C248&ref=nb_sb_ss_ts-doa-p_1_14",
    category_id: "2",
  },
  {
    book_name: "Treasure Island",
    author_name: "Robert Louis Stevenson",
    book_url: "https://www.hoopladigital.com/title/12638617",
    category_id: "3",
  },
  {
    book_name: "Life of Pi",
    author_name: "Yann Martel",
    book_url: "https://www.hoopladigital.com/title/13919129",
    category_id: "3",
  },
  {
    book_name: "And Then There Were None",
    author_name: "Agatha Christie",
    book_url: "https://www.amazon.com/Then-There-Were-None/dp/0062073486",
    category_id: "4",
  },
  {
    book_name: "The Big Sleep",
    author_name: "Raymond Chandler",
    book_url: "https://www.hoopladigital.com/title/12679300",
    category_id: "4",
  },
  {
    book_name: "The Great Gatsby",
    author_name: "F. Scott Fitzgerald",
    book_url: "https://www.hoopladigital.com/title/13810718",
    category_id: "5",
  },
  {
    book_name: "To Kill a Mockingbird",
    author_name: "Harper Lee",
    book_url: "https://www.hoopladigital.com/title/13326642",
    category_id: "5",
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
