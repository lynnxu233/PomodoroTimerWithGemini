import { Progress } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProgressBarProp {
  studytime: number;
}

export function ProgressBar(props:ProgressBarProp) {
  const {studytime} = props;
    return (
      <Card className="w-4/5 max-w-[48rem] flex-row bg-transparent justify-end">
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-4 uppercase">
          Current Process
        </Typography>
        <Typography variant="h4" color="cyan" className="mb-2">
          You&apos;re in the 3rd out of total 4 Poromodos.
        </Typography>
        <Progress value={studytime} size="lg" color="amber"/>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Skip to the next one
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
   
  