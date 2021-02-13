const express = require("express");
const app = express();
const path = require("path");
const data = require("./data.json");
const fs = require("fs");
const methodOverride = require('method-override');
const { v4: uuid } = require("uuid");

// accept data sent from x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// accept data as application/json
app.use(express.json());
app.use(methodOverride('_method'));
app.set("views", path.join(__dirname, "views"));
// use ejs templating
app.set("view engine", "ejs");

const read = () => {
  let file = fs.readFileSync("./data.json");
  return JSON.parse(file);
};

const write = (username, comment) => {
  let file = read();
  file.comments.push({ id: uuid(), username: username, comment: comment });
  fs.writeFileSync("./data.json", JSON.stringify(file));
};

const update = (id, comment) => {
  let file = read();
  const commentItem = file.comments.find((item) => item.id === id);
  commentItem.comment = comment;
  fs.writeFileSync("./data.json", JSON.stringify(file));
};

const remove = (id) => {
  let file = read();
  const newRecords = file.comments.filter(comment => comment.id !== id);
  file = new Object;
  file.comments = newRecords;
  fs.writeFileSync("./data.json", JSON.stringify(file));
};

// lists all comments
app.get("/comments", (req, res) => {
  const data = read();
  res.render("comments/index", { data });
});

// get form
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

// creates new comment
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  write(username, comment);
  res.redirect("/comments");
});

// view a comment
app.get("/comments/:id", (req, res) => {
  const data = read();
  const { id } = req.params;
  const comment = data.comments.find((item) => item.id === id);
  res.render("comments/show", { comment });
});

// update a comment
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  update(id, req.body.comment);
  res.redirect("/comments");
});

// update form
app.get("/comments/:id/edit", (req, res) => {
  const data = read();
  const { id } = req.params;
  const comment = data.comments.find((item) => item.id === id);
  res.render("comments/edit", { comment });
});

// delete comment
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  remove(id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});
