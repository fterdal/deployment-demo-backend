const express = require("express");
const router = express.Router();
const { Duck } = require("../database");

// GET all ducks
router.get("/", async (req, res) => {
  try {
    const ducks = await Duck.findAll();
    res.send(ducks);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
