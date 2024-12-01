import React, { useState, useEffect } from "react";

interface CountdownProps{
  startDate: Date;
  duration: number;
}

const Countdown = (props:CountdownProps) => {
  const {startDate, duration} = props;
  
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update countdown logic here
  useEffect(() => {
    const targetDate = new Date("2024-12-01T23:59:59"); // Set your target date
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
      } else {
        setTime({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full rounded-2xl flex gap-9 flex-col items-center justify-center bg-transparent bg-center"
    >
      <div className="flex items-start justify-center w-full gap-1.5 count-down-main" style={{marginBottom:"2rem"}}>
        {[ "hours", "minutes", "seconds"].map((unit, index) => (
          <div className="timer" key={index}>
            <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className="countdown-element font-manrope font-semibold text-2xl text-white text-center">
                {time[unit]}
              </h3>
              <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;