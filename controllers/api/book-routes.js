const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Book, Vote } = require("../../models");
const withAuth = require("../../utils/auth");

// get all books
router.get("/", (req, res) => {
  console.log("======================");
  Book.findAll({
    attributes: [
      "id",
      "title",
      "author",
      "created_at",
      [sequelize.literal("(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"), "vote_count"],
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
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log('======================');
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "author",
      "created_at",
      [sequelize.literal("(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"), "vote_count"],
    ],
    include: [
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
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects: {"author", "price", "user_id"},
  console.log('======================');
  Book.create({
    title: req.body.title,
    author: req.body.author,
    user_id: req.session.user_id,
  })
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// commented out incase needed later
router.put("/upvote", withAuth, (req, res) => {
  // custom static method created in models/Book.js
  console.log('======================');
  Book.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then((updatedVoteData) => res.json(updatedVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  console.log('======================');
  Book.update(
    {
      title: req.body.title,
      author: req.body.author,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No book found with this id" });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log('======================');
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No book found with this id" });
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
