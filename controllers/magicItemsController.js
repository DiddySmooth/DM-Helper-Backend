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
    const encryptedId = req.body.userid
    const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)

    try {

        let item = await model.magicitems.create({
            name: req.body.name,
            type: req.body.type,
            attunement: req.body.attunement,
            description: req.body.description,
            userid: decryptedId.userId,
            likes: 0
        })
        res.json({item})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

///// Edit token x and y after moved on frontend /////
magicItemsController.update = async (req,res) => {
    const encryptedId = req.body.userid
    const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
    try {
        const item = await model.magicitems.findOne({
            where: {
                name: req.body.name,
                type: req.body.type,
                attunement: req.body.attunement,
                description: req.body.description,
                userid: decryptedId.userId
            }
        })
        let res = await item.update({
            name: req.body.name,
            type: req.body.type,
            attunement: req.body.attunement,
            description: req.body.description,
        })
        res.json({res})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

magicItemsController.like = async (req, res) => {
    const encryptedId = req.body.userid
    const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
    
    const likeExists = await model.userlikes.findOne({
        where: {
            userid: decryptedId,
            itemid: req.body.itemId,
            type: req.body.type
        }
    })
    if(!likeExists){
        const like = await model.userlikes.create({
            userid: decryptedId,
            itemid: req.body.itemId,
            type: req.body.type
        })
        console.log("no like exist")

        try {
            const item = await model.magicitems.findOne({
                where: {
                    id: req.body.itemId
                }
            })
            let update = await item.update({
                likes: item.likes + 1
            })
            res.json({update})
        }catch(error){
            console.log(error)
            res.json({error})
        }
    }else{
        res.json("User already liked")
    }


    
}
module.exports = magicItemsController