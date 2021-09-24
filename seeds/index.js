const seedUsers = require("./user-seeds.js");
const seedPosts = require("./post-seeds.js");
const seedComments = require("./comment-seeds");
const seedBooks = require("./book-seeds.js");
const seedVotes = require("./vote-seeds");
const seedBookClubs = require("./bookclub-seeds.js");
const seedBookClubMembers = require("./bookclubmember-seeds.js");
const seedLocation = require("./location-seeds.js");

const sequelize = require("../config/connection");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("\n--------------\n");

    await seedUsers();
    console.log("\n--------------\n");

    await seedBooks();
    console.log("\n--------------\n");

    await seedPosts();
    console.log("\n--------------\n");

    await seedComments();
    console.log("--------------");

    await seedVotes();
    console.log("--------------");

    await seedBookClubs();
    console.log("\n--------------\n");

    await seedBookClubMembers();
    console.log("\n--------------\n");

    await seedLocation();
    console.log("\n--------------\n");

    process.exit(0);
  } catch (err) {
    console.log("\n--------------\n");
    console.log(err);
  }
};

seedAll();
