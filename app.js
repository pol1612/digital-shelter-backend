const express = require("express")

const app = express()



app.set("port",3050)

app.use(express.json())

module.exports = app;