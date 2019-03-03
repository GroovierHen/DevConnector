const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Model A5Wyj6VaZ*V!56!$&j28X2zfvAQTZ6HQc
const User = require("../models/User");

const keys = require("../config/keys");

// POST Route, User Registration
exports.userRegister = (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: 200,
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: avatar
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

// POST Route, User Login
exports.userLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user._id,
          name: user.name,
          avatar: user.avatar
        };
        jwt.sign(payload, keys.secretOrKey, (err, token) => {
          res.json({ success: true, token: `Bearer ${token}` });
        });
      } else {
        return res.status(400).json({ error: "Password incorrect" });
      }
    });
  });
};
