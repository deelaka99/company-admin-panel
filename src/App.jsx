import React from "react";
import logo from './assets/images/logo.png';

function App() {
  return (
    <div className="flex h-screen w-screen">
      {/* side bar */}
      <div className="h-full w-1/4 bg-primary-blue">
        {/*first raw*/}
        <div className="h-1/5 w-full">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="h-1/2 w-1/2" />
          </div>
        </div>

        {/*second raw*/}
        <div className="h-3/5 w-full bg-bermuda">

        </div>

        {/*third raw*/}
        <div className="h-1/5 w-full flex">
          <div className="flex items-center">
            <a href="#">
              Logout
            </a>
          </div>
        </div>
      </div>

      {/* nav and body */}
      <div className="flex flex-col w-full h-full bg-ternary-blue">
        {/* nav */}
        <div className="bg-red-800 w-full h-1/6 bg-primary-blue opacity-60">dfsdf</div>

        {/* body */}
        <div className=" w-full h-full">
          uhfdfh
        </div>
      </div>
    </div>
  );
}

export default App;

