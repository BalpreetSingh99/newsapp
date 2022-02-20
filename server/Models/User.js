const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    phoneNumber : String,
    dob : String,
    tob : String,
    gender : String,
    maritalStatus : String,
    language : String,
    profilePicture : String,
});
const User = new mongoose.model("User", userSchema);

module.exports = {
    userSchema,
    User: User
}

