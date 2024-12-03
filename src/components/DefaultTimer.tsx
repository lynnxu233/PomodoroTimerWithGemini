import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

const DefaultTimer: React.FC = () => {

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
          {/* Timer Display */}
          <div className="text-center mb-4">
            <p className="text-2xl font-bold mb-2">
            🍅 Gemini Pomodoro Timer: Your AI Study Buddy!
            </p>
          </div>
          <Typography className="text-center"
                  placeholder={undefined} 
                  onPointerEnterCapture={() => {}} 
                  onPointerLeaveCapture={() => {}}> 
                   Unlock Your Productivity Potential 💡 
                   </Typography>
          <Typography className="text-center"
                  placeholder={undefined} 
                  onPointerEnterCapture={() => {}} 
                  onPointerLeaveCapture={() => {}}>  
                  You &apos;re never studying alone with Gemini by your side. 🚀 
                  </Typography>
        </CardBody>
      </Card>

    </div>
  );
};

export default DefaultTimer;