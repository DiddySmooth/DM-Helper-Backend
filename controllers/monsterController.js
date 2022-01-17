const model = require('../models')
const jwt = require('jsonwebtoken')
const monsterController = {}

monsterController.getAll = async (req,res) => {
    const monster = await model.usermonster.findAll()
    res.json({
        monster
    })
}

monsterController.create = async (req,res) => {
    const encryptedId = req.body.userid
    //const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
    


    try{
        let monster = await model.usermonster.create({
            userid: encryptedId,
            name: req.body.name,
            size: req.body.size,
            type: req.body.type,
            allignment: req.body.allignment,
            armorclass: req.body.armorclass,
            hitpoints: req.body.hitpoints,
            speed: req.body.speed,
            stats: req.body.stats,
            savingthrows: req.body.savingthrows,
            skills: req.body.skills,
            damageresistances: req.body.damageresistances,
            damagevunerablilities: req.body.damagevunerablilities,
            damageimmunities: req.body.damageimmunities,
            conditionimmunities: req.body.conditionimmunities,
            senses: req.body.senses,
            languages: req.body.languages,
            challenge: req.body.challenge,
            prof: req.body.prof,
            abilities: req.body.abilities,
            actions: req.body.actions,
            legendaryactions: req.body.legendaryactions
        })
    res.json({monster})
    }catch (error){
        console.log(error)
        res.json(error)
    }
}


module.exports = monsterController 