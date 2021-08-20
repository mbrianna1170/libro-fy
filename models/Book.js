// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Book extends Model {}

// set up fields and rules for Product model
Book.init(
  {
    // define id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define produce name column
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true 
      }
    },
    author_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_url:{
      type: DataTypes.STRING,
      defaultValue: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
      allowNull: false,
      validate: {
        isURL: true
      },
    },
    book_url: {
      type: DataTypes.STRING,
      defaultValue: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
      allowNull: false,
      validate: {
        isURL: true
      },
    },
    // references id from category model
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id"
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "books",
  }
);

module.exports = Book;

