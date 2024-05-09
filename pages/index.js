import Head from "next/head";
import React, { useRef } from "react";
// Logos & Icons
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillFile,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { 
  FaRegFileCode, 
  FaGithub, 
  FaLinkedin, 
  FaPython, FaJava, FaJs, FaReact,  } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb"; import { SiCplusplus } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { SiQt } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import { FiArrowRight } from "react-icons/fi"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useState } from "react";
import {  } from "react-icons/fa";
import doot from "../public/doot.png";
import metalBird from "../public/metalBird.png";
import route66 from "../public/route66.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Proj1img from "../public/metalBird.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const HoverLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8 min-h-screen overflow-x-hidden">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Project~ 1"
          subheading="Learn what we do here"
          imgSrc="/metalBird.png"
          href="#"
        />
        <Link
          heading="Project~ 2"
          subheading="We work with great people"
          imgSrc="/metalBird.png"
          href="#"
        />
        <Link
          heading="Project~ 3"
          subheading="Our work speaks for itself"
          imgSrc="/metalBird.png"
          href="#"
        />
        <Link
          heading="Project~ 4"
          subheading="We want cool people"
          imgSrc="/metalBird.png"
          href="#"
        />
        <Link
          heading="Project~ 5"
          subheading="Incase you're bored"
          imgSrc="/metalBird.png"
          href="#"
        />
      </div>

    </section>
  )
};

