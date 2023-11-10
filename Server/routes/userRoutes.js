const express = require("express");

const {
    loginUser,
    registerUser,
    userProfile
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", userProfile);

module.exports = router;