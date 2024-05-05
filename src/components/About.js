import React from "react";
import { FaCode } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import SkillsCard from "./SkillsCard";
import { CiMobile2 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
function About() {
  return (
    <div>
    <div className="about">
      <div className="about-container">
        <p>
        <span className="helloWorld"> <IoIosArrowForward style={{marginBottom:"2.5px", display:"inline-block"}}/> Hello World!</span><br/><span className="name"> I'm Abhishek Kainthla</span><br/><br/>
         A Front-End Web Developer with a
          passion for creating visually appealing websites. Specializing in
          turning ideas into interactive digital realities, I constantly strive
          to craft new and innovative solutions that captivate audiences.
        </p>

        <p>
          I enjoy challenging myself with new things every day. I love
          brainstorming ideas and infusing my work with imagination and
          innovation. In this ever-evolving field, I believe in the importance
          of continuous learning. I stay updated on the latest trends and
          technologies, always eager to expand my skill set and explore new
          possibilities.
        </p>

        <p>
        And now, for non-tech related stuff... I enjoy listening to music,
          watching and playing cricket, and exploring new places.
        </p>
      </div>
      <div className="skills-container">
        <div className="skills">
          <div className="code-icon">
            <FaCode size={50} color="#12f7d6" />
          </div>
          <div>
            <h2 className="skill-heading">Skills</h2>
            <p style={{ fontSize: "13px", color: "#FFFFFF" }}>
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
    </div>
  );
}

export default About;
