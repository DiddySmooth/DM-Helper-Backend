const express = require('express')

const magicItemsRouter = express.Router()

const magicItemsController = require('../controllers/magicItemsController')



magicItemsRouter.get('/getAll', magicItemsController.getAll)
magicItemsRouter.post('/create', magicItemsController.create)
magicItemsRouter.post('/like', magicItemsController.like)

module.exports = magicItemsRouter