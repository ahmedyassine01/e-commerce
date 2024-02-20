const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nameProd : String,
    price : String,
    category : String,
    image : String,
    description : String,
    rating: String,
    sold:String,
    quantity:String
});

module.exports = mongoose.model("product", productSchema);