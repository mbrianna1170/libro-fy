const router = require("express").Router();
const { Book, Category } = require('../../models');

router.get("/", (req, res) => {
  Book.findall({
    attribute: ["id", "book_name"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
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
  // find one category by its `id` value
  // be sure to include its associated Products
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "book_name"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No category found with this id" });
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
  // create a new category
  Book.create({
    book_name: req.body.category_name,
  })
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Book.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookData) => {
      if (!dbBookData[0]) {
        res.status(404).json({ message: "No Category found" });
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
        res.status(404).json({ message: "No Category found" });
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
