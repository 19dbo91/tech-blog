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
        var title = "The Tech Blog";
        res.status(200).render('homepage',{
            title,
            loggedIn,
            blogposts
        });
    }catch(err){
        console.error(err);
        res.status(500).json(`Error 500: Internal server error...\n ${err}`);
    }
});

// Dashboard shows MY titles+date as buttons and a new 
router.get('/dashboard', async (req, res) =>{
    try{
        //check if logged in 
        var loggedIn = true;// redirect to login if not

        const blogpostData = await BlogPost.findAll({
            where: { id:1 },
            include:{ model: User },
            order: [['createdAt', 'ASC']]//need a where its my posts

        });
        const blogposts = blogpostData.map( (post) => {
            return post.get( {plain:true} );
        });
        
        var title = "Your Dashboard";
        res.status(200).render('dashboard',{
            title,
            loggedIn,
            blogposts
        });
    }catch(err){
        console.error(err);
        res.status(500).json(`Error 500: Internal server error...\n ${err}`);
    }
});

// Login shows
router.get('/login', async (req, res) =>{
    try{
        //check if logged in 
        var loggedIn = false;      
        var title = "The Tech Blog";
        if(loggedIn){
            document.location.replace('/');
            return;
        }
        res.status(200).render('login',{
            title,
            loggedIn,
        });
    }catch(err){
        console.error(err);
        res.status(500).json(`Error 500: Internal server error...\n ${err}`);
    }
});


module.exports = router;
