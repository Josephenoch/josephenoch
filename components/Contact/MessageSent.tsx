import React, { FC } from 'react'
import Button from '../GeneralComponents/Button'

interface Props{
  handleNewMessage():void
}

const MessageSent:FC<Props> = ({handleNewMessage}) => {
  return (
    <>
        <p className="text-lg">Thank you! &#x1F918;</p>
        <p className="w-1/2 mt-2 text-sm text-secondary text-center">Your message has been accepted. You will recieve answer really soon!</p>
        <Button onClick={handleNewMessage} >send-new-message</Button>
    </>
  )
}

export default MessageSent