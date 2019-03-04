const Post = require("../models/Post");
const validatePostInput = require("../validation/postValidation");

exports.createPost = (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user._id
  });

  newPost.save().then(post => res.json(post));
};
