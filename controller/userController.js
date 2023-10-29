//@desc Get all users
//route GET /api/users
//@access public
const getUsers = (req, res) => {
    res.status(200).json({message: "Get all users"});
};

//@desc Create new users
//route POST /api/users
//@access public
const createUser = (req, res) => {
    console.log("Request body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400).json({message: "All fields are mandatory"});
    }
    res.status(201).json({message: "Create user"});
};

//@desc Get user
//route POST /api/users/:id
//@access public
const getUser = (req, res) => {
    res.status(200).json({message: `Get user for ${req.params.id}`});
};

//@desc Update user
//route PUT /api/users/:id
//@access public
const updateUser = (req, res) => {
    res.status(200).json({message: `Update user for ${req.params.id}`});
};

//@desc Delete user
//route DELETE /api/users/:id
//@access public
const deleteUser = (req, res) => {
    res.status(200).json({message: `Delete user for ${req.params.id}`});
};

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};