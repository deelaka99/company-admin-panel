import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faTableCellsLarge,
  faCube,
  faUser,
  faGear,
  faMagnifyingGlass,
  faMoon,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.png";

const AdminHome = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "Light" : "dark");
  };

  return (
    <div className="flex h-screen w-screen">
      {/* side bar */}
      <div className="h-full w-1/4 bg-primary-blue dark:bg-black dark:opacity-90">
        {/*first raw*/}
        <div className="h-1/5 w-full">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="h-1/2 w-1/2" />
          </div>
        </div>

        {/*second raw*/}
        <div className="h-3/5 w-full">
          <div className="flex flex-col ">
            <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
              <a href="#" className="text-3xl text-white font-inter">
                <FontAwesomeIcon icon={faTableCellsLarge} /> &nbsp;Dashboard
              </a>
            </div>
            <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
              <a href="#" className="text-3xl text-white font-inter">
                <FontAwesomeIcon icon={faCube} /> &nbsp;Management
              </a>
            </div>
            <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
              <a href="#" className="text-3xl text-white font-inter">
                <FontAwesomeIcon icon={faUser} /> &nbsp;Profile
              </a>
            </div>
            <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
              <a href="#" className="text-3xl text-white font-inter">
                <FontAwesomeIcon icon={faGear} /> &nbsp;Settings
              </a>
            </div>
          </div>
        </div>

        {/*third raw*/}
        <div className="h-1/5 w-full">
          <div className="flex flex-col p-1 hover:bg-secondary-blue dark:hover:bg-dark-secondary">
            <div className="p-5">
              <a href="#" className="text-3xl text-white font-inter">
                <FontAwesomeIcon icon={faRightFromBracket} /> &nbsp;Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* nav and body */}
      <div className="flex flex-col w-full h-full bg-ternary-blue dark:bg-dark-secondary">
        {/* nav */}
        <div className="flex bg-red-800 w-full h-1/6 bg-primary-blue opacity-60 dark:bg-black dark:opacity-100">
          {/**Link indicator */}
          <div className="h-full w-1/4 flex justify-center items-center">
            <div className="bg-ternary-blue h-1/2 w-2/3 rounded-3xl opacity-100 flex justify-center items-center drop-shadow-xl dark:bg-dark-ternary">
              <p className="text-black font-bold dark:text-white">Dashboard</p>
            </div>
          </div>

          {/**Search bar */}
          <div className="h-full w-2/4 flex justify-center items-center">
            <div className="bg-ternary-blue h-1/2 w-2/3 rounded-3xl opacity-100 flex drop-shadow-xl dark:bg-dark-ternary">
              <div className="h-full w-10/12 rounded-3xl flex justify-center items-center ">
                Search...
              </div>
              <div className="bg-bermuda  h-full w-2/12 rounded-3xl flex justify-center items-center drop-shadow-xl hover:text-silver dark:bg-dark-primary dark:text-dark-ternary dark:hover:text-silver">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>

          {/**Dark mode & user */}
          <div className="h-full w-1/4 flex">
            {/**Dark mode button */}
            <div className="h-full w-1/2 flex justify-center items-center">
              <button
                onClick={handleThemeSwitch}
                className="bg-bermuda h-1/2 w-1/2 rounded-full flex justify-center items-center drop-shadow-xl hover:bg-black dark:bg-dark-ternary dark:hover:bg-dark-primary"
              >
                <FontAwesomeIcon icon={faMoon} className="text-white h-1/2" />
              </button>
            </div>
            {/**user button */}
            <div className="relative h-full w-1/2 flex justify-center items-center">
              <div className="bg-bermuda h-1/2 w-5/6 rounded-full flex justify-center items-center drop-shadow-xl p-3 dark:bg-dark-ternary">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-1/4 font-medium p-1 dark:text-white"
                />
                <h1 className="text-black text-center w-2/4 p-2 dark:text-white">
                  Admin
                </h1>
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="p-4 w-1/4 flex items-center justify-between active:text-white"
                >
                  {!isOpen ? (
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="dark:text-white"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      className="dark:text-white"
                    />
                  )}
                </button>
              </div>
              {isOpen && (
                <div className="bg-white absolute top-20 flex flex-col items-start rounded-lg p-5 w-full drop-shadow-xl">
                  <div className="flex flex-col">
                    <div className="h-1/2 w-full ">
                      <a href="#" className="">
                        Edit Profile
                      </a>
                    </div>
                    <div className="h-1/2 w-full ">
                      <a href="#" className="text-red">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* body */}
        <div className=" w-full h-full flex items-center justify-center dark:text-white">
          -body-
        </div>
      </div>
    </div>
  );
};

export default AdminHome;