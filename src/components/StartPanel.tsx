"use client";
import { useState } from "react";
import TimePicker from "./TimePicker"
import {
    Card,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  

export default function StartPanel({ onStart }){
  const [studyTime, setStudyTime] = useState(30);
  const handleStart = () => {
    if (studyTime > 0) {
      onStart(studyTime);
    }
  };

    return (
          <Card className="w-full max-w-[48rem] flex-col bg-transparent justify-start">
            <CardBody>
              <Typography variant="h4" color="cyan" className="mb-2">
                Start Your Journey with me 😊
              </Typography>
              <div>
              <TimePicker onSelect = {setStudyTime}/>
              </div>
              <a href="#" className="inline-block">
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
              </a>
            </CardBody>
          </Card>

    );
} 