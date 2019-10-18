const express = require("express")
const app = express()


app.use("/", express.static(__dirname + '/static'))
app.use("/static", express.static("static"))






module.exports = app

