const model = require('../models')
const jwt = require('jsonwebtoken')
const userController = {}

///// Creates user in database /////
userController.create = async (req,res) => {
    console.log(req.body)
    try {
        let user = await model.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })

        const encryptedId = jwt.sign({userId: user.id}, process.env.JWT_SECRET)

        res.json({
            message:"done",
            userID: encryptedId,
            username: user.username,
            email: user.email
        })
    } catch (error) {
        console.log(error)
        res.json({
            error
        })
    }
}
///// Allows user to login to database /////
userController.login = async (req,res) => {
    try {
        let user = await model.User.findOne({
            where: {
                username: req.body.username 
            }
        })
        const encryptedId = jwt.sign({userId: user.id}, process.env.JWT_SECRET)

        if(user.password === req.body.password) {
            res.json({
                username: user.username,
                id: encryptedId

        })
        } else {
            res.status(401)
            res.json({error: 'login failed'})
        }

    } catch (error) {
        res.status(400),
        res.json({ error: 'login failed'})  
    }
}

///// used to get user info on page reload /////
userController.getInfo = async (req, res) => {
    try{
        
        const encryptedId = req.headers.authorization
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)

        const user = await model.User.findOne({
            where: {
                id: decryptedId.userId
            }
        })
       
        res.json({
            userID: encryptedId,
            username: user.username,
            email: user.email
        })    
    }
    catch (error) {
    console.log("🚀 ~ file: usersController.js ~ line 73 ~ userController.getInfo= ~ error", error)
        res.json({
            error
        })
    }
}
//// used to confirm that users local storage id is a real account /////
userController.authCheck = async (req,res) => {
    try {
        const encryptedId = req.headers.authorization
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
        const user = await model.User.findOne({
        where: {
            id: decryptedId.userId
        }
    })
    res.json(true)
    } catch (error) {
        res.json(false)
    }
}

module.exports = userController