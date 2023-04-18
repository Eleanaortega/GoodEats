const Review = require('../models/review.model');
const Restaurant = require('../models/restaurant.model')
const User = require('../models/user.model')
const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken');



module.exports.findAllReviews = (req, res) => {
    Review.find()
        .populate("restaurant")
        .populate("user")
        .then((allReviews) => {
            res.json({Reviews: allReviews})
        })
        .catch((err) => res.json({message: 'Something Went Wrong', error: err}));
    }
    
module.exports.findOne = (req, res) => {
    console.log(req.params)
    Review.findById(req.params.id)
    .then((oneReview) => {
        res.json(oneReview)
    })
    .catch((err) => res.json({message: 'Something went wrong', error: err}))
}


module.exports.findOneReview = (req, res) => {
    console.log("Getting Restaurant:", req.params.id)
    Review.find({restaurant: req.params.id})
    // .populate("restaurant")
    .populate("user","firstName")
    .then((oneReview) => {
        res.json(oneReview)
    })
    .catch((err) => res.json({message: 'Something went wrong', error: err}))
}


module.exports.createReview = (req, res) => {
    console.log(req.cookies.usertoken)
    const user = jwt.verify(req.cookies.usertoken, secret);
    Review.create({ ...req.body, user: user._id })
    .then((newReview) => {
        Restaurant.findByIdAndUpdate(newReview.restaurant, {$push: {reviews: newReview._id}})
            .then(() => console.log("Successfully added a new review to Restaurant"))
            .catch(err => res.json({message: "Something went wrong finding Restaurant in Rewiew.create()", error: err}))
        User.findByIdAndUpdate(newReview.user, {$push: {reviews: newReview._id}})
            .then(() => console.log("Successfully added a new review to User"))
            .catch(err => res.json({message: "Something went wrong finding User in Rewiew.create()", error: err}))
        res.json({Review: newReview})
    })
    .catch((err) => res.json({message: 'Something went wrong', error: err}))
}

module.exports.updateReview = (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then((updateReview) => {
        res.json(updateReview)
    })
    .catch((err) => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.deleteReview = (req, res) => {
    Review.findByIdAndDelete(req.params.id)
    .then((deletedReview) => {
        res.json({Review : deletedReview})
    })
    .catch((err) => res.status(400).json({message: 'Something went wrong', error: err}))
}
