import mongoose from 'mongoose'

const messageSchema= mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message:{
        type: String,
        required: true,
        maxlength:800,
        
    },
    createdAt:{type:Date, default:Date.now},
   
}, {timestamps:true}
)
const Message= mongoose.model("message",messageSchema);
export default Message;
