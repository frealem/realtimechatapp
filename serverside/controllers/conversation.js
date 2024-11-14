const Conversation = require("../models/conversationModel")
const router=require('express').Router()

// create conversation

router.post('/',async(req,res)=>{

const newConversation=new Conversation(
    {members:[req.body.senderId,req.body.recieverId]}
)
    try {
        const savedConversation=await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (error) {
       res.status(500).json({message:'error while creating message'}) 
    }
})

// get conversations

router.get('/:userId',async(req,res)=>{
try {
   const conversation=await Conversation.find({
    members:{$in:[req.params.userId]},
   });
   res.status(200).json(conversation)
} catch (error) {
    res.status(500).json({message:'error while getting conversation'}) 
 }
})

module.exports=router