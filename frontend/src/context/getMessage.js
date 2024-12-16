import { useEffect, useState } from "react";
import useConversation from "../statemanage/userConversation.js";
import axios from "axios";
const getMessage= ()=>{
    const [loading,setLoading]= useState(false);
    const {messages,setMessage,selectedConvo} = useConversation();
    useEffect(()=>{
        const getMessage = async()=>{
            setLoading(true);
            if(selectedConvo && selectedConvo._id) {
                try {
                    const res= await axios.get(
                        `/api/message/get/${selectedConvo._id}  `
                    );
                    setMessage(res.data);
                    setLoading(false);
                } catch (error) {
                    console.log("Error in getting messages:",error)
                }
            }
        };
        getMessage()
    },[selectedConvo,setMessage]);
    return{
        messages,
        loading
    }
}
export default getMessage;