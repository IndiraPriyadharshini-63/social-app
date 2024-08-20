const router = require("express").Router()
const User = require("../models/User");
const Chat = require("../models/Chat")

router.post("/:s_id/chat/:r_id", async(req, res)=>{
      const newChat  = new Chat(req.body)
      try {
            const sender = await User.find({userId:req.params.s_id})
            const receiver = await User.find({receiverId:req.params.r_id})
            const savedChat = await newChat.save()
            res.status(200).json(savedChat)
      } catch (err) {
            res.status(500).json("something went wrong");
      }
})

module.exports = router