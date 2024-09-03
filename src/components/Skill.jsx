import React from "react";
import html from "../assets/html.png";
import Bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import GitHub from "../assets/github.png";
import db from "../assets/mongodb.png";
import java from "../assets/java.png";

function Skill() {
  return (
    <>
      <div className="skillHeading p-8">
        <h2 className="sskill bg-blue-500 h-10  flex justify-center items-center sm:rounded-r-full md:rounded-r-full text-white  text-center">My Skill</h2>
      </div>
      <div className="flex justify-center pt-5">
        <div className="relative w-[300px] h-[300px] flex justify-center items-center">
          <h1>FrontEnd </h1>
          <img
            src={Bootstrap}
            alt="Bootstrap"
            className="absolute w-[40px]  rounded-[60%] animate-orbit1 md:w-[60px] "
          />
          <img
            src={GitHub}
            alt="GitHub"
            className="absolute w-[40px] rounded-[60%] animate-orbit2  md:w-[60px]"
          />
          <img
            src={html}
            alt="HTML"
            className="absolute w-[40px] rounded-[60%] animate-orbit3  md:w-[60px]"
          />
          <img
            src={java}
            alt="Java"
            className="absolute w-[40px] rounded-[60%] animate-orbit4  md:w-[60px] "
          />
          <img
            src={db}
            alt="MongoDB"
            className="absolute w-[40px] rounded-[60%] animate-orbit5  md:w-[60px] "
          />
          <img
            src={react}
            alt="React"
            className="absolute w-[40px] rounded-[60%] animate-orbit6  md:w-[60px] "
          />
          <img
            src={tailwind}
            alt="Tailwind"
            className="absolute w-[40px] rounded-[60%] animate-orbit7  md:w-[60px] "
          />
        </div>
      </div>
    </>
  );
}

export default Skill;
