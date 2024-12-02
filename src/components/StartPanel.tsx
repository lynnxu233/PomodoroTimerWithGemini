"use client";
import { useState } from "react";
import TimePicker from "./TimePicker"
import {
    Card,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

  

export default function StartPanel({ onStart, onReset}){
  const [studyTime1, setStudyTime1] = useState(0);
  const [resetSelection, setResetSelection] = useState(0);

  const handleStart = () => {
    if (studyTime1 > 0) {
      console.log("click start in start")
      onStart(studyTime1);
      onReset(0);
    }
  };

  const handleReset = ()=> {
    console.log("click reset in start")
    onReset(prev => prev+1);
    setResetSelection(prev => prev+1);
  }


    return (
          <Card className="w-full max-w-[48rem] flex-col bg-transparent justify-start">
            <CardBody>
              <Typography variant="h4" color="black" className="mb-2">
                Start Your Journey with me 😊
              </Typography>
              <div>
              <TimePicker onSelect = {setStudyTime1} resetSelection = {resetSelection}/>
              </div>
              <div className="flex flex-row" >

                <Button variant="text" className="flex items-center gap-2" style={{marginTop:"1rem"}} 
                onClick={handleStart}>
                  Start
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

              <Button variant="text" className="flex items-center gap-2" style={{marginTop:"1rem"}} 
                onClick={handleReset}>
                  Reset

                </Button>

              </div>

            </CardBody>
          </Card>

    );
} 