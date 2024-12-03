"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Progress } from '@material-tailwind/react';

import {
    Card,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";



// Enhanced Pomodoro Configuration Interface
interface PomodoroConfig {
  workTime: number;     // in minutes
  breakTime: number;    // in minutes
  sessionsBeforeCompletion: number;
}

// passed params
interface PomorodoProps{
    studyTime: number,
    resetTrigger: number,
    setStudyTime: (time: number) => void;
    setStatus: (currStatus: string) => void; // this is used for synchronize the chat area
}

const PomodoroTimer: React.FC<PomorodoProps> = (props) => {

  const {studyTime, resetTrigger, setStudyTime, setStatus} = props; 

  // State for configuration
  const config:PomodoroConfig = {
    workTime: 30,      
    breakTime: 5,     
    sessionsBeforeCompletion: (studyTime/30)
  };


  // Timer state management
  const [currentState, setCurrentState] = useState<'start'| 'idle' | 'working' | 'shortBreak' | 'finish'>('start');
  const [timeRemaining, setTimeRemaining] = useState<number>(config.workTime * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(0);
//   const [isStart, setIsStart] =  useState<boolean>(false);
  // const [resetCount, setResetCount] = useState<number>(0);

  // Memoized configuration converter (minutes to seconds)
  const configInSeconds = useMemo(() => ({
    workTime: config.workTime * 60,
    breakTime: config.breakTime * 60,
  }), [config]);

  // Progress calculation
  const calculateProgress = useCallback(() => {
    let totalTime: number;
    switch (currentState) {
      case 'working':
        totalTime = configInSeconds.workTime;
        break;
      case 'shortBreak':
        totalTime = configInSeconds.breakTime;
        break;
      case 'finish':
        totalTime = 0;
        break;
      default:
        return 0;
    }
    return ((totalTime - timeRemaining) / totalTime) * 100;
  }, [currentState, timeRemaining, configInSeconds]);

  // Timer logic with useEffect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning && timeRemaining > 0) {
        // first time 
        if(currentState === "start"){
            setCurrentState("working");
            setStatus("working");
        }
      intervalId = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (isRunning && timeRemaining === 0) {
      // State transition logic
      switch (currentState) {

        case 'working':
            const newCompletedSessions = completedSessions + 1;
            setCompletedSessions(newCompletedSessions);
          // Determine next break type
          if (newCompletedSessions % config.sessionsBeforeCompletion === 0) {
            setCurrentState('finish');
            setStatus("finish");
            setTimeRemaining(0);
          } else {
            setCurrentState('shortBreak');
            setStatus("shortBreak");
            setTimeRemaining(configInSeconds.breakTime);
          }
          break;
        case 'shortBreak':
            setCurrentState('working');
            setStatus("working");
            setTimeRemaining(configInSeconds.workTime);
            break;
        case 'finish':
          break;
      }
    }

    return () => clearInterval(intervalId);
  }, [
    isRunning, 
    timeRemaining, 
    currentState, 
    config, 
    completedSessions, 
    configInSeconds
  ]);

  useEffect(()=>{
    // console.log("resetTrigger:"+resetTrigger);
    if(resetTrigger > 0){
      console.log("resetTrigger is triggered: "+ resetTrigger);
      resetTimer();
    }
  }, [resetTrigger])



  // Time formatting utility
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };


  // Timer control methods
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCurrentState('start');
    setStatus('start');
    setTimeRemaining(configInSeconds.workTime);
    setCompletedSessions(0);
    setStudyTime(0);
  };


  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <Card
              placeholder={undefined} 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>

        <CardBody
                placeholder={undefined} 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}>
        <Typography className="text-center"
                placeholder={undefined} 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}>Pomodoro Timer</Typography>
          {/* Timer Display */}
          <div className="text-center mb-4">
            <p className="text-2xl font-bold mb-2">
              {currentState === 'start' ? 'Start' :
              currentState === 'working' ? 'Work Time' : 
               currentState === 'shortBreak' ? 'Short Break' : 
               'Finish'}
            </p>
            <p className="text-4xl font-mono">{formatTime(timeRemaining)}</p>
          </div>

          {/* Progress Bar */}
          <Progress 
            value={calculateProgress()} 
            className="w-full mb-4 bg-stone-300"
            placeholder={undefined} 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          />

          {/* Session Counter */}
            <div className="text-center mb-4">
            {
            currentState === 'start'? ( <p> Click the button ⬇️ </p>) : 
            currentState === 'working'? ( <p>Pomodoro #{completedSessions + 1}🍅 </p>) : 
            currentState === 'shortBreak' ? (<p>Already finish {completedSessions} pomodoro</p>) : 
            (
                <p>Finish {completedSessions} pomodoros🍅 in Total </p>
            )}
            </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 mb-4">
            <Button 
              onClick={toggleTimer}
              // variant={isRunning ? 'destructive' : 'default'}
              placeholder={undefined} 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
            >
              {isRunning ? 'Pause' : 'Start'}
            </Button>
            {/* <Button 
              onClick={resetTimer}
              variant="outline"
            >
              Reset
            </Button> */}
          </div>
        </CardBody>
      </Card>

    </div>
  );
};

export default PomodoroTimer;