const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    postID: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Comment', commentSchema);