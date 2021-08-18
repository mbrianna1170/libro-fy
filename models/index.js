const User = require("./User");
//const Comment = require("./Comment");
const Book = require('./Book');
// const Category = require('./Category');
// const Vote = require('./Vote')


//user can have many books but a book cannot have many users
User.hasMany(Book, {
  foreignKey: "user_id",
});

//Book belongs to one user but not many users
Book.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Book, };

