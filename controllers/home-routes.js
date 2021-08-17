const router = require("express").Router();
const sequelize = require("../config/connection");
const { Book, Category } = require("../models");

router.get("/", (req, res) => {
  Book.findAll({
    attribute: ["id", "book_name"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
