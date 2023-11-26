const Router = require('express')
const dogFakeData = require("../controllers/dog.controllers")

const router = Router()

const dogs = router.get("/fake/dog",dogFakeData.getFakeDogsData)

//const dispositivo = router.get("/dispositivo/:id", moviesControllers.getDispositivo)

module.exports = {
    dogs
}