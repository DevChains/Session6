"use strict";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const middleware = (req, res, next) => {
  console.log(`${req.method} ${req.url} was called`);
  next();
};

app.use(middleware);

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.json(body);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
