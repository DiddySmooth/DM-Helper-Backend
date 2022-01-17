const express = require('express')

const monsterRouter = express.Router()

const monsterController = require('../controllers/monsterController')

monsterRouter.get('/getAll', monsterController.getAll)
monsterRouter.post('/create', monsterController.create)
module.exports = monsterRouter