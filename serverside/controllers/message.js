const authenticator = require('../middleware/middleware');
const messages = require('../models/messageModel')

const router=require('express').Router()

// add message
router.post('/', async(req, res) => {
    const newMessage= new messages(req.body)
    try {
        const savedMessage=await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        res.status(500).json({message:'error while creating message'}) 
    }
})

module.exports=router;