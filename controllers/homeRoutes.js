const { BlogPost, User } = require('../models');

const router = require('express').Router();

//Load all blogposts
router.get('/', async (req, res) =>{
    await BlogPost.findAll({
        include:{ model: User },
        order: [['createdAt', 'DESC']]
    });
});


module.exports = router;
