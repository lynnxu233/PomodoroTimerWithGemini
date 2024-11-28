"use client";

import {MdLightMode, MdDarkMode} from "react-icons/md";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkModeSwitch(){

    const [mounted, setMounted] =  useState(false);
    const {theme, setTheme, systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme: theme;

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(()=> {setMounted(true)
    }, []);

        return (
        <div>
        {
            mounted && 
            (currentTheme === 'dark'? 
            (<MdLightMode className= 'text-xl cursor-pointer hover: text-amber-300' onClick={()=>{setTheme("light");}} />): 
            (<MdDarkMode className= 'text-xl cursor-pointer hover: text-amber-300' onClick={()=>{setTheme("dark");}} />)
            )
        }
        </div>
    );
}


