"use client";

import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';

function DarkMode() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []); //to prevent conflict with server-side rendering 

    const currentTheme = theme === 'system' ? systemTheme : theme;


    return (
        <>
            {mounted && (currentTheme === 'dark' ? (
                <MdLightMode
                    className="text-2xl cursor-pointer hover:text-amber-500"
                    onClick={() => setTheme('light')}
                />
            ) : (
                <BsFillMoonFill
                    className="text-2xl cursor-pointer hover:text-amber-500"
                    onClick={() => setTheme('dark')}
                />
            ))}
        </>
    )
}

export default DarkMode