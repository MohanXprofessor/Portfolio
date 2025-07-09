import React from "react";
import { ReactTyped } from "react-typed";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import pi from "../assets/landing.png";
import { FaSquareGithub } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-3 md:px-5 my-8 flex flex-col md:flex-row">
        <div className="md:w-[70%] mt-8 md:mt-24 space-y-2 order-2 md:order-1">
          <span
            className="text-2xl"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Hello,
          </span>
          <div
            className="flex space-x-1 text-2xl md:text-4xl "
            data-aos="flip-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h3>I am Mohan</h3>
            {/* <span className="text-red-700 font-bold">Developer</span> */}

            <ReactTyped
              className="text-red-700  font-bold duration-700"
              strings={[
                "JAVA Developer",
                "Web Developer",
                "Angular",
                "Spring Boot",
                "Restfull API",
              ]}
              typeSpeed={90}
              backSpeed={30}
              loop={true}
            />
          </div>
          <br />
          <p
            className="text-sm md:text-md text-justify"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Mohan Yadav is a{" "}
            <strong>
              <em class="hover-effect">Full Stack JAVA Developer</em>
            </strong>
            &nbsp; skilled in JAVA , MYSQL ,HTML, CSS, JavaScript, Bootstrap,
            and frameworks like Spring Boot & Angular. He focuses on building
            dynamic, responsive web applications with a strong emphasis on user
            experience.
          </p>
          <br />
          {/* Social Media Icons */}
          <div
            className="flex flex-col md:flex-row space-y-10  p-5 items-center md:space-y-0 justify-between"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="1500"
          >
            <div className="">
              <h1 className="font-bold">Avaliable On</h1>
              <div className="mt-3">
                <ul className="flex space-x-5  ">
                  <li className="hover:scale-125 duration-300 hover:text-blue-800 cursor-pointer">
                    <a href="https://www.facebook.com/login/" target="_blank">
                      <BsFacebook size={20} />
                    </a>
                  </li>
                  <li className="hover:scale-125 duration-300 hover:text-blue-800 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/mohan-parshuram-yadav-38190b219/"
                      target="_blank"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </li>
                  <li className="hover:scale-125 duration-300 hover:text-green-500 cursor-pointer">
                    <a href="https://wa.me/9561138589" target="_blank">
                      <RiWhatsappFill size={20} />
                    </a>
                  </li>
                  <li className="hover:scale-125 duration-300 cursor-pointer">
                    <a
                      href="https://github.com/MohanXprofessor"
                      target="_blank"
                    >
                      <FaSquareGithub size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="">
                <div className="">
                  <div class="w-full h-40 flex items-center justify-center">
                    <a
                      href="https://drive.google.com/file/d/1oy6jenrFLI6ahbUxS3uJVwzbJr7Wy4Wu/view?usp=sharing"
                      target="_blank"
                      class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
                    >
                      <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        Resume
                      </span>
                    </a>
                  </div>

                  {/* <ul className="flex space-x-5 ">
                    <li>
                      <SiMongodb
                        size={20}
                        className="text-xl md:text-3xl cursor-pointer border-[1px] size-6 hover:scale-125 duration-300 hover:text-green-800 hover:bg-black rounded-full"
                      />
                    </li>
                    <li>
                      <SiExpress
                        size={20}
                        className="text-xl md:text-3xl  cursor-pointer border-[1px] size-6 hover:scale-125 duration-300 hover:text-yellow-300  hover:bg-black rounded-full"
                      />
                    </li>
                    <li>
                      <FaReact
                        size={20}
                        className="text-xl md:text-3xl cursor-pointer border-[1px] size-6 hover:scale-125 duration-300 hover:text-blue-600 hover:bg-black rounded-full"
                      />
                    </li>
                    <li>
                      <FaNodeJs
                        size={20}
                        className="text-xl cursor-pointer md:text-3xl border-[1px] size-6 hover:scale-125 duration-300 hover:text-yellow-300 hover:bg-black rounded-full"
                      />
                    </li>
                    
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-14 mt-8 order-1 items-center ">
          <img
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="300"
            src={pi}
            alt="Image web developer"
            className="h-[330px] w-[330px] md:h-[400px] md:w-[400px] items-center  drop-shadow-2xl rounded-full "
          />
        </div>
      </div>
      <span className="flex justify-center">
        <button className="arrow  items-center animate-bounce w-8 h-8">
          <MdKeyboardDoubleArrowDown size={48} />
        </button>
      </span>
    </>
  );
}

export default Home;
