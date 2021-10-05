const mongoose = require('mongoose');

const connect = async function main() {
    await mongoose.connect('mongodb://localhost:27017/social')
    console.log("Connected to mongoose db")
}

module.exports ={
    connect
}