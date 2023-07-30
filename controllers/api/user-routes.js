const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// New user info created
router.get('/', async(req, res)=> {
  const user = await User.findAll()
  res.json(user)
})

router.post('/', async (req, res) =>{
  try{
    console.log(req.body)
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
router.post('/login', (req, res) =>{
  User.findOne({
    where: {
      username: req.body.username,
    },

  }).then((newUser) =>{
    if(!newUser) {
      res.status(400).json({ message: 'Id not found!' });
      return;
    }
    //check the given password & sent message if user is wrong
    const correctPassword = newUser.checkPassword(req.body.password);
    // if(!correctPassword) {
      if(newUser.password=== req.body.password){
      res.status(400).json({ message: 'Incorrect Password!' });
      return;
      // add the save session to update the app
    }
    req.session.loggedIn = true;
      req.session.username = newUser.username;
      req.session.user_id = newUser.id
    req.session.save(() =>{
      
      res.json({ user: newUser, message: 'Successfully logged in!' });
    });
  });
});

//logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




module.exports = router;