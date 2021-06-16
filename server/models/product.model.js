const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String,
    required: [ true, "Product title is required."],
    minlength: [ 3, "Product title must be at least 3 characters."],
    },
    price: { type: Number},
    description: { type: String },
}, { timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);