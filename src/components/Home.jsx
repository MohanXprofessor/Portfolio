import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2">
          <span className="text-2xl">Hello,</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>I am Mohan</h1>
            <span className="text-red-700 font-bold">Developer</span>
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
          <div className="flex justify-between">
            <div>
            <h1 className="font-bold">Avaliable On</h1>
            <div className="mt-3">
              <ul className="flex space-x-5  ">
                <li className="hover:scale-125 duration-300 hover:text-blue-800 cursor-pointer">{""}
                  <BsFacebook size={20} />
                </li>
                <li className="hover:scale-125 duration-300 hover:text-blue-800 cursor-pointer">{""}
                  <FaLinkedin size={20} />
                </li>
                <li className="hover:scale-125 duration-300 hover:text-red-600 cursor-pointer">{""}
                  {" "}
                  <IoLogoYoutube size={20} />
                </li>
                <li className="hover:scale-125 duration-300 cursor-pointer">{""}
                  <FaSquareGithub size={20} />
                </li>
              </ul>
            </div>
            
          </div>
          <div className="right">
          <h1 className="font-bold">Avaliable On</h1>
            <div className="mt-3">
              <ul className="flex space-x-5 ">
                <li className="hover:scale-125  duration-300  hover:text-blue-800">
                  <BsFacebook size={20} />
                </li>
                <li className="hover:scale-125  duration-300  hover:text-blue-800">
                  <FaLinkedin size={20} />
                </li>
                <li className="hover:scale-125  duration-300  hover:text-red-600">
                  {" "}
                  <IoLogoYoutube size={20} />
                </li>
                <li className="hover:scale-125 duration-300 ">
                  <FaSquareGithub size={20} />
                </li>
              </ul>
            </div>
          </div>
            </div>
        </div>
        <div className="md:w-1/2">Right</div>
      </div>
    </>
  );
}

export default Home;
