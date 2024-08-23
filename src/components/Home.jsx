import React from "react";
import { ReactTyped } from "react-typed";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import pi from '../assets/landing.png';
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex flex-col md:flex-row">
        <div className="md:w-[60%] mt-8 md:mt-24 space-y-2 order-2 md:order-1">
          <span className="text-2xl">Hello,</span>
          <div className="flex space-x-1 text-2xl md:text-4xl ">
            <h3>I am Mohan</h3>
            {/* <span className="text-red-700 font-bold">Developer</span> */}

            <ReactTyped
          className="text-red-700 font-bold duration-500"
          strings={["Web Developer.","Coder.","Programmer.","DSA.","Full Stack Java."]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

          </div>
          <br />
          <p className="text-sm md:text-md text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            voluptatum dolore aliquid mollitia, recusandae, laudantium porro
            dolorum eum doloribus fuga, sapiente non nihil dicta illum. Facere
            dolore velit natus asperiores!
          </p>
          <br />
          {/* Social Media Icons */}
          <div className="flex flex-col md:flex-row space-y-10 border-[2px] border-red-600 p-5 items-center md:space-y-0 justify-between my-20 ">
            <div className="mt-16">
            <h1 className="font-bold">Avaliable On</h1>
            <div className="mt-3">
              <ul className="flex space-x-5  ">
                <li className="hover:scale-125 duration-300 hover:text-blue-800 cursor-pointer">
                    <a href="https://www.facebook.com/login/" target="_blank">
                  <BsFacebook size={20} />
                  </a>
                </li>
                <li className="hover:scale-125 duration-300 hover:text-blue-800 cursor-pointer">
                <a href="https://www.linkedin.com/in/mohan-parshuram-yadav-38190b219/" target="_blank">
                  <FaLinkedin size={20} />
                  </a>
                </li>
                <li className="hover:scale-125 duration-300 hover:text-red-600 cursor-pointer">
                  
                  <a href="https://www.youtube.com/" target="_blank">
                  <IoLogoYoutube size={20} />
                  </a>
                </li>
                <li className="hover:scale-125 duration-300 cursor-pointer">
                  <a href="https://github.com/MohanXprofessor" target="_blank">
                  <FaSquareGithub size={20} /></a>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="">
          <h1 className="font-bold">Currently Working On</h1>
            <div className="mt-3">
              <ul className="flex space-x-5 ">
                <li>
                  <SiMongodb size={20} className="text-xl md:text-3xl cursor-pointer border-[1px] size-6 hover:scale-125 duration-300 hover:text-green-800 hover:bg-black rounded-full" />
                </li>
                <li>
                  <SiExpress size={20} className="text-xl md:text-3xl  cursor-pointer border-[1px] size-6 hover:scale-125 duration-300 hover:text-yellow-300  hover:bg-black rounded-full"/>
                </li>
                <li>
                  
                  
                  <FaReact size={20} className="text-xl md:text-3xl cursor-pointer border-[1px] size-6 hover:scale-125 duration-300 hover:text-blue-600 hover:bg-black rounded-full" />
                </li>
                <li>
                  <FaNodeJs size={20} className="text-xl cursor-pointer md:text-3xl border-[1px] size-6 hover:scale-125 duration-300 hover:text-yellow-300 hover:bg-black rounded-full" />
                </li>
              </ul>
            </div>
          </div>
            </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-14 mt-8 order-1">
                <img src={pi} alt="Image web developer"  className="h-[330px] w-[330px] md:h-[400px] md:w-[400px] items-center drop-shadow-2xl rounded-full"/>
        </div>
      </div>
    </>
  );
}

export default Home;
