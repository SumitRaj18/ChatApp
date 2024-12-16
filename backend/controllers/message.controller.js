import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverId,io } from "../SocketIO/server.js";

export const sendMessage = async (req, res) => {

    try {
        const { message } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            }); }
        
        const newMessage =await new Message({
           senderId,
           receiverId,
           message
            
        });
        if (newMessage) {

            conversation.messages.push(newMessage._id);

        } 
        await Promise.all([conversation.save(), newMessage.save()]);
        const receiverSocketId= getReceiverId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("new Message",newMessage)
        }

        res.status(201).json(  newMessage )
    
    } catch (error) {
        console.log("Error in Sending message" + error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
export const getMessage = async (req, res) => {

    try {
        const { id:chatUser } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, chatUser] }
        }).populate("messages");
        if (!conversation) {
         return  res.status(201).json({message:"No conversations"})
    }
    const messages = conversation.messages;
    res.status(201).json(messages);
    }
    catch(error) {
         console.log(error),
         res.status(500).json({error:'Internal Server  Error'})
    }
}