const router = require("express").Router();
const sequelize = require("../config/connection");
const { Book, Category, User } = require("../models");

// what users will see on homepage
router.get("/", (req, res) => {
  Book.findAll({
    attributes: ["id", "book_name", "author_name", "book_url"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: User,
        attributes: ['username']
      }
    ],
  })
    .then(dbBookData => {
      // pass a single book object into the homepage template
      const books = dbBookData.map(book => book.get({ plain: true }));
      res.render("homepage", { books, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// will direct to login and sign-up page
// router.get('/login', (req, res) => {
//   res.render('login');
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
