const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const sequelize = require('../config/connection');

//get all posts from homepage

router.get('/', async (req, res) =>
{
  try {
    //all posts and user data
    res.render('homepage');
  
  }
  catch (err) {
    res.status(500).json(err);
  }
    })


// get single post

//get login 