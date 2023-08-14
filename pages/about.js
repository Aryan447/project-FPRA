import '../app/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from "@/components/Navbar"
import Image from "next/image"
import instaLogo from '../images/insta-logo.png'
import Xlogo from '../images/X-logo.png'
import Link from 'next/link'

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="ml-5 mt-24">
                    <h1 className="font-inter text-xl font-bold">DM us for more updates</h1>
                <div className="flex mt-10">
                    <Image className='mr-1 h-7 w-7' src={instaLogo} />
                    <Link className="font-inter text-xl" href='https://www.instagram.com/ar.yan_' >ar.yan_</Link>
                    <Image className='mr-1 ml-10 h-7 w-7' src={Xlogo} />
                    <Link className="font-inter text-xl"  href='https://x.com/aryan_447'>Aryan_447</Link>
                </div>
                <div className="flex">
                    <Image className='mr-1 h-7 w-7' src={instaLogo} />
                    <Link className="font-inter text-xl"  href='https://www.instagram.com/ineetesh_19'>ineetesh_19</Link>
                </div>
            </div>
        </div>
    )
}
