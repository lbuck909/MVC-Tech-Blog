const { Post } = require('../models');

const postSeed = [
  {
    "user_id": 1,
    "title": "Toddlers that lift weights",
    "post_content": "Studies how that toddlers who lift weights 3 days a week eat more broccoli than their no lifting counterparts."
  },
  {
    "user_id": 2,
    "title": "Vegan Cheese, why bother?!",
    "post_content": "Most vegans enjoy nutritional yeast to add a slighty cheesey flavor to most foods. The artifical cheese slices taste like plastic most days."
  },
  {
    "user_id": 3,
    "title": "Where in the world is Waldo?",
    "post_content": "The icon is on his fifth marriage. He plans to start a podcast on successful marriage tips"
  },
  {
    "user_id": 4,
    "title": "Fake meat is coming to a takeout near you",
    "post_content": " Processed foods have been around for decades, should we even be shocked at this point?"
  },
  {
    "user_id": 5,
    "title": "Population control sponosred by Bill Gates",
    "post_content": "Gates gave a TED talk on reducing the population. We will never know how true this is until we cannot find our friends anymore"
  },
  {
    "user_id": 6,
    "title": "The last 20 pounds",
    "post_content": "I've lost 20 pounds at least five times in my life. Does that count as me losing 100 pounds?"
  },
  {
    "user_id": 7,
    "title": "Dad jokes or dad bods?",
    "post_content": " Both can spice up the carpool line! "
  }
]

const postSeeds = () => Post.bulkCreate(postSeed);

module.exports = postSeeds;