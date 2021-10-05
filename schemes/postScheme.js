const mongoose = require('mongoose');

const postScheme = new mongoose.Schema(
    {
        title: {type: String, required: true} ,
        likes: {type: Number, default: 0},
        createdAt: {type: Date, default: Date.now}
    });

module.exports = {
    postScheme
}
