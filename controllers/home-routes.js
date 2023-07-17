const router = require('express').Router();
const {Post, User, Comment} = require('../models');
// const withAuth = require('../utils/auth');
// const sequelize = require('../config/connection');

//get all posts from homepage

router.get('/', (req, res) =>

{
    Post.findAll(
      {
      attributes:[
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model:Comment,
          attributes: ['id', 'post_id',  'user_id', 'created_at'],
        },
        {
        model: User,
        attributes: ['username']
        }
      ]
       //all posts and user data
    })
    
    .then(dbPostData => {
       const posts = dbPostData.map(post=> post.get({ plain: true}));
      console.log(posts);
      res.render('homepage', {
        
        posts, loggedIn: req.session.loggedIn
        
      });
    })
  .catch(err => {
    res.status(500).json(err);
  });
  })


// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes:[
      'id',
      'title',
      'created_at',
      'post_content'
    ],
    include: [
      {
        model:Comment,
        attributes: ['id', 'post_id', 'user_id', 'created_at'],
      },
      {
      model: User,
      attributes: ['username']
      }
    ]
     //all posts and user data
  })
  .then(dbPostData => {
    const userPosts = dbPostData.map(post=> post.get({ plain: true}));
    res.render('homepage', {
      posts, loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    res.status(500).json(err);
  });
});





//get login 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;