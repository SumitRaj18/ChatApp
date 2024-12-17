import React, { useEffect, useRef } from 'react'
import Message from './Message'
import getMessage from '../../context/getMessage.js'
import Loading from '../../components/Loading'
import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';
function Messages() {
  const { messages, loading } = getMessage();
  console.log(messages);
  const lastMessageRef = useRef();
  useGetSocketMessage();
  console.log(messages)
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behaviour: "smooth" })
      }
    }, 100)
  }, [messages])

  return (

    <>




      <div className='' style={{ minHeight: 'calc(88vh - 15vh)' }}>
        {loading ? (<Loading></Loading>) : (messages.length > 0 && messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>

        ))
        )}
        {!loading && messages.length === 0 &&
          <div>
            <p className='text-center text-6xl  to-blue-700'> Say Hi</p>
          </div>
        }


      </div>






    </>
  )
}

export default Messages
