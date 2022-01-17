const express = require('express')

const spellsRouter = express.Router()

const spellsController = require('../controllers/spellsController')

spellsRouter.get('/getAll', spellsController.getAll)
spellsRouter.post('/create', spellsController.create)
spellsRouter.put('/like', spellsController.like)

module.exports = spellsRouter