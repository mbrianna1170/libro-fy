const router = require("express").Router();

const { Book, Category, Vote, User, Comment} = require("../../models");

router.get("/", (req, res) => {
  Book.findAll({
    attribute: [
      "id",
      "book_name",
      "author_name",
      "book_url",

      // [
      //   sequelize.literal(
      //     "(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"
      //   ),
      //   "vote_count",
      // ],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one book by its `id` value
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "book_name",
      "author_name",
      "book_url",
    ],
    include: [
      // {
      //   model: Comment,
      //   attributes: ['id', 'comment_text', 'book_id', 'user_id', 'created_at'],
      //   include: {
      //     model: User,
      //     attributes: ['username']
      //   }
      // },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No book found with this id." });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new book
  Book.create({
    book_name: req.body.book_name,
    author_name: req.body.author_name,
    img_url: req.body.img_url,
    book_url: req.body.book_url,
    category_id: req.body.category_id,
    user_id: req.body.user_id,
  })
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT/api/book/upvote
// router.put('/upvote', (req, res) => {
//   // custom static method created in models/Book.js
//   Book.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
//     .then(updatedVoteData => res.json(updatedVoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.put('/upvote', (req, res) => { 
  Vote.create({
    user_id: req.body.user_id,
    book_id: req.body.book_id
  })
    .then(dbBooktData => res.json(dbBookData))
    .catch(err => res.json(err));
});

router.put("/:id", (req, res) => {
  // update a book by its `id` value
  Book.update(
    {
      book_name: req.body.book_name
    },
    {
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookData) => {
      if (!dbBookData[0]) {
        res.status(404).json({ message: "No book found with this id." });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No book found with this id." });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
