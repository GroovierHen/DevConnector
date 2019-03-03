const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/usersAuth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connection to DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected sucessfully"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

app.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server is running on PORT ${port}`));
