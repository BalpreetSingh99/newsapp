const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category: String,
});
const Category = new mongoose.model("Category", categorySchema);

module.exports = {
    categorySchema,
    Category: Category
}