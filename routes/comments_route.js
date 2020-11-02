const express = require('express');
const router = express.Router();
const Comment = require('../models/comment_model')

//get all comments by post id
router.get('/post/:id', (req, res) => {
    const postID = req.params.id;
    Comment.find({ postID }, (error, result) => {
        if (error) return res.send(error);
        res.send(result);
    })
});

//create new comment
router.post('/', (req, res) => {
    const comment = new Comment(req.body);
    comment.save((error, result) => {
        if (error) return res.send(error);
        res.send(result);
    })
});



module.exports = router;