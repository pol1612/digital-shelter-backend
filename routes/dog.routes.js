const Router = require('express')
const connection = require('../database/db')
const dogFakeData = require("../fake-data/dog.data")
const router = Router()

const dispositivos = router.get("/dog",)

//const dispositivo = router.get("/dispositivo/:id", moviesControllers.getDispositivo)

module.exports = {
    dispositivo,dispositivos
}