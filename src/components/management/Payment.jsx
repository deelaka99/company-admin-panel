import React from "react";

function Payment() {
  return (
    <div className="flex flex-col w-full h-full">
      {/**Title */}
      <div className="h-1/6 w-full flex items-center justify-center">
        <h1 className="text-5xl font-medium p-20">Payment</h1>
      </div>
      <div className="h-5/6 w-full flex items-center justify-center">
        <div className=" h-5/6 w-5/6 flex flex-col">
          <div className="h-4/5 w-full flex flex-col">
            <div className="w-full h-1/2 flex items-center justify-center">
              <div className="w-5/6 h-5/6 rounded-xl bg-primary-blue">
                <div className="w-full h-1/6 text-center p-2">Make Payment</div>
                <div className="w-full h-5/6 flex  p-3">
                  <div className="w-full h-1/4 ">
                    <div className="w-11/12 h-11/12 bg-secondary-blue">
                      paypal
                    </div>
                  </div>
                  <div className="w-full h-1/4 ">
                    <div className="w-11/12 h-11/12 bg-black">mastercard</div>
                  </div>
                  <div className="w-full h-1/4 ">
                    <div className="w-11/12 h-11/12 bg-red">Visa</div>
                  </div>
                  <div className="w-full h-1/4 ">
                    <div className="w-11/12 h-11/12 bg-blue">Apple</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 flex items-center justify-center">
              <div className="w-5/6 h-5/6 bg-secondary-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
