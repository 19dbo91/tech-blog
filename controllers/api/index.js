//#region Importing dependencies...
const router = require('express').Router();
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');
//#endregion

router.use('/users', userRoutes);
router.use('/blogposts', blogPostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;