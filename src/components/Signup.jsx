import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Image from "../Images/dribble.jpg";
import { IoIosWarning } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });

    if (name === "username") {
      setIsUsernameTaken(value === formData.name);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name &&
      formData.username &&
      formData.email &&
      formData.password &&
      formData.agreeTerms
    ) {
      if (formData.name === formData.username) {
        setIsUsernameTaken(true);
      } else {
        setTimeout(() => {
          setIsSuccess(true);
          navigate("/success");
        }, 200);
      }
    } else {
      alert("Please fill in all fields and agree to terms.");
    }
  };

  if (isSuccess) {
    return null;
  }
  const isButtonFaded =
    !formData.name ||
    !formData.username ||
    !formData.email ||
    !formData.password ||
    !formData.agreeTerms;

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={Image} alt="Sign Up" />
      </div>
      <div className="signup-right">
        <h4>
          Already a member?{" "}
          <a href="cvb" style={{ color: "rgb(62, 37, 173)" }}>
            {" "}
            Sign In{" "}
          </a>{" "}
        </h4>
        <form onSubmit={handleFormSubmit}>
          <h2>Sign up to Dribble</h2>
          {isUsernameTaken && (
            <span
              className="alert-message"
              style={{
                color: "red",
                display: "flex",
                alignItems: "center",
                marginTop: "-30px",
                marginBottom: "20px",
              }}
            >
              <span>
                <GoDotFill />
              </span>
              Username already taken
            </span>
          )}
          <div className="form-group-row" >
            <div className="form-group" >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John"
              />
            </div>
            <div className="form-group" >
                
              <label
                htmlFor="username"  
               style={{display:"flex", alignItems:"center"}}
              >
                <IoIosWarning
                  className={isUsernameTaken ? "warning-icon" : "hidden"}
                  style={{ color: "red",}}
                />
                {/* <img src={IoIosWarning} alt="Warning" className={isUsernameTaken ? "warning-icon" : "hidden"} /> */}
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="John123"
                className={
                  isUsernameTaken && formData.username === formData.name
                    ? "username-red"
                    : ""
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="6+ characters"
            />
          </div>
          <div className="form-group">
            <label
              className="termsCon"
              style={{ display: "flex", alignItems: "start" }}
            >
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="checkbox"
                style={{ margin: "5px" }}
              />
              <p>
                {" "}
                Creating an account means you're okay with our{" "}
                <a href="fg" style={{ color: "rgb(62, 37, 173)" }}>
                  Terms of Service, Privacy Policy,
                </a>{" "}
                and our default{" "}
                <a href="sdf" style={{ color: "rgb(62, 37, 173)" }}>
                  Notification Settings.
                </a>
              </p>
            </label>
          </div>
          <button
            className={isButtonFaded ? "faded-button" : ""}
            type="submit"
            disabled={
              !formData.name ||
              !formData.username ||
              !formData.email ||
              !formData.password ||
              !formData.agreeTerms
            }
          >
            Create Account
          </button>
          <p style={{ color: "grey", fontSize: "10px", fontWeight: "300" }}>
            This site is protected by reCAPTCHA and the google <br />{" "}
            <a href="sdf" style={{ color: "rgb(62, 37, 173)" }}>
              {" "}
              PRIVACY POLICY
            </a>{" "}
            and{" "}
            <a href="sdf" style={{ color: "rgb(62, 37, 173)" }}>
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
