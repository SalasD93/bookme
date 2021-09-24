const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create user model
class BookClub extends Model {}

// Create fields and columns for User model here
BookClub.init(
  {
    // Need to add hooks
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    owner_id: {
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
    modelName: "bookclub",
  }
);

module.exports = BookClub;
