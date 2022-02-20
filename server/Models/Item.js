const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    thumbnailImage : String,
    headline : String,
    category : { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    author : { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },  
    uploadDate : {type: Date,default: Date.now}
});
const Item = new mongoose.model("Item", itemSchema);

module.exports = {
    itemSchema,
    Item: Item
}