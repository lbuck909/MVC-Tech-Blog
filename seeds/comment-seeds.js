const { Comment } = require('../models');

const commentSeeds = [
  {
    user_id: 1,
    post_id: 7,
    comment_text: "Great perspective on the subject"
  },
  {
    user_id: 2,
    post_id: 5,
    comment_text: "You appear to be a subject matter expert"
  },
  {
    user_id: 3,
    post_id: 1,
    comment_text: "Where could I find more information?"
  },
  {
    user_id: 4,
    post_id: 2,
    comment_text: "I do not agree at all. I'm offended by your remarks"
  },
  {
    user_id:4, 
    post_id: 1,
    comment_text: "Nice job stating the obvious"
  },
  {
    user_id: 3,
    post_id: 3,
    comment_text: "Very well written"
  },
  {
    user_id: 2,
    post_id: 7,
    comment_text: "I agree with you!"
  },
]
const commentSeedData = () => Comment.bulkCreate(commentData);

module.exports = commentSeedData;