const Link = ({heading, subheading, imgSrc, href}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const top = useTransform(ySpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(xSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMovement = (event) => {
    // console.log("DOTTTYYYY")
      const rectangle = ref.current.getBoundingClientRect();
      // console.log(event.clientX, event.clientY);
      const width = rectangle.width;
      const height = rectangle.height;

      const mouseX = event.clientX - rectangle.left;
      const mouseY = event.clientY - rectangle.top;

      const xPercent = mouseX / width - 0.5;
      const yPercent = mouseY / height - 0.5;

      // console.log(xPercent, yPercent);

      x.set(xPercent);
      y.set(yPercent);

  }
  return (
  <motion.a
  ref={ref} 
    href={href} 
    initial="initial"
    onMouseMove={handleMouseMovement}
    whileHover="whileHover"
    className="group relative flex items-center justify-between border-b-2 border-white dark:border-black py-4 transition-colors duration-500 hover:border-neutral-950 dark:hover:border-neutral-50 md:py-8 text-black dark:text-gray-500"> 
    <div>
      <motion.span 
        variants={{
          initial:{
            x: 0
          },
          whileHover:{
            x: -16
          },
        }}
        transition={{
          type: "spring",
          delayChildren: .25,
          staggerChildren: 0.075
        }}
        className="relative z-10 block text-2xl font-bold text-gray-500 dark:text-gray-500 transition-colors duration-500 md:text-6xl group-hover:text-neutral-950 dark:group-hover:text-neutral-50">
        {heading.split("").map((val, index) => {
            return (
              <motion.span 
                variants={{
                  initial:{
                    x: 0
                  },
                  whileHover:{
                    x: 16,
                  },
                }}
                transition={{
                  type: "",
                }}
                className="inline-block" 
                key={index}
              >
                {val}
              </motion.span>);
        })}
      </motion.span>
      <span className="relative z-10 mt-2block text-gray-500 dark:text-gray-500  transition-colors duration-500  group-hover:text-neutral-950 dark:group-hover:text-neutral-50">
        {subheading}
      </span>
    </div>
    <motion.img
    variants={{
      initial:{
        scale: 0,
        // opacity,
        rotate: "90deg"
      },
      whileHover:{
        scale: 1,
        // opacity,
        rotate: "-20deg"
      },
    }}
    style={{
      top,
      left,
      translateX: "-50%",
      translateY: "-50%"
    }}
    transition={{
      type: "spring"
    }}
      src= {imgSrc}
      className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
      alt={`Image representing Link to ${heading}`}
    />

    <motion.div 
      variants={{
        initial:{
          x: "25%",
          opacity:0,
        },
        whileHover:{
          x:"0%",
          opacity:1,
        },
      }}
      transition={{
        // duration: 0.5,
        // ease: "backInOut",
        type: "spring"
      }}
      className="relative z-10 p-4">
      <FiArrowRight className="text-5xl text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-neutral-50"/>
    </motion.div>
  </motion.a>
  );
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Daniel Kolawole Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/D_36573.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-black md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-500">DottyV - Great Developer come Fall</h1>
            <ul className="flex items-center">
              <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}className="dark:fill-white cursor-pointer text-3xl ml-2"/>
              </li>
              <li>
              <FaRegFileCode className="dark:dark:fill-white cursor-pointer text text-3xl ml-4" href="#"/>
              </li>
              <li>
              <FaLinkedin className="dark:dark:fill-white cursor-pointer text text-3xl ml-4" href="#"/>
              </li>
              <li>
              <FaGithub className="dark:dark:fill-white cursor-pointer text text-3xl ml-4" href="#"/>
              </li>
              <li>
                <a className="bg-gradient-to-t from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-lg ml-4" href="#">Resume</a>
                </li>
              <li>
                <a className="bg-gradient-to-t from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-lg ml-4" href="#">LinkedIn</a>
                </li>
              <li>
                <a className="bg-gradient-to-t from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-lg ml-4" href="#">GitHub</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font medium md:text-6xl">Daniel Kolawole</h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-500">Real Life Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-500 dark:text-gray-300 md:text-xl max-w-xl mx-auto">We meet to Part and Part to meet :) </p>

          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-6"> 
            <AiFillTwitterCircle className="dark:fill-white"/>
            <AiFillLinkedin className="dark:fill-white"/>
            <AiFillGithub className="dark:fill-white"/>
            <AiFillFile className="dark:fill-white"/>
          </div>
          <div className="relative bg-gradient-to-b from from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image src={doot} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-500 font-burtons">Languages/Tools</h3>
            <p className="text-md py-5 leading-8 text-gray-500">
              Atp working on making it <span className="text-teal-500">Everything</span> ,but for now <span className="text-teal-500">LeetCode</span>:)
            </p>
            <p className="text-md py-2 leading-8 text-gray-500 dark:text"> Doesnt limit me tho as i am Dotty ;)</p>
          </div>
          <div className="lg:flex gap-10 items-center justify-center grid grid-auto-fit overflow-auto">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700 ">
              <FaPython className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-blue-600" href="#" />
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">Python</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <FaJava className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-red-600" href="#"/>
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">Java</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <BiLogoPostgresql className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-blue-400" href="#"/>  
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">PostgreSQL</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <SiTailwindcss className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-blue-300" href="#"/>
              
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">TailwindCSS</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <SiCplusplus className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-blue-800" href="#"/>
              
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">C++</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <FcLinux className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150" href="#"/>
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">FcLinux</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <FaGitAlt className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-orange-700" href="#"/>
              
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">Git</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <TiHtml5 className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-orange-600" href="#"/>
              
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">HTML</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <SiQt className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-green-400" href="#"/>
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">Qt</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <IoLogoJavascript className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-yellow-300" href="#"/>
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">JavaScript</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black dark:shadow-gray-700">
            <FaReact className="dark:fill-gray-500 cursor-pointer text text-5xl m-auto transition duration-300 ease-in-out hover:scale-150 md:hover:fill-blue-400" href="#"/>
              <h3 className="text-lg font-medium font-burtons pt-8 pb-2 dark:text-gray-500">React.js</h3>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-500 font-burtons">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-500">
              Atp working on making it <span className="text-teal-500">Everything</span> ,but for now <span className="text-teal-500">LeetCode</span>:)
            </p>
            <p className="text-md py-2 leading-8 text-gray-500 dark:text"> Doesnt limit me tho as i am Dotty ;)</p>
          </div>
          <div className="flex flex-col gap-10 py10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <div className="flex flex-col gap-10 py10 lg:row lg:"><Image src={web1} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="flex flex-col gap-10 py10 lg:row lg:"><Image src={web2} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="flex flex-col gap-10 py10 lg:row lg:"><Image src={web3} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="flex flex-col gap-10 py10 lg:row lg:"><Image src={web4} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="flex flex-col gap-10 py10 lg:row lg:"><Image src={web5} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/></div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="flex flex-col gap-10 py10 lg:row lg:"><Image src={web6} className="rounded-lg object-cover " width={'100%'} height={'100%'} layout="responsive"/></div>
            </div>
          </div>
{/* ```````` */}
      <section className=" p-4 md:p-8 rounded-lg dark: overflow-x-hidden overflow-y-hidden">
          <div className="mx-auto max-w-5xl">
            <h3 className="text-3xl py-1 dark:text-gray-500 font-burtons">Projects</h3>
            <Link
              heading="Project~ 1"
              subheading="Learn what we do here"
              imgSrc="/metalBird.png"
              href="#"
            />
            <Link
              heading="Project~ 2"
              subheading="We work with great people"
              imgSrc="/metalBird.png"
              href="#"
            />
            <Link
              heading="Project~ 3"
              subheading="Our work speaks for itself"
              imgSrc="/metalBird.png"
              href="#"
            />
            <Link
              heading="Project~ 4"
              subheading="We want cool people"
              imgSrc="/metalBird.png"
              href="#"
            />
            <Link
              heading="Project~ 5"
              subheading="Incase you're bored"
              imgSrc="/metalBird.png"
              href="#"
            />
          </div>

      </section>
{/* ```````` */}

        </section>
      </main>
    </div>
  );
}

