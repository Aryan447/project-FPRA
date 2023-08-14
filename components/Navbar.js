"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="flex space-x-5 mt-2 font-extrabold font-inter">
      <Link
        className={`text-sm ml-3 ${hoveredLink === "home" ? "gradient" : ""}`}
        href="/"
        onMouseEnter={() => setHoveredLink("home")}
        onMouseLeave={() => setHoveredLink(null)}
      >
        Home
      </Link>
      <Link
        className={`text-sm ${hoveredLink === "about" ? "gradient" : ""}`}
        href="/about"
        onMouseEnter={() => setHoveredLink("about")}
        onMouseLeave={() => setHoveredLink(null)}
      >
        About
      </Link>
      {/* <Link className='text-sm' href='#'>Contact</Link> */}
    </div>
  );
}
