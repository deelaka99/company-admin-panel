import React from "react";
import AddNewLab from "../../components/management/AddNewLab";
import Manage from "../../components/management/Manage";
import Payment from "../../components/management/Payment";

const Management = () => {
  return (
    <div className=" w-full h-full flex flex-col overflow-y-scroll dark:text-white">
      <AddNewLab />
      <Manage />
      <Payment/>
    </div>
  );
};

export default Management;
