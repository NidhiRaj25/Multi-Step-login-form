// SuccessPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/dribble logo.png";
import "./Success.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";


const SuccessPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [location, setLocation] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const navigate = useNavigate();

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
      checkFields();
    };

    reader.readAsDataURL(file);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    checkFields();
  };

  // Function to check if all fields are filled
  const checkFields = () => {
    if (uploadedImage && location.trim() !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const handleProfileSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate("/Content");
    }, 200);
  };

  return (
    <div>
      {/* Navbar with logo */}
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
      </nav>

      <div className="bodyContainer">
        {/* Header */}
        <h1 className="header">Welcome! Let's create your profile </h1>

        {/* Description */}
        <p className="description">
          Let others get to know you better! You can do these later
        </p>
        <br />
        <h3>Add an avatar</h3>

        <div className="UploadPicture">
          {/* Circular image container */}
          <div className="image-container">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="uploaded-image"
              />
            ) : (
              <div className="image-placeholder">
                {" "}
                <div className="Camera-icon">
                  <PhotoCameraIcon />
                </div>
              </div>
            )}
          </div>

          {/* Upload photo section */}
          <div className="upload-section">
            <label htmlFor="file-input" className="choose-button">
              Choose Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="file-input"
              id="file-input"
              onChange={handleImageUpload}
            />
            <span className="default-option">
              {" "}
              or choose one of our defaults
            </span>
          </div>
        </div>

        <h3>Add your location</h3>
        {/* Location input */}
        <div className="location-input">
          <input
            type="text"
            placeholder="Enter a location"
            className="location-field"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        {/* Button */}
        <div className="button-container">
          <button
            className={`submit-button ${!isFilled ? "disabled" : ""}`}
            disabled={!isFilled}
            onClick={handleProfileSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
