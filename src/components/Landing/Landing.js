import React from "react";
import "./Landing.css";
import logo from "../../assets/images/logop.png";

import brou from "../../assets/Prasbrouchure.pdf";
import Navbar from "../Navbar/Navbar";
const Landing = () => {
  return (
  
     

<div className="land-cont">
      
      <div className="land-child-1">
      <div className="font-3">
        EPOQUE @ PRASTUTI
      </div>
      <div className="font-4">INTER-COLLEGIATE ANNUAL FESTIVAL</div>
      <div className="font-4">
        UNVEILING CREATIVITY </div>
      <div className="font-5"> 02nd to 04th MARCH 2023</div>
      <div className="">
        <a href={brou} target="_blank" download className="">
          <button className="rule-btn">Brouchure</button>
        </a>
      </div>
      </div>
      
      <img src={logo} alt="logo" className="logo" />
    </div>
  
   
  );
};
export default Landing;
