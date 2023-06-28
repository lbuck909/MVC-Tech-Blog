const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//New user info created
router.post('/', async (req, res) =>{
  try{
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.user_id = newUser.id;
    req.session.username = newUser.username;
    req.session.loggedIn = true;

    req.session.save(() =>{
      res.json(newUser);
    });
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login 


//logout





module.exports = router;