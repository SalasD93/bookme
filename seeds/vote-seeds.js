const sequelize = require("../config/connection");

const { Vote } = require("../models");
// Post vote seeds
const votedata = [
  {
    user_id: 9,
    book_id: 9,
  },
  {
    user_id: 1,
    book_id: 8,
  },
  {
    user_id: 8,
    book_id: 2,
  },
  {
    user_id: 8,
    book_id: 9,
  },
  {
    user_id: 9,
    book_id: 3,
  },
  {
    user_id: 3,
    book_id: 6,
  },
  {
    user_id: 4,
    book_id: 7,
  },
  {
    user_id: 10,
    book_id: 7,
  },
  {
    user_id: 3,
    book_id: 8,
  },
  {
    user_id: 9,
    book_id: 6,
  },
  {
    user_id: 3,
    book_id: 7,
  },
  {
    user_id: 10,
    book_id: 2,
  },
  {
    user_id: 6,
    book_id: 10,
  },
  {
    user_id: 5,
    book_id: 1,
  },
  {
    user_id: 6,
    book_id: 1,
  },
  {
    user_id: 9,
    book_id: 8,
  },
  {
    user_id: 6,
    book_id: 5,
  },
  {
    user_id: 6,
    book_id: 7,
  },
  {
    user_id: 6,
    book_id: 4,
  },
  {
    user_id: 1,
    book_id: 6,
  },
  {
    user_id: 10,
    book_id: 8,
  },
  {
    user_id: 4,
    book_id: 10,
  },
  {
    user_id: 10,
    book_id: 5,
  },
  {
    user_id: 5,
    book_id: 4,
  },
  {
    user_id: 2,
    book_id: 4,
  },
  {
    user_id: 1,
    book_id: 5,
  },
  {
    user_id: 7,
    book_id: 3,
  },
  {
    user_id: 6,
    book_id: 3,
  },
  {
    user_id: 6,
    book_id: 9,
  },
  {
    user_id: 7,
    book_id: 1,
  },
  {
    user_id: 4,
    book_id: 5,
  },
  {
    user_id: 2,
    book_id: 8,
  },
  {
    user_id: 9,
    book_id: 10,
  },
  {
    user_id: 10,
    book_id: 3,
  },
  {
    user_id: 8,
    book_id: 1,
  },
  {
    user_id: 4,
    book_id: 9,
  },
  {
    user_id: 2,
    book_id: 3,
  },
  {
    user_id: 9,
    book_id: 1,
  },
  {
    user_id: 1,
    book_id: 7,
  },
  {
    user_id: 10,
    book_id: 9,
  },
  {
    user_id: 9,
    book_id: 5,
  },
  {
    user_id: 5,
    book_id: 6,
  },
  {
    user_id: 6,
    book_id: 2,
  },
  {
    user_id: 5,
    book_id: 2,
  },
  {
    user_id: 6,
    book_id: 6,
  },
  {
    user_id: 8,
    book_id: 8,
  },
  {
    user_id: 3,
    book_id: 4,
  },
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
