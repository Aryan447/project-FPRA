import Image from 'next/image'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <head>
      <title>Project FPRA</title>
    </head>
    <body>
    <Navbar/>
    <Intro/>
    </body>
    </>
  )
}
