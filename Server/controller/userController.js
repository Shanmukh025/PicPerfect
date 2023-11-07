const asynchandler = require("express-async-handler");
const Users = require("../models/userModels");
//@desc Get all users
//route GET /users
//@access public
const getUsers = asynchandler (async (req, res) => {
    const users = await Users.find();
    res.status(200).json(users);
});

//@desc Create new users
//route POST /users
//@access public
const createUser = asynchandler (async (req, res) => {
    const { fullname, username, email, phone, password } = req.body;
    if (!fullname || !username || !email || !phone || !password ) {
        res.status(400).json({ error: "All fields are mandatory!" });
        return;
    }
    const user = await Users.create({
        fullname, username, email, phone, password
    });
    res.status(201).json(user);
});

//@desc Get user
//route POST /users/:id
//@access public
const getUser = asynchandler (async (req, res) => {
    const user = await Users.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not found");
    }

    res.status(200).json(user);
});

//@desc Update user
//route PUT /users/:id
//@access public
const updateUser = asynchandler (async (req, res) => {
    const user = await Users.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not found");
    }

    const updateduser = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json(updateduser);
});

//@desc Delete user
//route DELETE /users/:id
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
