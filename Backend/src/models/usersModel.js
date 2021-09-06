const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
},{
    timestamps: true,
    versionKey: false
});

const User = mongoose.model("User",UserSchema);

module.exports =  User;