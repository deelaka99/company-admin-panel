import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* side bar */}
      <div className="h-full w-1/4 bg-primary-blue dark:bg-black dark:opacity-90">
        <Sidebar />
      </div>

      {/* nav and body */}
      <div className="flex flex-col w-full h-full bg-ternary-blue dark:bg-dark-secondary">
        {/* nav */}
        <div className="flex bg-red-800 w-full h-1/6 bg-primary-blue opacity-60 dark:bg-black dark:opacity-100">
          <Navbar />
        </div>

        {/* body */}
        <div className=" w-full h-full flex items-center justify-center dark:text-white">
          --Profile--
        </div>
      </div>
    </div>
  );
};

export default Profile;
