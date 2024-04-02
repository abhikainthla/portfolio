import React from "react";
import MobileNav from "./MobileNav";
import { IoIosArrowForward } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import { TbEqualDouble } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DownloadPDF from "./ResumeDownloader";
import pdfFile from "./assets/Abhishek_Kainthla_-_Frontend_Developer.pdf";

function MobileScreen() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "abhishek_kainthla-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="mobileScreen">
      <MobileNav />
      <div className="mobile-content">
        <div className="mob-img">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEB1cPq64j3BQ/profile-displayphoto-shrink_800_800/0/1679485417563?e=1715817600&v=beta&t=Kcghz4z6Bqs7Ur-_AxSNJfc24_WJTfedF0TubojGVXA"
            alt="Profile-pic"
          ></img>
        </div>
        <div>
          <p>Hi all. I am</p>
          <h2>Abhishek Kainthla</h2>
          <p className="title">
            {" "}
            <IoIosArrowForward style={{ marginBottom: "-2.5px" }} /> Front-end
            Developer
          </p>
          <hr></hr>
        </div>
        <div className="mob-home">
          <p className="mob-hello">npm i basics</p>
        </div>
        <div className="mob-info-container">
          <p className="mob-info">
            <GiSandsOfTime style={{ marginBottom: "-2.5px" }} /> Age{" "}
            <TbEqualDouble style={{ marginBottom: "-2.5px" }} /> 23
          </p>
          <p className="mob-info">
            <FaLocationDot style={{ marginBottom: "-2.5px" }} /> Shimla, India
          </p>
        </div>
      </div>
      <div className="mob-resume">
        <button onClick={handleDownload}>Download Resume</button>
      </div>
    </div>
  );
}

export default MobileScreen;
