const mongoose = require('mongoose');

const commentScheme =new mongoose.Schema(
    {
        content: String,
        createdAt: Date,
        author: String,
        postId: mongoose.ObjectId
    });


module.exports = {
    commentScheme
}