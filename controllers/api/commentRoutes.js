const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment } = require('../../models');
const withAuth = require('../utils/auth');

router.post('/:id', async (req, res) => {
  try{
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.id
    });
    res.json({newComment})
  }catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;