const User = require("./User");
// const Comment = require("./Comment");
const Book = require("./Book");
// const Category = require('./Category');
const Vote = require("./Vote");

// //user can have many books but a book cannot have many users
User.hasMany(Book, {
  foreignKey: "user_id",
});

// //Book belongs to one user but not many users
Book.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Book, {
  through: Vote,
  foreignKey: "user_id",
});

Book.belongsToMany(User, {
  through: Vote,
  foreignKey: "book_id",
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Book, {
  foreignKey: "book_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Book.hasMany(Vote, {
  foreignKey: "book_id",
});


// User.hasMany(Comment, {
//   foreignKey: 'user_id',
// });

// Comment.belongsTo(User, {
//   foreignKey
// })
module.exports = { User, Book, Vote };
