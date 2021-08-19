const router = require("express").Router();
const sequelize = require("../config/connection");
const { Book, Category } = require("../models");

// what users will see on homepage
router.get("/", (req, res) => {
  Book.findAll({
    attribute: ["id", "book_name", "author_name", "book_url"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbBookData) => {
      // pass a single book object into the homepage template
      const books = dbBookData.map((book) => book.get({ plain: true }));
      res.render("homepage", { books });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// will direct to login and sign-up page
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
