const User = require("./User");
const Comment = require("./Comment");
const Book = require("./Book");
const Category = require('./Category');
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

Category.hasMany(Book, {
  foreignKey: "category_id"
});

Book.belongsTo(Category, {
  foreignKey: "book_id"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Book, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Book.hasMany(Comment, {
  foreignKey: 'post_id'
});


module.exports = { User, Book, Vote, Category, Comment };
