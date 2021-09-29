const sequelize = require("../config/connection");
// Add other required models to this existing const
const { BookClubMember } = require("../models");

// Book club member seeds
const bookclubmemberdata = [
  {
    bookclub_id: 5,
    user_id: 6,
  },
  {
    bookclub_id: 2,
    user_id: 7,
  },
  {
    bookclub_id: 1,
    user_id: 8,
  },
  {
    bookclub_id: 5,
    user_id: 9,
  },
  {
    bookclub_id: 1,
    user_id: 10,
  },
  {
    bookclub_id: 4,
    user_id: 11,
  },
  {
    bookclub_id: 1,
    user_id: 12,
  },
  {
    bookclub_id: 5,
    user_id: 13,
  },
  {
    bookclub_id: 1,
    user_id: 14,
  },
  {
    bookclub_id: 2,
    user_id: 15,
  },
  {
    bookclub_id: 2,
    user_id: 16,
  },
  {
    bookclub_id: 4,
    user_id: 17,
  },
  {
    bookclub_id: 4,
    user_id: 18,
  },
  {
    bookclub_id: 2,
    user_id: 19,
  },
  {
    bookclub_id: 4,
    user_id: 20,
  },
];

// Need User.bulkcreate method
const seedBookClubMembers = () => BookClubMember.bulkCreate(bookclubmemberdata);

module.exports = seedBookClubMembers;
