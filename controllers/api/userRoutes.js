const router = require('express').Router();
const { User } = require('../../models');


//(NOT IN SCOPE) GET ALL

//GET id /* add .scope('withPassword') before find() if needed */
router.get('/:id', async (req, res)=>{
    try{
        const userData = await User.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch(err){
        res.status(500).json(err);
    }
});


//POST new user
router.post('/', )

//PUT id

//DELETE id







module.exports = router;