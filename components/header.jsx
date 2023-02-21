import React from 'react'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkMode from './DarkMode'

function Header() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex my-4'>

                <div className="home mx-4 lg:mx-6 hover:text-gray-400">
                    <Link href="/">
                        <AiFillHome className="text-2xl sm:hidden" />
                        <p className="hidden sm:inline text-2xl my-2">Home</p>
                    </Link>
                </div>
                <div className="about mx-4 lg:mx-6 hover:text-gray-400">
                    <Link href="/about.js">
                        <BsFillInfoCircleFill className="text-2xl sm:hidden" />
                        <p className="hidden sm:inline text-2xl my-2">About</p>
                    </Link>
                </div>
            </div >
            <div className="darkmode mx-4 lg:mx-6">
                <DarkMode />
            </div>

        </div >
    )
}

export default Header