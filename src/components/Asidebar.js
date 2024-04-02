import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import { TbEqualDouble } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

function Asidebar() {
  return (
    <div className="aside">
      <div className="image">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQEB1cPq64j3BQ/profile-displayphoto-shrink_800_800/0/1679485417563?e=1715817600&v=beta&t=Kcghz4z6Bqs7Ur-_AxSNJfc24_WJTfedF0TubojGVXA"
          alt="Profile-pic"
        ></img>
        <p className="intro">Hi all. I am</p>
        <div className="name">
          <h1>Abhishek Kainthla</h1>
        </div>
        <div className="title">
          {" "}
          <p><IoIosArrowForward style={{ marginBottom: "-2.5px" }} /> Front-end
          Developer</p>
        </div>
      </div>

      <div className="info-container">
        <hr />
        
        <p className="info">
          <GiSandsOfTime style={{ marginBottom: "-2.5px" }} /> Age{" "}
          <TbEqualDouble style={{ marginBottom: "-2.5px" }} /> 23
        </p>
        <p className="info">
          <FaLocationDot style={{ marginBottom: "-2.5px" }} /> Shimla, India
        </p>
        <p className="info">
          <FaGraduationCap style={{ marginBottom: "-2.5px" }} /> BCA
        </p>
      </div>
      <div className="socials">
        <a href="https://github.com/abhikainthla">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kainthla-321537191/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/abhi._.kainthla/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/abhi_kainthla">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
}

export default Asidebar;
