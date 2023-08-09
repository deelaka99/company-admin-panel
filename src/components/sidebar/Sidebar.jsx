import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faTableCellsLarge,
  faCube,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.png";
import { logout } from "../../firebase";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/*first raw*/}
      <div className="h-1/5 w-full">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="h-1/2 w-1/2" />
        </div>
      </div>

      {/*second raw*/}
      <div className="h-3/5 w-full">
        <div className="flex flex-col ">
          <a href="#" className="text-3xl text-white font-inter">
            <Link to="/admin/dashboard">
              <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
                <FontAwesomeIcon icon={faTableCellsLarge} /> &nbsp;Dashboard
              </div>
            </Link>
          </a>
          <a href="#" className="text-3xl text-white font-inter">
            <Link to="/admin/management">
              <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
                <FontAwesomeIcon icon={faCube} /> &nbsp;Management
              </div>
            </Link>
          </a>
          <a href="#" className="text-3xl text-white font-inter">
            <Link to="/admin/profile">
              <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
                <FontAwesomeIcon icon={faUser} /> &nbsp;Profile
              </div>
            </Link>
          </a>
          <a href="#" className="text-3xl text-white font-inter">
            <Link to="/admin/settings">
              <div className="hover:bg-secondary-blue p-7 dark:hover:bg-dark-secondary">
                <FontAwesomeIcon icon={faGear} /> &nbsp;Settings
              </div>
            </Link>
          </a>
        </div>
      </div>

      {/*third raw*/}
      <div className="h-1/5 w-full">
        <a href="#" className="text-3xl text-white font-inter" onClick={logout}>
          <div className="flex flex-col p-1 hover:bg-secondary-blue dark:hover:bg-dark-secondary">
            <div className="p-5">
              <FontAwesomeIcon icon={faRightFromBracket} /> &nbsp;Logout
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
