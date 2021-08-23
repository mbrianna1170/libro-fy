const router = require("express").Router();
const sequelize = require("../config/connection");
const { Book, Category, User, Comment } = require("../models");

// what users will see on homepage
router.get("/", (req, res) => {
  Book.findAll({
    attributes: ["id", "book_name", "author_name", "img_url", "book_url"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBookData) => {
      console.log(dbBookData);
      // pass a single book object into the homepage template
      const books = dbBookData.map((book) => book.get({ plain: true }));
      console.log(books);
      res.render("homepage", { books, loggedIn: req.session.loggedIn });
      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// will direct to login and sign-up page
router.get("/login", (req, res) => {
  res.render("login");
});

// for signle-book
router.get("/book/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "book_name",
      "author_name",
      "book_url",
      "img_url",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "book_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No book found with this id" });
        return;
      }

      // serialize the data
      const book = dbBookData.get({ plain: true });

      // pass data to template
      res.render("single-post", { book });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });


  router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }

    res.render("login");
  });
});

module.exports= router;
