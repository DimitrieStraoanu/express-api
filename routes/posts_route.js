const express = require('express');
const router = express.Router();
const Post = require('../models/post_model')

//get all posts
router.get('/', (req, res) => {
    Post.find((error, result) => {
        if (error) return res.send(error);
        res.send(result);
    })
});

//get post by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Post.findById(id, (error, result) => {
        if (error) return res.send(error);
        res.send(result);
    })
});

//create new post
router.post('/', (req, res) => {
    const post = new Post(req.body);
    if (!post.slug) post.slug = post.title.toLowerCase().replace(/\s/g,"-");
    else post.slug = post.slug.toLowerCase().replace(/\s/g,"-");
    post.save((error, result) => {
        if (error) return res.send(error);
        res.send(result);
    })
});

//update post by id
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const post = req.body;    
    if (post.slug) post.slug = post.slug.toLowerCase().replace(/\s/g,"-");
    Post.findByIdAndUpdate(id, post, { new: true }, (error, result) => {
        if (error) return res.send(error);
        res.send(result);
    })
});

module.exports = router;