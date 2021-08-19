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
});

module.exports = router;
