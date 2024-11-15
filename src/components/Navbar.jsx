import React, { useState } from "react";
import pic from "../assets/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [menu, setMenu] = useState(false);

  // Array List Navbar
  const navItems = [
    { id: 1, text: "Home" },
    // { id: 2, text: "Skill" },
    // { id: 3, text: "Project" },
    // { id: 4, text: "About" },
    // { id: 5, text: "Contact" },
  ];

  return (
    <>
      <nav>
        <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-10 ">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-2">
              <img src={pic} className="h-12 w-12 rounded-r-full" alt="Logo" />
              <h1 className="font-semibold text-xl cursor-pointer">
                Mohan<span className="text-green-500 text-2xl">X</span>
                <p className="text-sm">Full Stack Developer</p>
              </h1>
            </div>
            <div>
              <ul className="underl hidden md:flex  space-x-8">
                {navItems.map(({ id, text }) => (
                  <li
                    className="hover:scale-110 duration-200 cursor-pointer"
                    key={id}
                  >
                    {text}
                  </li>
                ))}
              </ul>

              {/* Hambugger  */}
              <div onClick={() => setMenu(!menu)} className="md:hidden">
                {menu ? (
                  <IoCloseSharp size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          {menu && (
            <div>
              <ul className="md:hidden flex flex-col h-screen w-screen items-center  space-y-3 bg-white">
                {navItems.map(({ id, text }) => (
                  <li
                    className="hover:scale-110 duration-200 w-screen size-10 border-b-2 justify-center flex font-semibold cursor-pointer"
                    key={id}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
