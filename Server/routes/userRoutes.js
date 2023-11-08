const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    res.json({ message: "User Registered" });
});

router.post("/login", (req, res) => {
    res.json({ message: "User Logged In" });
});

router.post("/profile", (req, res) => {
    res.json({ message: "User Profile" });
});

module.exports = router;