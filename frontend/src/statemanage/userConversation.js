import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConvo: null,
  setSelectedConvo: (selectedConvo) => set({selectedConvo}) ,
  messages:[],
  setMessage:(messages) => set({messages}),
 
}))
export default useConversation;
