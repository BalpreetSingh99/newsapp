const mongoose = require("mongoose");
const { categorySchema, Category } = require('./Category');
const { authorSchema, Author } = require('./Author');
const { itemSchema, Item } = require('./Item');


module.exports = {
    Category,
    Author,
    Item
}