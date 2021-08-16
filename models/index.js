const User = require("./User");
const Comment = require("./Comment");
const Book = require('./Books');
const Category = require('./Category');

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Comment, Book, Category };

