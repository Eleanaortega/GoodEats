const Restaurant = require('../models/restaurant.model');

module.exports.findAllRestaurants = (req, res) => {
    Restaurant.find()
        .populate("reviews")
        .then((allRestaurants) => {
            res.json({Restaurants: allRestaurants})
        })
        .catch((err) => res.json({message: 'Something Went Wrong', error: err}));
}

module.exports.findOneRestaurant = (req, res) => {
    Restaurant.findById(req.params.id)
    .populate("reviews")
    // .populate("user")
    .then((oneRestaurant) => {
        res.json({Restaurant : oneRestaurant})
    })
    .catch((err) => res.json({message: 'Something went wrong', error: err}))
}

module.exports.createRestaurant = (req, res) => {
    Restaurant.create(req.body)
    .then((newRestaurant) => {
        res.json({Restaurant: newRestaurant})
    })
    .catch((err) => res.json({message: 'Something went wrong', error: err}))
}

module.exports.updateRestaurant = (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then((updateRestaurant) => {
        res.json({Restaurant : updateRestaurant})
    })
    .catch((err) => res.json({message: 'Something went wrong', error: err}))
}

module.exports.deleteRestaurant = (req, res) => {
    Restaurant.findByIdAndDelete(req.params.id)
    .then((deleteRestaurant) => {
        res.json({Restaurant : deleteRestaurant})
    })
    .catch((err) => res.json({message: 'Something went wrong', error: err}))
}