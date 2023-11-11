const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({

    fname:{
        type:String,
        required:[true, "First Name is required"]
    },

    lname:{
        type:String,
        required:[true, "Last Name is required"],
    },

    email:{
        type:String,
        required:[true, "Email is required"],
        unique: true
    },

    phone:{
        type:Number,
        required:[true, "Phone is required"],
        unique: true
    },

    password:{
        type:String,
        required:[true, "Password is required"]
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);