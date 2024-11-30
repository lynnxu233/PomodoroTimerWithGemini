interface Timerprops {
    counter: number;
}


export default function Timer(props:Timerprops){

    const {counter} = props;

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                <span style={{"--value":15}}></span>
                </span>
                days
            </div>
        <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
            <span style={{"--value":10}}></span>
            </span>
            hours
        </div>
        <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
            <span style={{"--value":24}}></span>
            </span>
            min
        </div>
        <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
            <span style={{"--value":{counter}}}></span>
            </span>
            sec
        </div>
</div>
    );
}