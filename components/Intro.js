import Image from "next/image"

export default function Intro() {
  return (
    <div className="mt-20 ml-4 md:mt-56 md:ml-12 font-extrabold text-4xl">
      <div className="flex">
        {/* <h1 className="gradient gradient-text font-inter md:text-5xl">Fake Product's Reviews Analyzer</h1> */}
        <h1 className="gradient font-inter md:text-5xl">Project FPRA</h1>
      </div>
      {/* <h1 className="font-inter mt-2 text-xl">Spotlights authenticity, unmasking opinions</h1> */}
      {/* <h1 className="font-inter text-xl">Fake reviews? It knows the truth.</h1> */}
      <h1 className="font-inter text-xl">Tired of Fake Reviews? We got you covered.</h1>
      <h1 className="font-inter text-xl">Coming Soon</h1>

    </div>
  )
}
