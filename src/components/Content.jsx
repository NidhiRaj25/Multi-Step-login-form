// NewPage.js

import { useState } from "react";
import Logo from "../Images/dribble logo.png";
import Image1 from "../Images/picture1.jpg";
import Image2 from "../Images/Image2.png"
import Image3 from "../Images/Image3.png"
import "./Content.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";




const Content = (uploadedImage) => {
  const navigate = useNavigate();
  const [checkedCheckbox, setCheckedCheckbox] = useState(null);

  const handleCheckboxChange = (checkboxId) => {
    setCheckedCheckbox(checkboxId);
  };

  const handleFinishClick = () => {
    navigate("/home");
  };

  const handleBackClick=()=>{
    navigate("/success");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white p-2 ">
        <img src={Logo} alt="Logo" className="w-24 h-auto ml-10 my-0.5 mr-10" />
        <IoIosArrowBack className="rounded-lg mr-auto w-12 h-12 p-3 fill-slate-500 bg-gray-100 "  onClick={handleBackClick} /> 
      </nav>

      <div className="container mx-auto py-8  w-2/3">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 ">
          What brings you to Dribble?
        </h1>

        {/* Paragraph */}
        <p className="text-md text-gray-500 text-center mb-8">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>

        {/* Images */}
        <div className="flex flex-wrap justify-center mt-6 md:mt-28">
          {/* card1 */}
          <div className="w-fit h-fit mx-auto my-2 bg-white rounded-2xl  border-solid border-2">
            <div className=" w-64 h-3/5 mx-auto  ">
              <img src={Image1} alt="pic1" className="w-72 h-auto  p-2 " />
            </div>
            <div className="text-center w-56 mx-auto  ">
              <p>I'm a designer looking to share my work</p>
            </div>
            <div className="round">
              <input
                type="checkbox"
                id="checkbox1"
                className="checkbox-round"
                checked={checkedCheckbox === "checkbox1"}
                onChange={() => handleCheckboxChange("checkbox1")}
              />
              <label htmlFor="checkbox1"></label>
            </div>
          </div>

          {/* card2 */}

          <div className="w-fit h-fit mx-auto my-2 bg-white rounded-2xl  border-solid border-2">
            <div className=" w-64 h-3/5 mx-auto  ">
              <img src={Image2} alt="pic1" className="w-72 h-auto  p-2 " />
            </div>
            <div className="text-center w-56 mx-auto  ">
              <p>I'm looking to hire a designer</p>
            </div>
            <div className="round">
              <input
                type="checkbox"
                id="checkbox2"
                className="checkbox-round"
                checked={checkedCheckbox === "checkbox2"}
                onChange={() => handleCheckboxChange("checkbox2")}
              />
              <label htmlFor="checkbox2"></label>
            </div>
          </div>
          {/* card3 */}

          <div className="w-fit h-fit mx-auto my-2 bg-white rounded-2xl  border-solid border-2">
            <div className=" w-64 h-3/5 mx-auto  ">
              <img src={Image3} alt="pic1" className="w-72 h-auto  p-2 " />
            </div>
            <div className="text-center w-56 mx-auto  ">
              <p>I'm a designer looking for design inspiration</p>
            </div>
            <div className="round">
              <input
                type="checkbox"
                id="checkbox3"
                className="checkbox-round"
                checked={checkedCheckbox === "checkbox3"}
                onChange={() => handleCheckboxChange("checkbox3")}
              />
              <label htmlFor="checkbox3"></label>
            </div>
          </div>
        </div>

        <div>
          <button
            className={`bg-pink-700 mt-24 h-10 p-2 rounded-lg mx-auto w-60 text-white flex justify-center ${
              checkedCheckbox ? "" : "opacity-50 pointer-events-none"
            }`}
            onClick={handleFinishClick}
            disabled={!checkedCheckbox}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
