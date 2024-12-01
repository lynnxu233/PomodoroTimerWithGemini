"use client";

import { useEffect, useState } from "react";

import ChatArea from "@/components/ChatArea";
import ProgressAnimation from "@/components/ProgressAnimation";
import StartPanel from "@/components/StartPanel";

import {guidingMessages, Message} from "@/lib/messages";


export default function Home() {

  // const [result, setResult] = useState("Loading...");
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   ai.languageModel
  //     .create({
  //       temperature: 1,
  //       topK: 3,
  //     })
  //     .then((session) => {
  //       return session.prompt("Give me a warm encouragement on my study.");
  //     })
  //     .then((advice) => {
  //       setResult(advice); // Update state with result
  //     })
  //     .catch((err) => {
  //       console.error("Error:", err);
  //       setError("Failed to load advice.");
  //     });
  // }, []);

  const messages:Message[] = guidingMessages;

  const [studyTime, setStudyTime] = useState(0); // minutes

  return (

    <div className="customContainer flex min-h-screen"   style={{
      backgroundColor: "#d9d2c1", backgroundImage: "https://www.transparenttextures.com/patterns/asfalt-dark.png"
    }}>
      <div className = "video-area">
        <ProgressAnimation studyTime={studyTime}/>
      </div>
      <div className="info-area">
        <div className="panel-area h-1/2" style={{marginTop:"6rem"}}>
          <StartPanel onStart={setStudyTime}/>
        </div>
        <div className="h-1/2" style={{marginBottom:"5rem"}}>
        <ChatArea messages={messages}/>
        </div>
      </div>
    </div>

  );
}