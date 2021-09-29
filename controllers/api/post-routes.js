const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Post, Book, BookClub, BookClubMember, Vote } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "book_name", "book_author", "price", "content", "user_id", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      // {
      //   model: Comment,
      //   attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      //   include: {
      //     model: User,
      //     attributes: ["username"],
      //   },
      // },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log('=====================');
  Post.findOne({
    where: {
      id: req.params.user_id,
    },
    attributes: ["id", "book_name", "book_author", "price", "content", "user_id", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      // {
      //   model: Comment,
      //   attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      //   include: {
      //     model: User,
      //     attributes: ["username"],
      //   },
      // },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects { "book_name", "book_author", "price", "content", "user_id"}
  Post.create({
    book_name: req.body.book_name,
    book_author: req.body.book_author,
    price: req.body.price,
    content: req.body.content,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  console.log('=====================');
  Post.update(
    {
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      price: req.body.price,
      content: req.body.content,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log('=====================');
  console.log("id", req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
