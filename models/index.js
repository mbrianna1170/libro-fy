const User = require("./User");
const Comment = require("./Comment");
const Book = require('./Book');
const Category = require('./Category');
const Vote = require('./Vote')

Book.belongsTo(Category, {
  foreignKey: "category_id"
});

Category.hasMany(Book, {
  foreignKey: "category_id"
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Book.belongsToMany(User, {
  through: Vote,
  // as: 'voted_posts',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: "user_id"
});

module.exports = { User, Comment, Book, Category, Vote};

