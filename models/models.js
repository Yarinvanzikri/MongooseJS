const mongoose = require('mongoose');
const {commentScheme} = require("../schemes/commentScheme");
const {postScheme} = require("../schemes/postScheme");

const Post = mongoose.model('posts', postScheme);

const Comment = mongoose.model('comments', commentScheme);

module.exports = {
    Post,
    Comment
}