const { writeFile } = require("fs");
const data = require("../db/db.json");
const { log } = require("console");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.json(data);
});

router.post("/notes", ({ body }, res) => {
  data.push(body);

  writeFile("./db/db.json", JSON.stringify(data), err => {
    if (err) return console.log(err);
    res.json(data);
  });
});

module.exports = router;
