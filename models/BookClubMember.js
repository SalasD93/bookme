const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create user model
class BookClubMember extends Model {}

// Create fields and columns for User model here
BookClubMember.init(
  {
    // Need to add hooks
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bookclub_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "bookclub",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "bookclubmember",
  }
);

module.exports = BookClubMember;
