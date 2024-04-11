import React, { useState } from "react";
import Logo from "../Images/dribble logo.png"; // Import your logo image
import CancelIcon from "@mui/icons-material/Cancel";
import { PiSuitcaseSimple } from "react-icons/pi";
import Profile from "../Images/profile.jpeg";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white text-gray-600 w-auto">
        <div className=" w-full flex justify-between items-center">
          {/* Left side of the navbar */}
          <div className="flex items-center p-2 w-1/2">
            <img
              src={Logo}
              alt="Logo"
              className="w-24 h-auto ml-10 my-0.5 mr-10"
            />

            <div>
              <ul className="flex space-x-6">
                <li>
                  <a href=" " className="hover:text-gray-400">
                    Inspiration
                  </a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-400">
                    Find Work
                  </a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-400">
                    Learn Design
                  </a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-400">
                    Go Pro
                  </a>
                </li>
                <li>
                  <a href=" " className="hover:text-gray-400">
                    Hire Designers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side of the navbar */}
          <div className="flex  justify-end space-x-4 w-1/2  mr-10 bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-36 px-4 py-2 bg-gray-200 text-black rounded-md focus:outline-none"
            />

            <div className="relative">
              <PiSuitcaseSimple className=" w-12 h-12 p-2 " />
              <div className="absolute right-0 bottom-0">
                <CancelIcon className="  w-1 h-1 border-2 border-white rounded-full bg-white" />
              </div>
            </div>

            {/* <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Shopping Cart</button> */}
            <div className="relative">
              <div className="absolute top-0 right-0 h-3 w-3 bg-pink-600 rounded-full"></div>
              <img
                src={Profile}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Upload
            </button>
          </div>
        </div>
      </nav>

      <div className=" mx-auto w-auto  sm:w-full md:w-4/5 lg:w-3/5 flex justify-center items-center">
        <div className="mx-14  w-auto flex-col justify-center  ">
          <h1 className="text-4xl text-center font-bold mb-4 mt-6 sm:mt-16">
            Please verify your email...
          </h1>
          <div className="w-40 mx-auto relative">
            <MdEmail className=" w-40 h-40 fill-gray-400" />
            <div className="absolute left-24 top-2 ">
              <FaCheckCircle className="w-14 h-14 p-1 fill-pink-600 bg-white rounded-full outline-none border-4 border-white" />
            </div>
          </div>
          <div className="text-md text-center text-xl text-gray-500 mb-4 font-normal">
            <p className="mb-6">
              Please verify your email address. We've sent a confirmation email
              to:
            </p>
            <h3 className="font-bold mb-6 text-black">account@refero.design</h3>
            <p className="mb-6">
              Click the confirmation link in that email to begin using Dribble.
            </p>
            <p className="mb-6">
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. If you still don't see it , you can{" "}
              <a href=" " className="text-pink-600 font-medium">
                {" "}
                resend the confirmation email.
              </a>
            </p>
            <p>
              Wrong email address?{" "}
              <a href=" " className="text-pink-600 font-medium">
                {" "}
                Change it.
              </a>
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 text-gray-700 h-auto">
        <div className=" mx-auto px-10 w-full py-8 mt-20">
          <div className="   flex flex-wrap h-4/5 ">
            {/* Column 1 */}
            {/* <div className=" mx-auto w-full lg:w-1/6 bg-red-800 lg:ml-0 pr-10 "> */}
            <div className=" mx-auto w-full lg:w-1/4 lg:ml-0 flex flex-col items-center lg:items-start lg:pl-10  lg:pr-20">
              <img src={Logo} alt="Logo" className="w-32 h-auto " />
              <p className="text-left text-md mb-4 ">
                Dribbble is the world's leading community for creatives to
                share, grow, and get hired.
              </p>
              <div className=" mx-auto w-full lg:w-full flex justify-center  lg:justify-start space-x-4 mb-4 ">
                <FaDribbble className="text-gray-800  w-6 h-6" />
                <FaTwitter className="text-gray-800  w-6 h-6" />
                <AiFillFacebook className="text-gray-800  w-6 h-6" />
                <FaInstagram className="text-gray-800  w-6 h-6" />
                <FaPinterest className="text-gray-800  w-6 h-6" />
              </div>
            </div>
            {/* </div> */}

            {/* Column 2-6 */}
            <div className=" w-full lg:w-3/4 flex flex-wrap justify-between text-md">
              {/* Column 2 */}
              <div className="w-44 lg:pt-12">
                <ul className=" space-y-6 mb-6 ">
                  {/* Add 8 rows */}
                  <li className=" font-bold">For designers</li>
                  <li>Go Pro!</li>
                  <li>Explore design work</li>
                  <li>Design blog</li>
                  <li>Overtime podcast</li>
                  <li>Playoffs</li>
                  <li>Weekly Warm-up</li>
                  <li>Refer a friend</li>
                  <li>Code of conduct</li>
                </ul>
              </div>

              {/* Column 3 */}
              {/* Add similar structure for Column 3-6 */}
              <div className="w-44 lg:pt-12">
                <ul className=" space-y-6 mb-6">
                  {/* Add 8 rows */}
                  <li className=" font-bold">Hire designers</li>
                  <li>Post a job opening</li>
                  <li>Post a freelance projects</li>
                  <li>Search for designers</li>
                  <li>Overtime podcast</li>
                </ul>
                <div className="w-44">
                  <ul className=" space-y-6 mb-6">
                    {/* Add 8 rows */}
                    <li className=" font-bold">Brands</li>
                    <li>Advertise with us</li>
                  </ul>
                </div>
              </div>

              <div className="w-44 lg:pt-12">
                <ul className=" space-y-6 mb-6">
                  {/* Add 8 rows */}
                  <li className=" font-bold">Company</li>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Support</li>
                  <li>Media kit</li>
                  <li>Tesdtimonials</li>
                  <li>API</li>
                  <li>Terms of service</li>
                  <li>Privacy policy</li>
                  <li>Cookie policy</li>
                </ul>
              </div>

              <div className="w-44 lg:pt-12">
                <ul className=" space-y-6 mb-6">
                  {/* Add 8 rows */}
                  <li className=" font-bold">Directories</li>
                  <li>Design jobs</li>
                  <li>Designers for hire</li>
                  <li>Freelance designers for hire</li>
                  <li>Tags</li>
                  <li>Places</li>
                </ul>
                <div className="w-44">
                  <ul className=" space-y-6 mb-6">
                    {/* Add 8 rows */}
                    <li className=" font-bold">Design assets</li>
                    <li>Dribbble Marketplace</li>
                    <li>Creative Market</li>
                    <li>Fontspring</li>
                    <li>Font Squirrel</li>
                  </ul>
                </div>
              </div>

              <div className="w-44 lg:pt-12">
                <ul className=" space-y-6 mb-6">
                  {/* Add 8 rows */}
                  <li className=" font-bold">Design Resources</li>
                  <li>Freelancing</li>
                  <li>Design Hiring</li>
                  <li>Design Portfolio</li>
                  <li>Design Education</li>
                  <li>Creative Process</li>
                  <li>Design Industry Trends</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className=" text-gray-500 my-8 py-4">
            <div className="container mx-auto flex justify-between">
              <div>
                {" "}
                <p>© 2023 Dribbble. All rights reserved.</p>
              </div>
              <div className="flex  ">
                <p className="text-black font-medium mr-2">20,501,853 </p>
                <p>shots dribbbled</p>
                <FaDribbble className=" w-6 h-6 mx-2 fill-pink-900 bg-pink-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
