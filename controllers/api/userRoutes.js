const router = require('express').Router();
const { User } = require('../../models');


//(NOT IN SCOPE) GET ALL

//GET id
router.get('/', async (req, res)=>{
    try{
        const userData = await User.findAll();
        res.status(200).json(blogpostData);
    } catch(err){
        res.status(500).json(err);
    }
});


//POST body

//PUT id

//DELETE id







module.exports = router;