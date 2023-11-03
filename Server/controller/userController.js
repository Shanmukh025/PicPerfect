const asynchandler = require("express-async-handler");
//@desc Get all users
//route GET /api/users
//@access public
const getUsers = asynchandler (async (req, res) => {
    res.status(200).json({message: "Get all users"});
});

//@desc Create new users
//route POST /api/users
//@access public
const createUser = asynchandler (async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400).json({ error: "All fields are mandatory." });
        return;
    }
    else {
        console.log("Request body is: ", req.body);
    }
    res.status(201).json({ message: "Create user" });
});

//@desc Get user
//route POST /api/users/:id
//@access public
const getUser = asynchandler (async (req, res) => {
    res.status(200).json({message: `Get user for ${req.params.id}`});
});

//@desc Update user
//route PUT /api/users/:id
//@access public
const updateUser = asynchandler (async (req, res) => {
    res.status(200).json({message: `Update user for ${req.params.id}`});
});

//@desc Delete user
//route DELETE /api/users/:id
//@access public
const deleteUser = asynchandler (async (req, res) => {
    res.status(200).json({message: `Delete user for ${req.params.id}`});
});

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
