const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({

    fullname:{
        type:String,
        required:[true, "Name is required"]
    },

    username:{
        type:String,
        required:[true, "Name is required"]
    },

    email:{
        type:String,
        required:[true, "Email is required"]
    },

    phone:{
        type:Number,
        required:[true, "Phone is required"]
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