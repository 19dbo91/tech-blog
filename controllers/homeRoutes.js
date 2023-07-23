const { BlogPost, User } = require('../models');

const router = require('express').Router();

// Home shows all post as all cards
router.get('/', async (req, res) =>{
    try{
        const blogpostData = await BlogPost.findAll({
            include:{ model: User },
            order: [['createdAt', 'ASC']]
        });
        
        var loggedIn = false;
        const blogposts = blogpostData.map( (post) => {
            const postDate = new Date(post.createdAt);
            const day = postDate.getDate();
            const month = postDate.getMonth();
            const year = postDate.getFullYear();
            post.createdAt = `${month}/${day}/${year}`
            //TODO: find a way to get date to properly show; cannot modify sequelize dates
            //console.log(post)
            // // post.user_id = name;
            // //console.log(`change ${post.user}`);
            return post.get( {plain:true} );
        });
        //console.log(blogposts);

        res.status(200).render('homepage',{
            loggedIn,
            blogposts
        });
    }catch(err){
        console.error(err);
        res.status(500).json(`Error 500: Internal server error...\n ${err}`);
    }

});

// Dashboard shows

// Login shows

module.exports = router;
