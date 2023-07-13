const { User } = require('../models');

const userSeed = [
  {
    "username": "legend_of_zach",
    "email": "12daysofXmas@ymail.com",
    "password": "random$1"
  }, 
  
  {
    "username": "lisa_p",
    "email": "lisa.parks@pgcounty.gov",
    "password": "random$2"
  },  

  {
    "username": "bob12",
    "email": "bobbob@gmail.com",
    "password": "random$3"
  },  

  {
    "username": "itsme2",
    "email": "captinwow@gmail.com",
    "password": "random$4"
  },   

  {
    "username": "catlady",
    "email": "pigsnblankets@gmail.com",
    "password": "random$5"
  },  

  {
    "username": "jerry_s",
    "email": "happyfestivus93@gmail.com",
    "password": "random$6"
  },  

  {
    "username": "old_School75",
    "email": "old_school75@yahoo.com",
    "password": "random$7"
  },  
]

const userSeeds = () => User.bulkCreate(userSeed);
module.exports = userSeeds;