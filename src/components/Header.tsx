import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header(){
    return (
        <div className= 'flex justify-between items-center p-3 mx-auto bg-neutral-50'> 
            <div className= 'flex gap-4' style={{marginLeft:"3rem"}}> 
                <MenuItem title="About Gemini Pomodoro Timer 🍅" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>
            <div className= 'flex items-center gap-4' style={{marginRight:"3rem"}}>
            <Link href= {'/'} className= 'flex gap-1 items-center'> 
                <span className= 'text-2xl font-bold py-1 py-2 rounded-lg text-black' style={{padding:"1rem", backgroundColor: '#ece9e0'}}> Gemini Pomodoro Timer </span>
            </Link>
            </div>
        </div>
    );
}