import React, { useEffect, useState } from "react";
import cart_icon from "../assets/icon/cart.svg";
import process_icon from "../assets/icon/process.svg";
import truck from "../assets/icon/deliverycar.png";
import home_icon from "../assets/icon/home.svg";

import "../App.css";

// let dataMaping = [
//   {
//     orderStatus: "25",
//     status: "peding",
//   },
//   {
//     orderStatus: "50",
//     status: "peding 1",
//   },
//   {
//     orderStatus: "75",
//     status: "peding 2",
//   },
//   {
//     orderStatus: "100",
//     status: "peding 3",
//   },
// ];

let progressInterval = null;

function Card() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  // const handleClickA = () => {
  //   setProgress(25);
  // };
  // const handleClickB = () => {
  //   setProgress(50);
  // };
  // const handleClickC = () => {
  //   setProgress(75);
  // };
  // const handleClickD = () => {
  //   setProgress(100);
  // };

  return (
    <div class="card py-2">
      <div className="m-5">
        <h5 className="mb-3">Order Status</h5>
        <h7 classname="mb-4">Tracking id #</h7>

        {/* <div style={{ display: "flex", gap: "28px" }}>
          <button onClick={handleClickA}>A</button>
          <button onClick={handleClickB}>B</button>
          <button onClick={handleClickC}>c</button>
          <button onClick={handleClickD}>d</button>
        </div> */}

        <div className="track_warper">
          <div className="order_status">
            <div className="circle_wraper">
              <div className="circle">
                <img src={cart_icon} alt="not found" />
              </div>
              <label>Order Placed</label>
            </div>
            <div className="circle_wraper">
              <div className="circle">
                <img src={process_icon} alt="not found" />
              </div>
              <label>Order in process</label>
            </div>
            <div className="circle_wraper">
              <div className="circle">
                <img src={truck} alt="not found" />
              </div>
              <label>On the way</label>
            </div>
            <div className="circle_wraper">
              <div className="circle">
                <img src={home_icon} alt="not found" />
              </div>
              <label>Order delivered</label>
            </div>
          </div>

          <span>
            <div className="progress w-100 mt-10" style={{ height: 30 }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
              >
                {progress.hide}
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
