"use client";
import ChatBubble from "./ ChatBubble";
import { useState } from "react";


interface ChatMessage {
    id: number;
    content: string;
    author: string;
    timestamp: string;
    status?: string;
    avatarUrl?: string;
  }

interface ChatAreaProps {
    messages: ChatMessage[];
  }
  

function ChatArea(props:ChatAreaProps){
    const {messages} = props;
    const [messageList, setMessages] = useState(messages);
    const deleteMessage = (id: number) => {
      setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
      console.log(messageList);
    };

    return (
        <div className="custom-chat-area">
            {messageList.map((message) => (
            <ChatBubble
            key={message.id}
            content={message.content}
            author={message.author}
            timestamp={message.timestamp}
            status={message.status}
            id = {message.id}
            onDelete={deleteMessage}
            />
            ))}
        </div>
    )
}

export default ChatArea;