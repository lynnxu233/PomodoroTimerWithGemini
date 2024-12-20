// "use client";
// import ChatBubble from "./ ChatBubble";
// import { useEffect, useState } from "react";
// import {
//   Card,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";
// import { example_questions, example_answers, intro, guidingPrompt} from "@/lib/prompts";

// interface ChatMessage {
//     id: number;
//     content: string;
//     author: string;
//     timestamp: string;
//     status?: string;
//     avatarUrl?: string;
//   }

//   interface ChatAreaProps {
//       messages: ChatMessage[];
//       status: string;
//       studyTime: number;
//     }
  
  
// function ChatArea(props:ChatAreaProps){

//     const {messages, status, studyTime} = props;
//     const [numOfPomo, setNumOfPomo] = useState(0);

//     const [currentState, setCurrentState] = useState<'start'| 'working' | 'shortBreak' | 'finish'>("start");
//     const [messageList, setMessages] = useState(messages);

//     const initialBasicPrompt = [
//       {role:"system" , content: guidingPrompt},
//       ...createShots(currentState)
//     ]; 
//     const [initialPrompt, setInitialPrompt] = useState(initialBasicPrompt);
//     const [prompt, setPrompt] = useState(`I'm at the ${currentState} state of pomodoro timer for study. 
//           It's  ${(new Date()).toLocaleTimeString()}. encourage me to start`)


//     const deleteMessage = (id: number) => {
//       setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
//       console.log(messageList);
//     };

//     function createShots(state:"start"|"working"|"shortBreak"|"finish"){
//       const questions = example_questions[state];
//       const answers = example_answers[state];
//       const shots = questions.flatMap((question, index) => 
//         [{ role: "user", content: `I'm at the ${state} state of pomodoro timer for study. Our pomodoro is set to 30 minutes with 5 minute break in between ${question}` },
//         { role: "assistant", content: answers[index] }]
//       .flat())
//       console.log(shots);
//       return shots;

//     }

//     // synchronize with the pomodoro status 
//     useEffect(()=>{
//       if(status === "working")
//       {
//         setNumOfPomo(prev => prev +1);
//       }
//       const castedStatus = status as "start" | "working" | "shortBreak" | "finish";
//       setCurrentState(castedStatus);
//     }, [status]);

//     // change initialPrompts(N-shot) for different status.
//     useEffect(() => {
//       const tempShots = [
//         {role:"system" , content: "Pretend to be my supportive study friend. Given me one suggestion to me based on my state of pomodoro timer. Given that Output should be in the format of literal template javascript string."},
//         ...createShots(currentState)
//       ]; 
//       setInitialPrompt(tempShots)
//       console.log("current state is "+ currentState);
//       if(currentState === "shortBreak"){
//         setPrompt(`I'm at the ${currentState} state of pomodoro timer for study. 
//           It's  ${(new Date()).toLocaleTimeString()} 
//           and we'll going to finish ${studyTime/30} pomodoros. we've finished ${numOfPomo} pomodoros`)
//       }
//       else if(currentState === "start"){
//         setPrompt(`I'm at the ${currentState} state of pomodoro timer for study. 
//           It's  ${(new Date()).toLocaleTimeString()}. encourage me to start`);
//       }
//       else{
//       setPrompt(`I'm at the ${currentState} state of pomodoro timer for study. 
//       It's  ${(new Date()).toLocaleTimeString()} 
//       and we'll going to finish ${studyTime/30} pomodoros.`)
//     }

//     }, [currentState]);

//     // connect with Prompt API
//     const [result, setResult] = useState(intro);
//     // const [error, setError] = useState(null);

//     useEffect(() => {
//       // console.log("initial prompt: "+ initialPrompt);
//       ai.languageModel
//         .create({
//           // temperature: 1,
//           // topK: 3,
//           initialPrompts: initialPrompt
//         })
//         .then((session) => {
//           return session.prompt(prompt);
//         })
//         .then((advice) => {
//           setResult(advice); // Update state with result
//         })
//         .catch((err) => {
//           console.error("Error:", err);
//           // setError("Failed to load advice.");
//         });
//     }, [initialPrompt, prompt]);

//     const playMessageSound = () => {
//       const sound = new Audio("/message.wav"); // Path to your sound file
//       sound.play().catch((err) => console.error("Sound play error:", err));
//     };

//     /* Updating message area */
//     useEffect(()=> {
//       const rawMessages = [result];
//       const updatedMessages = rawMessages.map((message, index) => ({
//         id: index + 1, // Unique ID for each message
//         content: message.trim(), // Trim any extra whitespace
//         author: "Gemini Google", 
//         timestamp: new Date().toLocaleTimeString(), // Current timestamp in ISO format
//         status: "received", // Default status
//       }));
//       setMessages(updatedMessages); // Update state with new messages
//       playMessageSound();
//     }, 
//   [result])



//     return (
//       <div className="h-full" style={{paddingBottom:"2rem"}}>
//       <Card className="w-full h-full max-w-[48rem] bg-transparent flex-col justify-start">
//       <CardBody>
//         <Typography variant="h6" color="blue-gray" className="mb-4 uppercase">
//           Your state📚: {currentState}
//         </Typography>
//         <div className="custom-chat-area">
//             {messageList.map((message, index) => (
//               <div 
//             key={message.id}
//             className="animate-slide-in-up 
//             opacity-0 
//             ${index > 0 ? 'delay-100' : ''} 
//             transition-all 
//             duration-500"
//             style={{
//               // Optional: Add more precise control with inline styles
//               animationDelay: `${index * 0.1}s`
//             }}
//             >
//             <ChatBubble
//             key={message.id}
//             content={message.content}
//             author={message.author}
//             timestamp={message.timestamp}
//             status={message.status}
//             id = {message.id}
//             onDelete={deleteMessage}
//             />
//             </div>
//             ))}
//         </div>
//       </CardBody>
//     </Card>
//     </div>
//     )
// }

