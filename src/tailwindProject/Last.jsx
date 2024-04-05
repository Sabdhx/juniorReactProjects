import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";


const Last = () => {
  return (
    <div
      className=" mt-6 w-screen h-[36vh] bg-[#464543] text-white flex justify-around
    
    "
    >
      <div className="flex ">
        <div className=" mt-[11vw] font-Roboto lg:mt-[3vw] text-5xl font-bold">
          LOGO
        </div>

        <div className="ml-[20vw] font-Roboto text-[12px] mt-[5vh] ">
          <div className="m-3 lg:text-[15px] font-md ">OUR PAGE</div>
          <div className="m-3">Home</div>
          <div className="m-3">About Us</div>
          <div className="m-3">Portfolio</div>
          <div className="m-3">Gallery</div>
          <div className="m-3">Catagory</div>
          <div className="m-3">About Us</div>
        </div>
        <div className="ml-[10vw] text-[13px] mt-[5vh]">
          <div className="m-3 font-Roboto lg:text-[15px] font-md ">
            FOLLOW US
          </div>
          <div className="m-3 text-2xl">
            <FaInstagram />
          </div>
          <div className="m-3 text-2xl">
            <FaFacebook />
          </div>
          <div className="m-3 text-2xl">
            <FaTwitter />
          </div>
        </div>
        <div className="ml-[13vw] font-Roboto text-[13px] mt-[5vh]">
          <div className="m-3 lg:text-[15px] font-md ">CONTACT US</div>
          <div class="m-3 ">

          <div class="m-1  flex">
              <p className="inline text-[19px] m-1 ">
              <CiPhone />
              </p>
              <p className="mt-[5px]">0346-9206499</p>
            </div>

            <div class="m-1  flex">
              <p className="inline text-[19px] m-1 ">
                <BiLogoGmail />
              </p>
              <p className="mt-[5px]">syedaliabdullashah5@gmail.com </p>
            </div>

            
            <div class="m-1  flex">
              <p className="inline text-[19px] m-1 ">
              <FaLocationDot />
              </p>
              <p className="mt-[5px]">bardilalkurti shaheedbazar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;

