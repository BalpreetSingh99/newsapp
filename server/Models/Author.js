const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    author: String,
});
const Author = new mongoose.model("Author", authorSchema);

module.exports = {
    authorSchema,
    Author: Author
}