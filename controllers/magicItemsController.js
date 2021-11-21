const model = require('../models')
const jwt = require('jsonwebtoken')
const magicItemsController = {}


magicItemsController.getAll = async (req,res) => {
    const items = await model.magicitems.findAll()
    res.json({
        items
    })

}

magicItemsController.create = async (req,res) => {
    console.log(req.body)
    const encryptedId = req.body.userid
    const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)

    console.log(decryptedId.userId)
    try {
        let item = await model.magicitems.create({
            name: req.body.name,
            type: req.body.type,
            attunement: req.body.attunement,
            description: req.body.description,
            userid: decryptedId.userId
        })

        res.json({
            item
        })
    } catch (error) {
        console.log(error)
        res.json({
            error
        })
    }
}
module.exports = magicItemsController