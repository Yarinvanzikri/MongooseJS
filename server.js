const express = require('express');
const {connect} = require('./db')
const routes= require('./routes')
const app  = express();
app.use(express.json())
app.use(routes)








app.listen(8080,() => {
    connect()
    console.log("listening on port 8080")
    }
)