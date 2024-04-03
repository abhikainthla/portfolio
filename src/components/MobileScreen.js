import React from "react";
import MobileNav from "./MobileNav";
import { IoIosArrowForward } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import { TbEqualDouble } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import SkillsCard from "./SkillsCard";
import { CiMobile2 } from "react-icons/ci";
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
      <div className="mobile-container">
      <div className="mobile-content">
        <div className="mob-img">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEB1cPq64j3BQ/profile-displayphoto-shrink_800_800/0/1679485417563?e=1715817600&v=beta&t=Kcghz4z6Bqs7Ur-_AxSNJfc24_WJTfedF0TubojGVXA"
            alt="Profile-pic"
          ></img>
        </div>
        <div className="mob-intro">
        <span className="helloWorld-mobile"> <IoIosArrowForward style={{marginBottom:"2.5px", display:"inline-block"}}/> Hello World!</span><br/><span className="name-mobile"> I'm Abhishek Kainthla</span><br/><br/>
        <div className="title">
          {" "}
          <p><IoIosArrowForward style={{ marginBottom: "-2.5px" }} /> Front-end
          Developer</p><br/>
        </div>
          <hr></hr>
        </div>
        <div className="mob-info-container">
          <p className="mob-info">
            <GiSandsOfTime style={{ marginBottom: "-2.5px" }} /> Age{" "}
            <TbEqualDouble style={{ marginBottom: "-2.5px" }} /> 23
          </p>
          <p className="mob-info">
            <FaLocationDot style={{ marginBottom: "-2.5px" }} /> Shimla, India
          </p>
          <p className="mob-info">
          <FaGraduationCap style={{ marginBottom: "-2.5px" }} /> BCA
        </p>
        </div>
      </div>
      <div className="socials">
        <a href="https://github.com/abhikainthla">
          <FaGithub style ={{width:"25px", height:"auto"}} />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kainthla-321537191/">
          <FaLinkedin style ={{width:"25px", height:"auto"}}/>
        </a>
        <a href="https://www.instagram.com/abhi._.kainthla/">
          <FaInstagram style ={{width:"25px", height:"auto"}}/>
        </a>
        <a href="https://twitter.com/abhi_kainthla">
          <FaXTwitter style ={{width:"25px", height:"auto"}}/>
        </a>
      </div>
      <div className="mob-resume">
        <button onClick={handleDownload}>Download Resume</button>
      </div>
      </div>
      <div className="about-mobile">

      
      <h2 className="about-heading">About</h2>
      <p>
      <span>I'm </span>a Front-End Web Developer with a
          passion for creating visually appealing websites. Specializing in
          turning ideas into interactive digital realities, I constantly strive
          to craft new and innovative solutions that captivate audiences.
        </p><br/>
        <p className="para-italic">
          <i>
          I enjoy challenging myself with new things every day. I love
          brainstorming ideas and infusing my work with imagination and
          innovation. In this ever-evolving field, I believe in the importance
          of continuous learning. I stay updated on the latest trends and
          technologies, always eager to expand my skill set and explore new
          possibilities.
          </i>
        </p><br/>

        <p>
        And now, for non-tech related stuff... I enjoy listening to music,
          watching and playing cricket, and exploring new places.
        </p>
      </div>
      < div className="skills-mobile">
      <div className="skills">
          <div className="code-icon">
            <FaCode size={50} color="#12f7d6" />
          </div>
          <div>
            <h2 className="skill-heading">Skills</h2>
            <p style={{ fontSize: "18px", color: "#FFFFFF", textAlign:"center" }}>
              I am starving never to stop learning and improving
            </p>
          </div>
          <div className="skillCard-container">
            <SkillsCard
              icon={<FiMonitor />}
              title={"Web Development"}
              subtitle={"HTML && CSS && JS && REACT"}
            />
            <SkillsCard
              icon={<CiMobile2 />}
              title={"App Development"}
              subtitle={"Android && iOS"}
            />
          </div>
          <div>
            <div className="skill-icons">
              <div>
                <div
                  style={{
                    backgroundColor: "#e54f26",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                >
                  <AiOutlineHtml5 size={50} color="#FFFFFF" />
                </div>
                <p style={{color:"#e54f26"}}>HTML</p>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: "#0c73b8",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                >
                  <FaCss3Alt size={50} color="#FFFFFF" />
                </div>
                <p style={{color:"#0c73b8"}}>CSS</p>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: "#e7a020",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                >
                  <RiJavascriptLine size={50} color="#FFFFFF" />
                </div>
                <p style={{color:"#e7a020"}}>JS</p>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: "#28a9e0",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                >
                  <FaReact size={50} color="#FFFFFF" />
                </div>
                <p style={{color:"#28a9e0"}}>REACT</p>
              </div>
            </div>
          </div>
        </div>
          </div>
    </div>
  );
}

export default MobileScreen;
