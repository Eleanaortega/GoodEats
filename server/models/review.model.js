const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: [255, "Description must be less than 255 characters"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        max: [5, "Rating must be less than 5"]
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: [true, "Restaurant field required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User field required"]
    }
}, {timestamps: true});


const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;