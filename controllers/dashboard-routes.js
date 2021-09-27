const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote, Book, BookClub, BookClubMember, Location } = require("../models");
const withAuth = require("../utils/auth");

// get all user info for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.session.user_id
    },
    include: [{
      model: Post,
      attributes: ["id", "book_name", "book_author", "price", "content", "created_at"]
    }]
  }).then((dbUserData) => {
    const user = dbUserData.get({ plain: true });
    res.render('dashboard', { user , loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get("/:id", withAuth, (req, res) => {
  console.log("======================");
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ["id", "title", "book_name", "book_author", "price", "content", "created_at"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Post,
          attributes: ["book_name"],
        },
      },
      {
        model: Book,
        attributes: ["title"],
        through: Vote,
        as: "voted_books",
      },
      {
        model: Book,
        attributes: ["id", "title", "author", "created_at"],
      },
      {
        model: BookClub,
        as: "started_clubs",
        attributes: ["name", "genre", "description", "owner_id"],
      },
      {
        model: BookClub,
        attributes: ["name", "owner_id"],
        as: "joined_clubs",
        through: BookClubMember,
      },
    ],
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.render(dbUserData);
  });
});

router.get("/edit/books/:id", withAuth, (req, res) => {
  Book.findByPk(req.params.id, {
    attributes: [
      "title",
      "author",
      "price",
      "created_at",
      [(sequelize.literal("(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"), "vote_count")],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBookData) => {
      if (dbBookData) {
        const book = dbBookData.get({ plain: true });

        res.render("edit-book", {
          book,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/edit/books/:id", withAuth, (req, res) => {
  Book.findByPk(req.params.id, {
    attributes: [
      "title",
      "author",
      "price",
      "created_at",
      [(sequelize.literal("(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"), "vote_count")],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBookData) => {
      if (dbBookData) {
        const book = dbBookData.get({ plain: true });

        res.render("edit-book", {
          book,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/edit/posts/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ["id", "book_name", "book_author", "price", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/edit/bookclubs/:id", withAuth, (req, res) => {
  BookClub.findByPk(req.params.id, {
    attributes: ["name", "genre", "description", "owner_id"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBookClubData) => {
      if (dbBookClubData) {
        const bookclub = dbBookClubData.get({ plain: true });

        res.render("edit-bookclub", {
          bookclub,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
