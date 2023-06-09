const sequelize = require('../config/connection');

const seedUsers=require('./userData');
const seedBlogs=require('./blogData');
const seedComments=require('./commentData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedBlogs();
  await seedComments();

  
  process.exit(0);
};

seedDatabase();
