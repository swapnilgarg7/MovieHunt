import React from 'react'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkMode from './DarkMode'

function Header() {
    return (
        <div className='flex items-center justify-between '>
            <div className='flex my-4'>

                <div className="home mx-4 lg:mx-6 hover:text-gray-400">
                    <Link href="/">
                        <AiFillHome className="text-2xl sm:hidden" />
                        <p className="hidden sm:inline text-2xl my-2">Home</p>
                    </Link>
                </div>
                <div className="about mx-4 lg:mx-6 hover:text-gray-400">
                    <Link href="/about">
                        <BsFillInfoCircleFill className="text-2xl sm:hidden" />
                        <p className="hidden sm:inline text-2xl my-2">About</p>
                    </Link>
                </div>
            </div >
            <div className='flex my-4 items-center'>
                <div className="dark-mode mx-4 lg:mx-6 text-2xl">
                    <DarkMode />
                </div>
                <div className="moviehunt mx-4 lg:mx-6 text-2xl p-2 bg-yellow-400 dark:bg-gray-900 dark:text-yellow-400">
                    MovieHunt
                </div>
            </div>
        </div >
    )
}

export default Header