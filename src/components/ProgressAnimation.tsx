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
    const poromodoDuration = 1*60; // convert to seconds
    const breakDuration = 1*60;
    const totalPomodoro = studyTime.valueOf()*60/poromodoDuration;

    const [numberOfPoromodo, setNumOfPoromodo] = useState(totalPomodoro); // the total number of poromodo

    const [timeLeft, setTimeLeft] = useState(poromodoDuration); 
    const [progress, setProgress] = useState(0);
    const [notification, setNotification] = useState("Start your study time!");
    const [mode, setMode] = useState("focus"); // "focus", "break", "finish"

  useEffect(() => {
    setNumOfPoromodo(Math.floor(studyTime / (poromodoDuration / 60)));
  }, [studyTime]);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Recalculate numberOfPoromodo when studyTime changes
    setNumOfPoromodo(Math.floor(studyTime / (poromodoDuration / 60)));

    if (numberOfPoromodo > 0) {
      // Focus mode with pomodoro countdown
      if (mode === "focus" && timeLeft > 0) {
        setNotification(`Focus: ${numberOfPoromodo} pomodoros remaining.`);

        interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1); // Update time left every second
          setProgress((prev) => Math.round(((poromodoDuration - (timeLeft - 1)) / poromodoDuration) * 100)); // Update progress based on remaining time

          // When timeLeft reaches 0, end the pomodoro and switch to break mode
          if (timeLeft === 1) {
            setProgress(100); // Ensure 100% progress when time is up
          }

          if (timeLeft === 0) {
            setNumOfPoromodo((prev) => prev - 1); // Decrease the number of pomodoros
            setProgress(0);
            setMode("break"); // Switch to break mode after focus ends
            setTimeLeft(breakDuration); // Set time left for break
            clearInterval(interval); // Clear the interval
            console.log(`studyTime: ${studyTime},numberOfPoromodo: ${numberOfPoromodo}, timeLeft: ${timeLeft}, mode: ${mode}`);
          }
        }, 1000);
      }

      // Break mode after pomodoro ends
      else if (mode === "break" && timeLeft === 0) {
        setNotification("Take a break!");

        interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1); // Countdown break time

          if (timeLeft === 0) {
            setMode("focus"); // Switch back to focus mode after break
            setTimeLeft(poromodoDuration); // Reset time for focus mode
            clearInterval(interval); // Clear the interval
          }
        }, 1000);
      }
    } else if (numberOfPoromodo === 0 && mode === "finish") {
      setNotification("All pomodoros completed!");
    }

    return () => clearInterval(interval); // Cleanup the interval on mode change or unmount
    }, [timeLeft, numberOfPoromodo, mode, studyTime]);

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
