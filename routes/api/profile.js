const express = require("express");
const passport = require("passport");

require("../../config/passport")(passport);
const profileController = require("../../controllers/profile");

const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.getProfile
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.postProfile
);

module.exports = router;
