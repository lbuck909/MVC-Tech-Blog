const { Model, Datatypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
// create the Comment Model
class Comment extends Model{}

//create sections & columns 

Comment.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id:{
      type: Datatypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      }, 
    },
    user_id:{
      type: Datatypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }, 
    },
    comment_text: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len:[4]
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
