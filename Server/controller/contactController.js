const asynchandler = require("express-async-handler");
const Contact = require("../models/contactModels");
//@desc Get all users
//route GET /contact
//@access public
const getContacts = asynchandler (async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
});

//@desc Create new contacts
//route POST /contact
//@access public
const createContact = asynchandler (async (req, res) => {
    const { fullname, username, email, phone, password } = req.body;
    if (!fullname || !username || !email || !phone || !password ) {
        res.status(400).json({ error: "All fields are mandatory!" });
        return;
    }
    const contact = await Contact.create({
        fullname, username, email, phone, password
    });
    res.status(201).json(contact);
});

//@desc Get contacts
//route POST /contact/:id
//@access public
const getContact = asynchandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Update user
//route PUT /users/:id
//@access public
const updateContact = asynchandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedcontact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json(updatedcontact);
});

//@desc Delete user
//route DELETE /users/:id
//@access public
const deleteContact = asynchandler(async (req, res) => {
    try {
      const contact = await Contact.deleteOne({ _id: req.params.id });
      if (contact.deletedCount === 0) {
        res.status(404).json({ error: "Contact not found" });
        return;
      }
      res.status(200).json(contact);
    } 
    catch (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ error: "Failed to delete contact" });
    }
  });
  

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
