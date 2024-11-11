import { Message } from '@/libs/types'
import React from 'react'

const Chat = ({messages}: {messages:Message[]}) => {

    if(messages.length === 0){
        return <div></div>
    }
    
    return (
    <div className='min-w-max h-full'>
        {messages.map((message, index) => (
        <div key={index} className='text-left'>
            {/* {message.type === 'transcript' ? (
            <p className='text-sm'>{message.role}</p>
            ) : (
            <p className='text-sm'>{message.text}</p>
            )} */}
        </div>
        ))}
    </div>
  )
}

export default Chat