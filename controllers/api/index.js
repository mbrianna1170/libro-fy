const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const bookRoutes = require('./book-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/comments', commentRoutes);

module.exports = router;