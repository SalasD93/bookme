const sequelize = require("../config/connection");
// Add other required models to this existing const
const { BookClub } = require("../models");

// Add dummyData
const bookclubdata = [
  {
    name: "Andalax",
    genre: "Comedy|Drama",
    description: "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
    owner_id: 1,
  },
  {
    name: "Bytecard",
    genre: "Documentary|Sci-Fi",
    description: "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend",
    owner_id: 2,
  },
  {
    name: "Asoka",
    genre: "Action|Drama|Horror|Sci-Fi|Thriller",
    description:
      "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus",
    owner_id: 3,
  },
  {
    name: "Sub-Ex",
    genre: "Action|Adventure",
    description: "convallis morbi odio odio elementum eu interdum eu tincidunt in",
    owner_id: 4,
  },
  {
    name: "Zoolab",
    genre: "Documentary",
    description:
      "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
    owner_id: 5,
  },
];

// Need User.bulkcreate method
const seedBookClubs = () => BookClub.bulkCreate(bookclubdata);

module.exports = seedBookClubs;
