const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// all user posts from dasboard
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes:[
      'id',
      'title',
      'created_at',
      'post_content'
    ],
     include: [ 
      {
      model: User,
      attributes: ['username'],
      },
    
    {
      model: Comment,
      attributes: ['id',
      'title',
      'created_at',
      'post_content', 'user_id'],
      include: {
      model: User,
      attributes: ['username'],
      },
     },
    ],
  })
  .then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain:true }));
    res.render('all-posts-admin', { 
      layout: 'dashboard',
       posts, 
       loggedIn: true, 
       username: req.session.username});
  })
  .catch((err) => {
    console.log (error);
    res.redirect('login');
  });
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

// edit one post
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes:[
      'id',
      'title',
      'created_at',
      'post_content'
    ],
    include: [
      {
        model: Comment,
        attributes: [
        'id',
        'title',
        'created_at',
        'post_content', 
        'user_id'],
        include: {
        model: User,
        attributes: ['username'],
      },
    },
      {
        model: User,
        attributes: ['username'], 
      },
  
    ],
  
  })
  .then((dbPostData) => {  
    if(!dbPostData) {
      res.status(404).json({ message: 'No post found with id!' });
      return;
    }
    const post = dbPostData.get({ plain: true });
    res.render('edit-post', { 
      layout: 'dashboard',
      posts,
      loggedIn: true, username: req.session.username });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});
  // new post
  router.get('/new', withAuth, (req, res) => {
    res.render('new-post', { username: req.session.username });
  });

  module.exports = router;