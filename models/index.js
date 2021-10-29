const User = require('./User');
// Add other required models here
const Post = require("./Post");
const Comment = require("./Comment");
const Book = require("./Book");
const Location = require("./Location");

// Add associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// ------------------------

User.hasOne(Location, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Location.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// ------------------------

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// ------------------------

User.hasMany(Book, {
  foreignKey: "user_id",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});


// Add other models to export
module.exports = { User, Post, Book, Comment, Location };