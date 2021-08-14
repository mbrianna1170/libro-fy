const User = require("./User");
const Comment = require("./Comment");


Comment.belongsTo(User, {
  foreignKey: "user_id",
});

//Comment.belongsTo(Post, {
 // foreignKey: "post_id",
//});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
// });

module.exports = { User, Comment };
