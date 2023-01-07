import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';

import Fade from 'react-reveal/Fade';

import wave from "../public/avatar.png";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dawson Designs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-white px-10 md-px-20 lg:px-40 dark:bg-gray-700">
        <Fade top distance="5%" duration={1500}>
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl">Dawson Designs</h1>
              <ul className="flex items-center">
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
                <li><AiFillLinkedin className="cursor-pointer text-2xl"/></li>
                <li><a href="www.macrumors.com" className=" bg-gradient-to-r from-cyan-300 to-cyan-500 text-white px-4 py-2 rounded-md ml-8">LinkedIn Page</a></li>  
              </ul>  
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Jake Dawson</h2>
              <h3 className="text-2xl py-2 md:text-3xl">Developer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                Full-Stack Developer with experience in PHP, Javascript (Plain and React/Angular), and Java
                Full-Stack Developer with experience in PHP, Javascript (Plain and React/Angular), and Java
                Full-Stack Developer with experience in PHP, Javascript (Plain and React/Angular), and Java
              </p>
            </div>
            <div className="relative bg-gradient-to-b from-teal-500 mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 mb-10">
              <Image src={wave} layout="fill" objectFit="cover" />
            </div>
          </section>
          
          <section>
            <div>
              <h3 className="text-3xl py-1">Services I Offer</h3>
              <p className="text-md ply-2 leading-8 text-gray-800"> bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</p>
              <p className="text-md ply-2 leading-8 text-gray-800"> bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={design} width={100} height={100} className="mx-auto"/>
                <h3 className="my-3">Beautiful Designs</h3>
                <p>Bla bla bla bla bla bla bla</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={code} width={100} height={100} className="mx-auto"/>
                <h3 className="my-3">Beautiful Designs</h3>
                <p>Bla bla bla bla bla bla bla</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={consulting} width={100} height={100} className="mx-auto"/>
                <h3 className="my-3">Beautiful Designs</h3>
                <p>Bla bla bla bla bla bla bla</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1">Portfolio</h3>
              <p className="text-md ply-2 leading-8 text-gray-800"> bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</p>
              <p className="text-md ply-2 leading-8 text-gray-800"> bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            </div>
          </section>
        </Fade>
        
      </main>
    </div>
  )
}
