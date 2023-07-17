const commentSeeds = require ('./comment-seeds');
const userSeeds = require ('./user-seeds');
const postSeeds = require ('./post-seeds');
const sequelize = require ('../config/connection');

const allSeeds = async() => {
  await sequelize.sync({ force: true });
  
  await userSeeds();

  await postSeeds();

  await commentSeeds();



  process.exit(0);
};

allSeeds();