// export default ChatArea;

"use client";
import ChatBubble from "./ ChatBubble";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { example_questions, example_answers, intro, guidingPrompt_fined} from "@/lib/prompts";

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
      status: string;
      studyTime: number;
    }
  
  
function ChatArea(props:ChatAreaProps){

    const {messages, status, studyTime} = props;
    const [numOfPomo, setNumOfPomo] = useState(0);

    const [currentState, setCurrentState] = useState<'start'| 'working' | 'shortBreak' | 'finish'>("start");
    const [messageList, setMessages] = useState(messages);

    const initialBasicPrompt = [
      {role:"system" , content: guidingPrompt_fined},
      ...createShots(currentState)
    ]; 
    const [initialPrompt, setInitialPrompt] = useState(initialBasicPrompt);
    const [prompt, setPrompt] = useState(`I'm at the ${currentState} state of pomodoro timer for study. 
          It's  ${(new Date()).toLocaleTimeString()}.`)


    const deleteMessage = (id: number) => {
      setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
      console.log(messageList);
    };

    function createShots(state:"start"|"working"|"shortBreak"|"finish"){
      const questions = example_questions[state];
      const answers = example_answers[state];
      const shots = questions.flatMap((question, index) => 
        [{ role: "user", content: `I'm at the ${state} state of pomodoro timer for study. Our pomodoro is set to 30 minutes with 5 minute break in between ${question}` },
        { role: "assistant", content: answers[index] }]
      .flat())
      console.log(shots);
      return shots;

    }

    // synchronize with the pomodoro status 
    useEffect(()=>{
      if(status === "working")
      {
        setNumOfPomo(prev => prev +1);
      }
      const castedStatus = status as "start" | "working" | "shortBreak" | "finish";
      setCurrentState(castedStatus);
    }, [status]);

    // change initialPrompts(N-shot) for different status.
    useEffect(() => {
      const tempShots = [
        {role:"system" , content: guidingPrompt_fined},
        ...createShots(currentState)
      ]; 
      setInitialPrompt(tempShots)
      console.log("current state is "+ currentState);
      if(currentState === "shortBreak"){
        setPrompt(`I'm at the ${currentState} state. 
          The current time is  ${(new Date()).toLocaleTimeString()} 
          and there're total ${studyTime/30} pomodoros. The current Pomodoro number ${numOfPomo}`)
      }
      else if(currentState === "start"){
        setPrompt(`I'm at the ${currentState} state. 
          Current time is ${(new Date()).toLocaleTimeString()}.`);
      }
      else if(currentState === "working"){
        setPrompt(`I'm at the ${currentState} state. 
          The current Pomodoro number is ${numOfPomo}.
          and there are total ${studyTime/30} pomodoros.
          Current time is ${(new Date()).toLocaleTimeString()}.`);
      }
      else{
      setPrompt(`I'm at the ${currentState} state. 
      It's  ${(new Date()).toLocaleTimeString()} 
      and we've finished ${studyTime/30} pomodoros.`)
    }

    }, [currentState]);

    // connect with Prompt API
    const [result, setResult] = useState(intro);

    useEffect(() => {
      // Safely check for ai.languageModel
      const fetchAdvice = async () => {
        try {
          if (typeof window !== 'undefined' && window.ai?.languageModel) {
            const session = await window.ai.languageModel.create({
              initialPrompts: initialPrompt
            });
            const advice = await session.prompt(prompt);
            setResult(advice);
          } else {
            // Fallback for server-side rendering or when AI is not available
            setResult(intro);
          }
        } catch (err) {
          console.error("Error fetching advice:", err);
          setResult(intro);
        }
      };

      fetchAdvice();
    }, [initialPrompt, prompt]);

    const playMessageSound = () => {
      const sound = new Audio("/message.wav"); // Path to your sound file
      sound.play().catch((err) => console.error("Sound play error:", err));
    };

    /* Updating message area */
    useEffect(()=> {
      const rawMessages = [result];
      const updatedMessages = rawMessages.map((message, index) => ({
        id: index + 1, // Unique ID for each message
        content: message.trim(), // Trim any extra whitespace
        author: "AI", 
        timestamp: new Date().toLocaleTimeString(), // Current timestamp in ISO format
        status: "received", // Default status
      }));
      setMessages(updatedMessages); // Update state with new messages
      playMessageSound();
    }, 
  [result])

    return (
      <div className="h-full" style={{paddingBottom:"2rem"}}>
     <Card 
        variant="gradient" 
        className="w-full h-full max-w-[48rem] bg-transparent flex-col justify-start"
        placeholder={undefined} 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}
      >
      <CardBody placeholder={undefined}
      onPointerEnterCapture={() => {}} 
      onPointerLeaveCapture={() => {}}>
      <Typography 
            variant="h6" 
            color="blue-gray" 
            className="mb-4 uppercase"
            placeholder={undefined}
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
          Your state📚: {currentState}
        </Typography>
        <div className="custom-chat-area">
            {messageList.map((message, index) => (
              <div 
            key={message.id}
            className="animate-slide-in-up 
            opacity-0 
            ${index > 0 ? 'delay-100' : ''} 
            transition-all 
            duration-500"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
            >
            <ChatBubble
            key={message.id}
            content={message.content}
            author={message.author}
            timestamp={message.timestamp}
            status={message.status}
            id = {message.id}
            onDelete={deleteMessage}
            />
            </div>
            ))}
        </div>
      </CardBody>
    </Card>
    </div>
    )
}

export default ChatArea;