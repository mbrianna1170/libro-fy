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
<<<<<<< HEAD
router.get("/login", (req, res) => {
  res.render("login");
});

// for signle-post
router.get("/post/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "book_name",
      "author_name",
      "book_url",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
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
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No book found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render("single-post", { post });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
=======
// router.get('/login', (req, res) => {
//   res.render('login');
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
>>>>>>> c4fb2bbf5b2ae2f2c6da2c1216e0674ed1038ad2
});

module.exports = router;
