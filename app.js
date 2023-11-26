
const express = require("express")

const dogsRoutes = require('./routes/dog.routes')

const app = express()



app.set("port",3050)

app.use(express.json())
app.use(dogsRoutes.dogs)
module.exports = app;