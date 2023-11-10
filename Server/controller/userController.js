const asynchandler = require("express-async-handler");

//@desc Register a user
//@route POST /user/login
//@access public
const registerUser = asynchandler(async (req, res) => {
    res.json({ message: "Register the user" });
});

//@desc Login user
//@route POST/user/login
//@access public
const loginUser = asynchandler(async (req, res) => {
    res.json({ message: "login user" });
});

//@desc Current user info
//@route POST /api/user/current
//@access private
const userProfile = asynchandler(async (req, res) => {
    res.json({ message: "current user" });
});

module.exports = { registerUser, loginUser, userProfile };
