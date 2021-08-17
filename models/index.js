const User = require("./User");
const Comment = require("./Comment");
const Book = require('./Book');
const Category = require('./Category');

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

module.exports = { User, Comment, Book, Category };

