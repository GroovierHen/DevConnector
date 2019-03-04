const express = require("express");
const passport = require("passport");

require("../../config/passport")(passport);
const postControllers = require("../../controllers/posts");

const router = express.Router();

// create Post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postControllers.createPost
);

module.exports = router;
