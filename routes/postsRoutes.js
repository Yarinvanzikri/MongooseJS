const express = require('express');
const router = express.Router();
const {Post} = require('../models/models')

router.get('/', async (req, res)=>{
res.send(await Post.find({}))
})
router.get('/:id' , async (req, res)=> {
    const id = req.params.id;
    const post = await Post.findById(id)
    res.send(post);
})
router.post('/',async (req, res) => {
    const post= new Post(req.body);
    await post.save()
    res.send('')
})
router.put('/:id', async(req, res)=> {
    const id = req.params.id;
    const updated = await Post.findOneAndUpdate({"_id":id},req.body, {new: true})
    res.send(updated)
})
module.exports = router