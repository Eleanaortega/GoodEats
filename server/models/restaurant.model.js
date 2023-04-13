const mongoose = require('mongoose');
const validator = require('validator');


const RestaurantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "First name must be at least 2 characters"]
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        maxlength: [255, "Address must be less than 255 characters"]
    },
    price: {
        type: String,
        required: [true, "Price is required"]
    },
    img: {
        type: String,
        required: [true, "Url is required"],
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(v);
            }
    }},
    type: {
        type: String,
        required: [true, "Type is required"],
        maxlength: [10, "Type must be less than 10 characters"]
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review"
    },
}, {timestamps: true});


const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;