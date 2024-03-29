import React from 'react'
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { CgSoftwareDownload } from "react-icons/cg";
export default function Home() {
  return (
    <div className="w-full dark:bg-gradient-to-r from-darkprimary/30 to-darksecondary h-screen">
        <div className="container flex flex-col md:flex-row justify-center items-center md:gap-32">
          <div className='order-2 md:order-1'>
            <Image
              src="/assets/images/varun.jpeg"
              alt="Varun's Image"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
          <div className="container flex flex-col justify-center md:h-screen order-1 md:order-2">
            <h1 className="mt-20 md:mt-0 text-xl md:text-3xl my-3">Hello, I am</h1>
            <h2 className="text-3xl md:text-6xl ">
              Varun{" "}
              <span className="text-primary dark:text-darkprimary font-bold">Raja</span>
            </h2>
            <h3 className="text-3xl md:text-6xl my-3 ">And <span className='text-primary dark:text-darkprimary font-bold'>I'm</span></h3>
            <div className="text-3xl md:text-6xl my-3 text-primary dark:text-darkprimary font-bold">
              {/* <Typewriter
                options={{
                  strings: ["FrontEnd Developer", "BackEnd Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              /> */}
              <h5>FullStack Developer</h5>
            </div>
            <button className="my-3 bg-primary dark:bg-darkprimary rounded-full w-40 p-3 text-white hover:bg-secondary">
              <a
                href="/Varunraja(Resume).pdf"
                download
                className="flex gap-2 items-center justify-center"
              >
                <span>Get Resume</span>
                <CgSoftwareDownload className="w-6 h-6" />
              </a>
            </button>
          </div>
        </div>
      </div>
  )
}
