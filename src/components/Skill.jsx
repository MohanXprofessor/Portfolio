import React from "react";
import html from "../assets/html.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import angular from "../assets/angular.png";




function Skill() {
  return (
    <>
      <div className=" ">
        
          <h1 className="text-3xl text-center">My Skill</h1>
      
        <div className="wrapper   w-100  bg-blue-200 p-14 flex flex-col justify-center gap-10 md:flex-row md:items-center md:w-screen">
          {/* Card 1 */}
          <div className="card flex flex-col justify-center md:w-52 h-44 rounded-2xl bg-white hover:scale-105  hover:shadow-2xl">
            <div className="logo flex justify-center pt-5">
              <img src={html} className="h-14  " alt="card_image" />
            </div>
            <div className="text pt-6 text-center">HTML 5</div>
            <div className="button"></div>
          </div>
          {/* end of card 1 */}

          {/* Card 2 */}
          <div className="card flex flex-col justify-center md:w-52 h-44 rounded-2xl bg-white hover:scale-105  hover:shadow-2xl">
            <div className="logo flex justify-center pt-5">
              <img src={js} className="h-14  " alt="card_image" />
            </div>
            <div className="text pt-6 text-center">JS</div>
            <div className="button"></div>
          </div>
          {/* end of card 2 */}
          {/* Card 3 */}
          <div className="card flex flex-col justify-center md:w-52 h-44 rounded-2xl bg-white hover:scale-105  hover:shadow-2xl">
            <div className="logo flex justify-center pt-5">
              <img src={bootstrap} className="h-14  " alt="card_image" />
            </div>
            <div className="text pt-6 text-center">Bootstrap</div>
            <div className="button"></div>
          </div>
          {/* end of card 3 */}
          {/* Card 4 */}
          <div className="card flex flex-col justify-center md:w-52 h-44 rounded-2xl bg-white hover:scale-105  hover:shadow-2xl">
            <div className="logo flex justify-center pt-5">
              <img src={react} className="h-14  " alt="card_image" />
            </div>
            <div className="text pt-6 text-center">React</div>
            <div className="button"></div>
          </div>
          {/* end of card 4 */}
          {/* Card 5 */}
          <div className="card flex flex-col justify-center md:w-52 h-44 rounded-2xl bg-white hover:scale-105  hover:shadow-2xl">
            <div className="logo flex justify-center pt-5">
              <img src={mongodb} className="h-14  " alt="card_image" />
            </div>
            <div className="text pt-6 text-center">Mongo-DB</div>
            <div className="button"></div>
          </div>
          {/* end of card 5 */}
          {/* Card 6 */}
          <div className="card flex flex-col justify-center md:w-52 h-44 rounded-2xl bg-white hover:scale-105  hover:shadow-2xl">
            <div className="logo flex justify-center pt-5">
              <img src={angular} className="h-14  " alt="card_image" />
            </div>
            <div className="text pt-6 text-center">Angular</div>
            <div className="button"></div>
          </div>
          {/* end of card 6 */}
        
       
        </div>
      </div>
    </>
  );
}

export default Skill;
