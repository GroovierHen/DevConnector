const express = require("express");

const userAuthController = require("../../controllers/usersAuth");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "users works" });
});

router.post("/register", userAuthController.userRegister);

module.exports = router;
