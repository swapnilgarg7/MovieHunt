import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" text-teal-800 text-3xl">Movie Hunt</div>
  )
}
