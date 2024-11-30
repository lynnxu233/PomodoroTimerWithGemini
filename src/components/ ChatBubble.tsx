"use client";
// interface ChatBubbleProps {
//     content: string;
//     author?: string;
//     timestamp?: string;
//     status?: string;
//     avatarUrl?: string;
//   }

// export default function ChatBubble(props: ChatBubbleProps){
//     const {content, author, timestamp, status} = props;
//     const avatarUrl = "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg";
//     return (
//     <div className="flex items-end gap-2.5">
//         <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700" style={{borderBottomRightRadius: "0px"}}>
//             <div className="flex items-center space-x-2 rtl:space-x-reverse">
//                 <span className="text-sm font-semibold text-gray-900 dark:text-white">{author}</span>
//                 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{timestamp}</span>
//             </div>
//             <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{content}</p>
//         <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{status}</span>
//         </div>
//         <img className="w-8 h-8 rounded-full" src={avatarUrl} alt="Jese image"/>
//     </div>
//     );
// }
interface ChatBubbleProps {
  content: string;
  author?: string;
  timestamp?: string;
  status?: string;
  avatarUrl?: string;
  id: number;  
  onDelete: (id: number) => void;
}

export default function ChatBubble(props: ChatBubbleProps) {
  const { content, author, timestamp, status, id, onDelete } = props;
  const avatarUrl = "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg";

  return (
    <div className="flex items-end gap-2.5">
      <div
        className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700"
        style={{ borderBottomRightRadius: "0px" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{author}</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{timestamp}</span>
          </div>
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            🗑️
          </button>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{content}</p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{status}</span>
      </div>
      <img className="w-8 h-8 rounded-full" src={avatarUrl} alt="Avatar" />
    </div>
  );
}