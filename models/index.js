const User = require('./User');
// Add other required models here
const Post = require("./Post");
const Vote = require("./Vote");
const Comment = require("./Comment");
const Book = require("./Book");
const BookClub = require("./BookClub");
const BookClubMember = require("./BookClubMember");
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

User.belongsToMany(Book, {
  through: Vote,
  as: "voted_books",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Book.belongsToMany(User, {
  through: Vote,
  as: "voted_books",
  foreignKey: "book_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(Book, {
  foreignKey: "book_id",
  onDelete: "SET NULL",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Book.hasMany(Vote, {
  foreignKey: "book_id",
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

// ------------------------

User.belongsToMany(BookClub, {
  through: BookClubMember,
  as: "joined_clubs",

  foreignKey: "user_id",
});

User.hasOne(BookClub, {
  foreignKey: "owner_id",
  as: "started_clubs",
});

// ------------------------

BookClub.belongsToMany(User, {
  through: BookClubMember,
  as: "members",

  foreignKey: "bookclub_id",
  onDelete: "SET NULL",
});

BookClub.belongsTo(User, {
  as: "owner",
  
  foreignKey: "owner_id",
  onDelete: "SET NULL",
});

// Add other models to export
module.exports = { User, Post, Book, BookClub, BookClubMember, Vote, Comment, Location };