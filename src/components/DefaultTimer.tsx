import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

const DefaultTimer: React.FC = () => {

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <Card>

        <CardBody>
        <Typography className="text-center">
        This is Gemini assisted pomodoro timer🍅 
        Pomodoro Timer Instruction</Typography>
          {/* Timer Display */}
          <div className="text-center mb-4">
            <p className="text-2xl font-bold mb-2">
              Choose the time span and start to self study alone!!!
            </p>
          </div>

         
        </CardBody>
      </Card>

    </div>
  );
};

export default DefaultTimer;