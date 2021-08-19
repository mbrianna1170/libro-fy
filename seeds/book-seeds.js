const { Book } = require("../models");

const bookData = [
  {
    book_name: "Goodnight Moon",
    author_name: "Margaret Wise Brown",
    book_url: "https://www.hoopladigital.com/title/12293865",
    category_id: "1",
    avatar_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_920d7619-524e-4d7f-a8e8-20242dd1a022%3Fwid%3D488%26hei%3D488%26fmt%3Dpjpeg&imgrefurl=https%3A%2F%2Fwww.target.com%2Fp%2Fgoodnight-moon-reissue-by-margaret-wise-brown-board-book%2F-%2FA-11340485&tbnid=8mAYUFX-4IheRM&vet=12ahUKEwiMi4vt1r3yAhXui60KHbKrC68QMygAegUIARCXAg..i&docid=go_-rPe6K0ih0M&w=488&h=488&q=goodnight%20moon&ved=2ahUKEwiMi4vt1r3yAhXui60KHbKrC68QMygAegUIARCXAg",
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
