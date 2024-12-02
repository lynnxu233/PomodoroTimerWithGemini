"use client";
import ChatBubble from "./ ChatBubble";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { example_questions, example_answers } from "@/lib/prompts";

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

    const [currentState, setCurrentState] = useState("start");
    const [messageList, setMessages] = useState(messages);

    const initialBasicPrompt = [
      {role:"system" , content: "Pretend to be my supportive study friend. Given me one sentence to me. Output should be in the format of literal template javascript string."},
      ...createShots(currentState)
    ]; 
    const [initialPrompt, setInitialPrompt] = useState(initialBasicPrompt);
    const [prompt, setPrompt] = useState(`I'm at the ${currentState} state of pomodoro timer for study. 
          It's  ${(new Date()).toLocaleTimeString()}. encourage me to start`)

    const deleteMessage = (id: number) => {
      setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
      console.log(messageList);
    };

    function createShots(state:"start"|"working"|"shortBreak"|"finish"){
      let questions = example_questions[state];
      let answers = example_answers[state];
      const shots = questions.flatMap((question, index) => 
        [{ role: "user", content: `I'm at the ${state} state of pomodoro timer for study. ${question}` },
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
      setCurrentState(status);
    }, [status]);

    // change initialPrompts(N-shot) for different status.
    useEffect(() => {
      const tempShots = [
        {role:"system" , content: "Pretend to be my supportive study friend. Given me one sentence to me. Output should be in the format of literal template javascript string."},
        ...createShots(currentState)
      ]; 
      setInitialPrompt(tempShots)
      console.log("current state is "+ currentState);
      if(currentState === "break"){
        setPrompt(`I'm at the ${currentState} state of pomodoro timer for study. 
          It's  ${(new Date()).toLocaleTimeString()} 
          and we'll going to finish ${studyTime/30} pomodoros. we've finished ${numOfPomo} pomodoros`)
      }
      else if(currentState === "start"){
        setPrompt(`I'm at the ${currentState} state of pomodoro timer for study. 
          It's  ${(new Date()).toLocaleTimeString()}. encourage me to start`);
      }
      else{
      setPrompt(`I'm at the ${currentState} state of pomodoro timer for study. 
      It's  ${(new Date()).toLocaleTimeString()} 
      and we'll going to finish ${studyTime/30} pomodoros.`)
    }

    }, [currentState]);

    // connect with Prompt API
    const [result, setResult] = useState("Loading...");
    const [error, setError] = useState(null);

    useEffect(() => {
      console.log("initial prompt: "+ initialPrompt);
      ai.languageModel
        .create({
          // temperature: 1,
          // topK: 3,
          initialPrompts: initialPrompt
        })
        .then((session) => {
          return session.prompt(prompt);
        })
        .then((advice) => {
          setResult(advice); // Update state with result
        })
        .catch((err) => {
          console.error("Error:", err);
          setError("Failed to load advice.");
        });
    }, [initialPrompt, prompt]);



    return (
      <Card className="w-full max-w-[48rem] bg-transparent flex-col justify-end">
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-4 uppercase">
          ChatBox - {currentState}
        </Typography>
        <p> {result} </p>
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
      </CardBody>
    </Card>
    )
}

export default ChatArea;

