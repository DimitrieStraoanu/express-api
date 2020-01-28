const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    slug:{
        type: String
    }

});

module.exports = mongoose.model('Post', postSchema );