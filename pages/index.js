import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiOutlineMail, AiOutlinePhone, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import InfiniteLooper from '../public/Components/InfiniteLooper';

import Fade from 'react-reveal/Fade';

import travel from '../public/travel.png';
import climbing from '../public/climbing.png';
import wizard from '../public/wizard.png';

import javascript from '../public/javascript.png';
import php from '../public/php.png';
import angular from '../public/angular.png';
import reactImg from '../public/react-img.png';
import mysql from '../public/mysql.png';
import firebase from '../public/firebase.png';
import java from '../public/java.png';
import android from '../public/android.png';
import slack_picture from '../public/slack_picture.jpg';
import picture from '../public/resume_picture.jpg';
import tilted_typing from '../public/tilted-typing.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark max-w-6xl mx-auto" : "bg-white max-w-6xl mx-auto"}>
      <Head>
        <title> Dawson Designs </title>
        <meta name="description" content="Dawson Designs - Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-white dark:bg-gray-700">
        <Fade top distance="5%" duration={1500}>
          <section className="pb-10 px-10 md-px-20 lg:px-40">
            <nav className="py-10 mb-8 flex flex-col justify-between align-middle md:flex-row md:justify-between md:align-middle">
              <h1 className="text-3xl text-teal-600 font-bold text-center dark:text-white">Dawson Designs</h1>
              <ul className="flex flex-row justify-center items-center mt-5 md:mt-0">
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-3xl" stroke="black" fill="black"/></li>
                <li className="mx-5"><a href="https://github.com/dawsonjs7049" target="_blank"><AiFillGithub className="cursor-pointer text-4xl" stroke="black" fill="black"/></a></li>
                <li><a href="https://www.linkedin.com/in/jakedawson906" target="_blank"><AiFillLinkedin className="cursor-pointer text-4xl" stroke="black" fill="black"/></a></li>
              </ul>  
            </nav>
            <div className="text-center">
              <h2 className="text-5xl py-2 font-medium md:text-6xl text-black dark:text-white">Jake Dawson</h2>
              <h3 className="text-2xl py-2 text-teal-600 md:text-3xl dark:text-white">Full-Stack Developer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
                Full-Stack Developer with experience in PHP, Javascript (Plain + React/Angular), Java, and more.
              </p>
            </div>
            <div className="relative bg-gradient-to-b from-teal-500 mx-auto mt-6 rounded-full w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden mb-10 shadow-xl">
              <Image src={picture} alt="personal picture" />
            </div>
          </section>
          
          <section className="px-10 py-10 md-px-20 lg:px-40 bg-sky-100 dark:bg-gray-500">
            <div>
              <h3 className="text-3xl py-1 text-black dark:text-white">Some Backstory</h3>
              <p className="text-md ply-2 leading-8 text-gray-800 dark:text-white">
                Hey there! My name is Jake Dawson. I'm a graduate from the University of Wisconsin - Eau Claire, where I majored in Software Engineering with a minor in Physics. 
                I'm a naturally curious person who enjoys interesting challenges that allow me to pick up new skills and expand on ones I may already have! While in 
                my professional career I have mostly worked by myself, I have experience working in groups and I enjoy the team problem-solving dynamic and ability to 
                watch a large project come together.
              </p>
            </div>
          </section>

          <section className="py-10 px-10 md-px-20 lg:px-40">
            <div>
              <h3 className="text-3xl py-1 text-black dark:text-white">Experience</h3>
              <p className="text-md ply-2 leading-8 text-gray-800 dark:text-white">
                When first entering the workforce, I was mentored by a fantastic developer that worked with me in a team to 
                accomplish tasks. As I grew more proficient, I have largely worked on my own, with occasional guidance, to manage 
                most of the web-based aspects of the company, accomplishing numerous projects like those listed below!
              </p>
              <br></br>
              <p className="text-md ply-2 leading-8 text-gray-800 dark:text-white">
                In the area of frameworks and languages, I've mainly focused on utilizing PHP with Javascript, jQuery, MySQL, and Bootstrap
                to create fluid web applications throughout my professional career. I've also learned the Android Java SDK to build an Android application that 
                controls machinery via Modbus, as well as the ability to interface with bluetooth components and internal APIs. 
              </p>
              <h2 class="text-xl font-bold text-center mt-10 text-black dark:text-white">Key Accomplishments</h2>
              <div class="w-full flex flex-row flex-wrap justify-evenly items-center text-black">
                <div class="p-5 m-5 w-56 h-44 rounded-md shadow-md text-center align-middle flex flex-row justify-center items-center hover:shadow-2xl dark:bg-slate-100">
                  Redesigned and implemented an ordering system
                </div>
                <div class="p-5 m-5 w-56 h-44 rounded-md shadow-md text-center align-middle flex flex-row justify-center items-center hover:shadow-2xl dark:bg-slate-100">
                  Redesigned and implemented a new scheduling system
                </div>
                <div class="p-5 m-5 w-56 h-44 rounded-md shadow-md text-center align-middle flex flex-row justify-center items-center hover:shadow-2xl dark:bg-slate-100">
                  Integrated Authorize ACH payment API into ordering system
                </div>
                <div class="p-5 m-5 w-56 h-44 rounded-md shadow-md text-center align-middle flex flex-row justify-center items-center hover:shadow-2xl dark:bg-slate-100">
                  Integrated and managed data flow between API's like Twilio, ActiveCampaign, and Zapier
                </div>
                <div class="p-5 m-5 w-56 h-44 rounded-md shadow-md text-center align-middle flex flex-row justify-center items-center hover:shadow-2xl dark:bg-slate-100">
                  Designed and implemented a customizable email template system
                </div>
                <div class="p-5 m-5 w-56 h-44 rounded-md shadow-md text-center align-middle flex flex-row justify-center items-center hover:shadow-2xl dark:bg-slate-100">
                  Managed creation and maintenance of various cron-job scripts that handled email, SMS, and data management.
                </div>
              </div>
              <p className="text-md ply-2 leading-8 text-gray-800 mt-10 dark:text-white">
                In my personal time, I've enjoyed learning how to use the React and Angular javascript frameworks to create useful
                projects like Scrooge, a finance-tracking application. I've also built a password-tracking site complete with encryption,
                a book-tracking site, and a booking site for a shared cabin. All of these applications interface with Firebase
                to enable user-data persistence and real-time interactive interfaces. 
              </p>
              <br></br>
              <p className="text-md ply-2 leading-8 text-gray-800 dark:text-white">
                I've also dabbled in simple iOS development and even small Discord bots. I enjoy trying new technology and frameworks and 
                I look forward to the opportunity to learn and grow in new areas in the future!
              </p>
            </div>
            <div className="py-10">
              <InfiniteLooper>
                  <Image src={php} className="p-5 m-2 h-36 w-36" alt="php logo" />
                  <Image src={java} className="p-5 m-2 h-36 w-36" alt="java logo" />
                  <Image src={javascript} className="p-5 m-2 h-36 w-36" alt="javascript logo"/>
                  <Image src={reactImg} className="p-5 m-2 h-36 w-36" alt="react logo"/>
                  <Image src={angular} className="p-5 m-2 h-36 w-36" alt="angular logo"/>
                  <Image src={android} className="p-5 m-2 h-36 w-36" alt="android logo"/>
                  <Image src={mysql} className="p-5 m-2 h-36 w-36" alt="mysql logo"/>
                  <Image src={firebase} className="p-5 m-2 h-36 w-36" alt="firebase logo"/>
              </InfiniteLooper>
            </div>
          </section>

          <section className="py-10 px-10 md-px-20 lg:px-40 bg-sky-100 dark:bg-gray-500">
            <div>
              <h3 className="text-3xl py-1 text-black dark:text-white">A Little About Me</h3>
              <p className="text-md ply-2 leading-8 text-gray-800 mt-3 dark:text-white">
                Beyond the work-oriented aspects of my life, I have a variety of different passions and interests. Football has been a large part of my life since I watched Aaron Rodgers
                lead the Packers to a Superbowl win, may he do so again! I enjoy exercising in my free time where I often listen to audiobooks, and occasionally I can be found reading an actual physical book.
                I also dabble in woodworking and playing the piano, though I don't recommend being too close with the latter. With my friends, you can often find me playing games or watching horror movies, our favorite.
              </p>
            </div>
            <div className="flex flex-wrap flex-row justify-evenly">
              <div className="card bg-white text-center shadow-lg p-5 rounded-xl my-5">
                <Image src={travel} className="mx-auto" alt="palm trees vacation logo"/>
                <h3 className="my-3 font-bold text-black">Traveling</h3>
                <p class="text-black">Experiencing other's culture and history is fascinating. Sunny beaches are nice too.</p>
              </div>
             
              <div className="card bg-white text-center shadow-lg p-5 rounded-xl my-5">
                <Image src={climbing} className="mx-auto" alt="person climbing logo"/>
                <h3 className="my-3 font-bold text-black">Exercise</h3>
                <p class="text-black">The gym, and more recently bouldering, are a favorite time-sink of mine.</p>
              </div>

              <div className="card bg-white text-center shadow-lg p-5 rounded-xl my-5">
                <Image src={wizard} className="mx-auto" alt="wizard image"/>
                <h3 className="my-3 font-bold text-black">Books</h3>
                <p class="text-black">I love a good fantasy story, only ask for a recommendation if you're ready for 20!</p>
              </div>
            </div>
          </section>

          <section className="py-10 px-10 md-px-20 lg:px-40">
            <div>
              <h3 className="text-3xl py-1 text-black dark:text-white">Projects</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div>
                <h2 className="text-2xl text-black dark:text-white">Scrooge</h2>
                <p className="mb-2 text-black dark:text-white">A personal-finance application built in Angular with a Firebase backend.</p>
                <video controls src={"/scrooge.mp4"} className="rounded-md shadow-lg hover:shadow-2xl"></video>
              </div>
              <div>
                <h2 className="text-2xl text-black dark:text-white">The Pigeon Koop</h2>
                <p className="mb-2 text-black dark:text-white">A React website with a Firebase backend for a shared hunting cabin.</p>
                <video controls src={"/cabin.mp4"} className="rounded-md shadow-lg hover:shadow-2xl"></video>
              </div>
              <div>
                <h2 className="text-2xl text-black dark:text-white">Bookshelf</h2>
                <p className="mb-2 text-black dark:text-white">A React website with a Firebase backend for tracking and organizing read books.</p>
                <video controls src={"/bookshelf.mp4"} className="rounded-md shadow-lg hover:shadow-2xl"></video>
              </div>
              <div>
                <h2 className="text-2xl text-black dark:text-white">Tilted Typing</h2>
                <p className="mb-2 text-black dark:text-white">An Angular site where you can test your typing skills, click to try. Turn tilted mode on for some fun!</p>
                <a href="https://tiltedtyping.netlify.app/home" target="_blank"><Image src={tilted_typing} class="rounded-md shadow-lg hover:shadow-2xl" /></a>
              </div>
            </div>
          </section>

          <section className="h-20 flex flex-col justify-center px-10 md-px-20 lg:px-40 bg-gray-600 dark:bg-gray-800">
            <div className="w-100 flex flex-col justify-evenly align-middle md:flex-row">
              <div className="flex flex-row align-middle mx-auto"><AiOutlineMail className="text-2xl mr-1" /><a href="mailto:dawson9060@gmail.com" className="text-blue-400">dawson9060@gmail.com</a></div>
              <div className="flex flex-row align-middle mx-auto mt-2 md:mt-0"><AiOutlinePhone className="text-2xl mr-1" /><a href="tel:17158947876" className="text-blue-400">715-894-7876</a></div>
            </div>
          </section>
        </Fade>
        
      </main>
    </div>
  )
}
