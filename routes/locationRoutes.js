const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

// GET all locations
router.get("/", async (req, res) => {
  try {
    const data = await Location.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD new location
router.post("/", async (req, res) => {
  try {
    const newLoc = new Location(req.body);
    const saved = await newLoc.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;