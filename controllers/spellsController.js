const model = require('../models')
const jwt = require('jsonwebtoken')
const spellsController = {}

spellsController.getAll = async (req, res) => {
    const items = await model.userspells.findAll()
    res.json({
        items
    })
}

spellsController.create = async(req, res)=> {
    const encryptedId = req.body.userid
    const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)

    console.log(req.body)

    try {
        let spell = await model.userspells.create({
            name: req.body.name,
            level: req.body.level,
            school: req.body.school,
            castingtime: req.body.castingtime,
            range: req.body.range,
            area: req.body.area,
            components: req.body.components,
            duration: req.body.duration,
            attack: req.body.attack,
            damage: req.body.damage,
            save: req.body.save,
            effect: req.body.effect,
            description: req.body.description,
            userid: decryptedId.userId
        })
        res.json({spell})
    }catch (error){
        console.log(error)
        res.json({error})
    }
}

spellsController.like = async (req, res) => {
    const encryptedId = req.body.userid
    const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)

    console.log(decryptedId)
    const likeExist = await model.userlikes.findOne({
        where: {
            userid: decryptedId.userId,
            itemid: req.body.spellid,
            type: req.body.type
        }
    })
    if(!likeExist){
        const like = await model.userlikes.create({
            userid: decryptedId.userId,
            itemid: req.body.spellId,
            type: req.body.type
        })
        console.log("no like exist")

        try{
            const item = await model.userspells.findOne({
                where: {
                    id: req.body.spellid
                }
            })
            console.log(item)
            // let update = await item.update({
            //     likes: item.likes + 1
            // })
        }catch(error){
            console.log(error)
            res.json({error})
        }
    }else{
        res.json("User Already Liked")
    }
}


module.exports = spellsController