const model = require('../models')
const jwt = require('jsonwebtoken')
const genController = {}

///// Creates user in database /////
genController.npc = async (req,res) => {
    
    res.json({
        message:"Person"
    })

}
module.exports = genController