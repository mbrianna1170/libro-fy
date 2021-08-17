//link seed files
const seedCategories = require("./category-seeds");
const seedBooks = require("./book-seeds");
const seedUsers = require("./user-seeds");
const seedComments = require("./comment-seeds");
const seedVotes = require("./vote-seeds");

const sequelize = require("../config/connection");
//connections
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedBooks();
  console.log("\n----- BOOKS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedComments();
  console.log("\n-----  COMMENTS SEEDED -----\n");

  await seedVotes();
  console.log("\n----- VOTES SEEDED -----\n");

  process.exit(0);
};

//call all seeds
seedAll();
