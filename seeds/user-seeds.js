const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "beetlejuice",
    email: "sayitthreetimes@abc.com",
    password: "password123",
  },
  {
    username: "jaywrongway",
    email: "whichway02@sogou.com",
    password: "password123",
  },
  {
    username: "somewhere2",
    email: "overtherainbow@last.fm",
    password: "password123",
  },
  {
    username: "justtan3",
    email: "atthebeach@goo.io",
    password: "password123",
  },
  {
    username: "djira23",
    email: "getmethere44@weather.com",
    password: "password123",
  },
  {
    username: "breaktime5",
    email: "wattimeitis25@imdb.com",
    password: "password123",
  },
  {
    username: "shorthun23",
    email: "fitunderyourarm2@feedburner.com",
    password: "password123",
  },
  {
    username: "tpenniesll7",
    email: "goto22@china.com.cn",
    password: "password123",
  },
  {
    username: "bloddymary8",
    email: "drinkorstory8@google.ru",
    password: "password123",
  },
  {
    username: "jmacarthur99",
    email: "ontheupside9@epa.gov",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
