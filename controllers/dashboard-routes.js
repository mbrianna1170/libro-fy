const router = require("express").Router();
const sequelize = require("../config/connection");
const { Book, User, Comment, Vote } = require("../models");



// router.get('/', (req, res) => {
//     res.render('dashboard', { loggedIn: true });
//   });


router.get("/", (req, res) => {
  Book.findAll({
    //   where: {
    //     // use the ID from the session
    //     user_id: req.session.user_id
    //   },
    attributes: [
      "id",
      "book_name",
      "author_name",
      "book_url",
      "img_url",
    //  [
    //     sequelize.literal(
    //       "(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"
    //     ),
    //     "vote_count",
    //   ],
    ],
    include: [
    //   {
    //     model: Comment,
    //     attributes: ["id", "comment_text", "book_id", "user_id", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBookData) => {
      // serialize data before passing to template
      const books = dbBookData.map((book) => book.get({ plain: true }));
      res.render("dashboard", { books, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
