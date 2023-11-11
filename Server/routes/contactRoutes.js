const express = require("express");
const router = express.Router();

const {
    getContacts,
    getContact,
    updateContact,
    deleteContact,
    createContact,
    loginContact,
} = require("../controller/ContactController");

router.route("/").get(getContacts);

router.route("/:id").get(getContact);

router.route("/:id/update").put(updateContact);

router.route("/:id/delete").delete(deleteContact);

router.route("/register").post(createContact);

router.route("/login").post(loginContact);

module.exports = router;