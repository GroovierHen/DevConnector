const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/usersAuth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connection to DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected sucessfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server is running on PORT ${port}`));
