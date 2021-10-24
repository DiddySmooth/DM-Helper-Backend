const express = require('express')

const genRouter = express.Router()

const genController = require('../controllers/genController')



genRouter.get('/npc', genController.npc)


module.exports = genRouter