const asynchandler = require("express-async-handler");
const Contact = require("../models/contactModels");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");

const getContacts = asynchandler (async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
});

const createContact = asynchandler(async (req, res) => {
    try {
        const { fname, lname, email, phone, password } = req.body;
        if (!fname || !lname || !email || !phone || !password) {
            res.status(400).json({ error: "All fields are mandatory!" });
            return;
        }

        const contactAvailable = await Contact.findOne({ email });

        if (contactAvailable) {
            res.status(400).json({ error: "User already exists!" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const contact = await Contact.create({
            fname,
            lname,
            email,
            phone,
            password: hashedPassword,
        });

        console.log(`Contact Created: ${contact}`);
        res.status(201).json(contact);

    }
    catch (error)
    {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Failed to create contact', details: error.message });
    }
});

const getContact = asynchandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

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

const loginContact = asynchandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "All fields are mandatory!" });
        return;
    }

    try {
        const contact = await Contact.findOne({ email });

        if (contact && (await bcrypt.compare(password, contact.password))) {
            const accessToken = jwt.sign(
                {
                    contact: {
                        id: contact._id,
                        fname: contact.fname,
                        email: contact.email,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "1m" }
            );

            res.status(200).json({ accessToken });
        } else {
            res.status(401).json({ error: "Invalid Credentials" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Failed to authenticate" });
    }
});


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    loginContact
};
