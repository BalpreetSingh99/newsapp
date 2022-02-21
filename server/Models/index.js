const mongoose = require("mongoose");
const { categorySchema, Category } = require('./Category');
const { authorSchema, Author } = require('./Author');
const { itemSchema, Item } = require('./Item');
const { userSchema, User } = require('./User');


module.exports = {
    Category,
    Author,
    Item,
    User
}