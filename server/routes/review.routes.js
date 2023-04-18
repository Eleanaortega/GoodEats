const ReviewController = require('../controllers/review.controller')
const {authenticate}= require('../config/jwt.config')



module.exports = app => {
    app.get('/api/reviews', ReviewController.findAllReviews),
    app.get('/api/review/:id', authenticate, ReviewController.findOne),
    app.get('/api/reviews/:id', ReviewController.findOneReview),
    app.post('/api/reviews/:id', authenticate, ReviewController.createReview),
    app.put('/api/reviews/:id', authenticate,ReviewController.updateReview),
    app.delete('/api/reviews/:id', authenticate, ReviewController.deleteReview)

}