import { CardHeader, Progress } from "@material-tailwind/react";
import {
    Card,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
interface ProgressAnimationProps{
    studytime: Number;
}

export default function ProgressAnimation(props: ProgressAnimationProps){
    const {studytime} = props;

    return (
        <Card className="w-full max-w-[48rem] flex-col bg-neutral-300 justify-start">
        <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-4 uppercase">
          Current Process
        </Typography>
        {/* <div style={{margin:"3rem"}}>
        <Progress studytime={studytime} size="lg" color="amber" className="w-full animate-pulse"/>
        </div> */}
        <div className="relative mb-5 h-6 rounded-full bg-gray-200">
        <div className="h-6 rounded-full bg-orange-300" style={{width: `${studytime}%`}}></div>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900"> {`${studytime}%`}</span>
        </div>

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
