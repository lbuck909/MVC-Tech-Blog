const router = require('express').Router();
//const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) =>{
  const commentBody = req.body;

  try{
    const newComment = await Post.create({
      ...commentBody,
      user_id: req.session.user_id,

    });

    res.json(newComment);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [newPost] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (newPost > 0) {
      res.status(200).json({ message: "Post updated successfully." });
    } else if (newPost === 0) {
      res.status(404).json({ message: "There is no post with this id!" });
    } else {
      res.status(500).json({ message: "An error has occurred while trying to update this post!"});
    }
    } catch (err) {
      res.status(500).json({ message: "An error has occurred with the post!"})
    }
       
});

router.delete('/:id', withAuth, async (req, res) => {
try{
  const deletedPost = await Post. destroy({ where: { id : req.params.id}});
  res.status(200).json(deletedPost)
}catch (err){
  res.status(500).json(err);
}
})

module.exports = router;