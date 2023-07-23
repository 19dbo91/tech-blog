const router = require('express').Router();
const { BlogPost, User } = require('../../models');


//GET ALL
router.get('/', async (req, res)=>{
    try{
        const blogpostData = await BlogPost.findAll({
            include:{model: User}
        });
        console.log(blogpostData)

        res.status(200).json(blogpostData);
    } catch(err){
        res.status(500).json(err);
    }
});

//GET id
router.get('/:id', async (req, res)=>{
    try{
        const blogpostData = await BlogPost.findByPk( req.params.id, {
            include:{model: User},
        });
        if(!blogpostData){
            res.status(404).json({ message: 'No blog post found with that id!' });
            return;
        };
        res.status(200).json(blogpostData);
    } catch(err){
        res.status(500).json(err);
    }
});

//POST body
router.get('/', async (req, res)=>{
    try{
        const blogpostData = await BlogPost.create({
            title: req.body.title,
            body: req.body.body
        });
        res.status(200).json(blogpostData);
    } catch(err){
        res.status(500).json(err);
    }
});

//PUT id
router.put('/:id', async (req, res)=>{
    try{
        const blogpostData = await BlogPost.findByPk( req.params.id, {
            include:{model: User},
        });
        if(!blogpostData){
            res.status(404).json({ message: 'No blog post found with that id!' });
            return;
        };
        res.status(200).json(blogpostData);
    } catch(err){
        res.status(500).json(err);
    }
});

//DELETE id
router.delete('/:id', async (req, res)=>{
    try{
        const blogpostData = await BlogPost.destroy({
            where:{
                id: req.params.id
            },
        });
        res.status(200).json(blogpostData);
    } catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;