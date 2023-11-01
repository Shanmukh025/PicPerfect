const express = require("express");
const router = express.Router();

const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require("../controller/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;