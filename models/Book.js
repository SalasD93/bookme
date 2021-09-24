const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create user model
class Book extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      book_id: body.book_id,
    }).then(() => {
      return Book.findOne({
        where: {
          id: body.book_id,
        },
        attributes: [
          "id",
          "title",
          "author",
          "content",
          "review",
          "created_at",
          [sequelize.literal("(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"), "vote_count"],
        ],
      });
    });
  }
}

// Create fields and columns for User model here
Book.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "book",
  }
);

module.exports = Book;
