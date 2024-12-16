import { useEffect } from "react";
import useConversation from "../statemanage/userConversation.js";
import { useSocketContext } from "./SocketContext.jsx";
import sound from '../assets/audio.mp3'
function useGetSocketMessage() {
    const {socket}= useSocketContext();
    const {messages,setMessages}= useConversation();
    useEffect(()=>{
        socket.on('newMessage',(newMessage)=>{
            const notification= new Audio(sound)
            notification.play();
            setMessages([...messages,newMessage])
        });
        return()=>{ socket.off('newMessage');

};},[socket,messages,setMessages])
}
export default useGetSocketMessage;