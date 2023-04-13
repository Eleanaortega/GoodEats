const RestaurantController = require('../controllers/restaurant.controller')

module.exports = app => {
    app.get('/api/restaurants', RestaurantController.findAllRestaurants),
    app.get('/api/restaurants/:id', RestaurantController.findOneRestaurant),
    app.post('/api/restaurants', RestaurantController.createRestaurant)
    app.put('/api/restaurants/:id', RestaurantController.updateRestaurant)
    app.delete('/api/restaurants/:id', RestaurantController.deleteRestaurant)

}