const router = require('express').Router();

const blogPostRoutes = require('./blogPostRoutes.js');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/blogpost', userRoutes);
router.use('/comment', userRoutes); // shouldnt this be blogpost/:id/comment/:id

module.exports = router;