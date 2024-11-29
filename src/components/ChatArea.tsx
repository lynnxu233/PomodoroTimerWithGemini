import ChatBubble from "./ ChatBubble";

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
    return (
        <div className="custom-chat-area">
            {messages.map((message) => (
            <ChatBubble
            key={message.id}
            content={message.content}
            author={message.author}
            timestamp={message.timestamp}
            status={message.status}
            />
            ))}
        </div>
    )
}

export default ChatArea;