// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

let posts = [];
let currentId = 1;

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required." });
  }

  const newPost = {
    id: currentId++,
    title,
    content,
    createdAt: req.requestTime,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found." });
  }

  res.json(post);
});

app.put("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found." });
  }

  const { title, content } = req.body;

  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  posts = posts.filter((p) => p.id !== postId);

  res.status(204).send();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
