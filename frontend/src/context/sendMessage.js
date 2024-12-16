import React from 'react'
import useConversation from '../statemanage/userConversation.js';
import axios from 'axios';
import sound from '../assets/sent.mp3'
const sendMessage = () => {
    const {messages,setMessage,selectedConvo} = useConversation();
    const sendMessages = async(message)=>{
       
      
            try {
                const res= await axios.post(
                    `/api/message/send/${selectedConvo._id}  `, {message}
                );
                const notification= new Audio(sound);
                notification.play();
                setMessage([...messages,res.data]);
            } catch (error) {
                console.log("Error in getting messages:",error)
            }
        
    };
  return {sendMessages} 
  
  
}

export default sendMessage;
