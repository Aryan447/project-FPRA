import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex space-x-5 mt-2 font-extrabold font-inter">
        <Link className='text-sm ml-3' href='#'>Home</Link>
        <Link className='text-sm' href='#'>About</Link>
        <Link className='text-sm' href='/projects'>Projects</Link>
        <Link className='text-sm' href='#'>Contact</Link>
    </div>
  )
}
