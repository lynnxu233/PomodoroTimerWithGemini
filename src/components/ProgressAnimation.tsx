"use client";
import React, { useState, useEffect } from "react";
import {notifications} from "@/lib/messages";

import {
    Card,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Countdown from "./CountDown";

interface ProgressAnimationProps{
    studyTime: Number;
}

export default function ProgressAnimation(props: ProgressAnimationProps){
    const {studyTime} = props;
    const poromodoDuration = 30*60; // convert to seconds
    const breakDuration = 5*60;
    const totalPomodoro = studyTime.valueOf()*60/poromodoDuration;
  
    const [numberOfPoromodo, setNumOfPoromodo] = useState(0); // the total number of poromodo

    const [timeLeft, setTimeLeft] = useState(poromodoDuration); 
    const [progress, setProgress] = useState(0);
    const [notification, setNotification] = useState("Start your study time!");
    const [mode, setMode] = useState("focus"); // "focus", "break", "finish"

    useEffect(() => {
      console.log(`studyTime: ${studyTime},totalPomodoro: ${totalPomodoro}, numberOfPoromodo: ${numberOfPoromodo}, timeLeft: ${timeLeft}, mode: ${mode}`);

      if (numberOfPoromodo > 0 && timeLeft > 0 && mode=="focus") {

        setNotification(notifications(mode, totalPomodoro - numberOfPoromodo+1));

        const interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
          if (mode === "focus") {
            setProgress(((poromodoDuration - timeLeft) / (poromodoDuration)) * 100);
          }
          if (timeLeft === 0) {
            setNumOfPoromodo((prev) => prev - 1);
            numberOfPoromodo===0 ? setMode("finish"):setMode("break");
            clearInterval(interval); 
          }
        }, 1000);
        return;
      } else if (numberOfPoromodo > 0 && timeLeft === 0 && mode === "break") {
        setNotification(notifications(mode));

        setTimeLeft(breakDuration); 
        setProgress(0);

        const interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1); 
          if(timeLeft === 0){
            setMode("focus");
            clearInterval(interval); 
          }
        }, 1000);

      } else if (numberOfPoromodo === 0 && mode === "finish") {
        setNotification(notifications(mode));
      }
    }, [timeLeft, mode, studyTime]);


    return (
        <Card className="w-full max-w-[48rem] flex-col bg-transparent justify-start">
        <CardBody>

        {/* Notofications */}
        <Typography variant="h6" color="blue-gray" className="mb-4 uppercase">
          {notification}
        </Typography>

        {/* Countdown Area */}
        <Countdown />
        
        {/* Progress Bar area */}
        <div className="relative mb-5 h-6 rounded-full bg-gray-200">
        <div className="h-6 rounded-full bg-orange-300" style={{width: `${progress}%`}}></div>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900"> {`${progress}%`}</span>
        </div>

        {/* Button */}
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Palse 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
          Skip the Break Time
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
    );
}
