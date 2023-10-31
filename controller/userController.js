//@desc Get all users
//route GET /api/users
//@access public
const getUsers = async(req, res) => {
    res.status(200).json({message: "Get all users"});
};

//@desc Create new users
//route POST /api/users
//@access public
const createUser = async(req, res) => {
    console.log("Request body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Create user"});
};

//@desc Get user
//route POST /api/users/:id
//@access public
const getUser = async(req, res) => {
    res.status(200).json({message: `Get user for ${req.params.id}`});
};

//@desc Update user
//route PUT /api/users/:id
//@access public
const updateUser = async(req, res) => {
    res.status(200).json({message: `Update user for ${req.params.id}`});
};

//@desc Delete user
//route DELETE /api/users/:id
//@access public
const deleteUser = async(req, res) => {
    res.status(200).json({message: `Delete user for ${req.params.id}`});
};

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};