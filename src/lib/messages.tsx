export type Message = {
  id: number;
  content: string;
  author: string;
  timestamp: string;
  status: string;
};

export const guidingMessages = [
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


export function notifications(mode:string, pomodoro?:number) {
    if (mode === "break"){
        return "Break Time "
    }
    else if(mode === "focus"){
        return `You are at Pomodoro No. ${pomodoro}!!`
    }
    else{
        return "Finish! You did it";
    }
}