const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const bookRoutes = require('./book-routes');
const commentRoutes = require('./comment-routes');
const categoryRoutes = require('./category-routes');
const voteRoutes = require('./vote-routes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/comments', commentRoutes);
router.use('/categories', categoryRoutes);
router.use('/votes', voteRoutes);

module.exports = router;