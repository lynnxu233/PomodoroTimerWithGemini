"use client";

import { useEffect, useState } from "react";
import StudyAdvice from "@/components/StudyAdvice"; 
import AudioComponent from "@/components/AudioComponent";
import MusicCard from "@/components/MusicCard";
import { CardWithList } from "@/components/CardWithList";
import { ProgressBar } from "@/components/ProgressBar";
import ChatArea from "@/components/ChatArea";
import VideoPlayer from "@/components/VideoPlayer";
import ProgressAnimation from "@/components/ProgressAnimation";
import TimePicker from "@/components/TimePicker";
import StartPanel from "@/components/StartPanel";

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

  const messages = [
    {
      id: 1,
      content: "Hi, this is the afternoon of Tokyo, start study with me, till the sunset",
      author: "Bonnie Green",
      timestamp: "16:46 PM",
      status: "Delivered",
    },
    {
      id: 2,
      content: "Great Job!!",
      author: "John Doe",
      timestamp: "17:47 PM",
      status: "Read",
    },
  ];

  return (

    <div className="customContainer flex min-h-screen"   style={{
      backgroundColor: "#d9d2c1", backgroundImage: "https://www.transparenttextures.com/patterns/asfalt-dark.png"
    }}>
      <div className = "video-area">
        <ProgressAnimation studytime={70}/>
        {/* <VideoPlayer /> */}
      </div>
      <div className="info-area">
        <div className="panel-area" style={{marginTop:"6rem"}}>
          <StartPanel />
        </div>
        <ChatArea messages={messages}/>
      </div>
      {/* <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5"> study room </h1> */}
      {/* <StudyAdvice results = {result} /> */}
      {/* <MusicCard /> */}
      {/* <CardWithList /> */}
    </div>

  );
}