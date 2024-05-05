import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineFormatOverline } from "react-icons/md";
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
import Screenshot from './assets/Screenshot (78).png';
import Screenshot2 from './assets/Screenshot2 (73).png';
import Screenshot3 from './assets/Screenshot3 (77).png';
import Screenshot4 from './assets/Screenshot4 (80).png';
import Screenshot5 from './assets/Screenshot5 (81).png';
import Screenshot6 from './assets/Screenshot6 (82).png';
import Screenshot7 from './assets/Screenshot7 (83).png';
import Screenshot8 from './assets/Screenshot8 (84).png';
import Screenshot9 from './assets/Screenshot9 (85).png';
import Screenshot10 from './assets/Screenshot10 (86).png';
import Screenshot11 from  './assets/Screenshot11 (95).png';
import ProjectCard from './ProjectCard';
import pdfFile from "./assets/Abhishek_Kainthla_-_Frontend_Developer.pdf";
import ReactSimplyCarousel from 'react-simply-carousel';
import MobileProjectCard from "./MobileProjectCard";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";
function MobileScreen() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  const data = [{
    link:"https://github.com/abhikainthla/food-cart",
    title:"Food-cart",
    description:"Welcome to the Food Delivery App! This is a web application built using React that allows users to order various kind of food and have it delivered to their doorstep.",
    lang:"REACT",
    img:Screenshot11,
},{
      link: "https://github.com/abhikainthla/OLX-Clone",
      title: "OLX Clone",
      description: "Welcome to the OLX Clone project! This project aims to replicate the functionality of the popular online marketplace, OLX.",
      img: Screenshot,
      lang: "HTML/CSS"
  },
  {
      link: "https://github.com/abhikainthla/Payment-Integration",
      title: "Payment Integration",
      description: "Welcome to the Payment Integration Demo website! This project serves as a demonstration of integrating payment gateways into your web application.",
      img: Screenshot2,
      lang: "JS"
  },
  {
      link: "https://github.com/abhikainthla/ImageSearchApp",
      title: "ImageSearchApp",
      description: "Welcome to the Image searching app! here you can generate HD images",
      img: Screenshot4,
      lang: "JS"
  },
  {
      link: "https://github.com/abhikainthla/Bored-suggestions",
      title: "Bored-suggestions",
      description: "A site made in boredom to kill boredom",
      img: Screenshot3,
      lang: "JS"
  },
  {
      link: "https://playful-klepon-eb4ff4.netlify.app/",
      title: "Notepad",
      description: "A markdown notepad to take notes.",
      img: Screenshot5,
      lang: "REACT"
  },
  {
      link: "https://stunning-semolina-c3e805.netlify.app/",
      title: "Fitness app",
      description: "A app to train your body with 100s of exercises",
      img: Screenshot7,
      lang: "REACT"
  },
  {
      link: "https://jocular-lamington-66bb22.netlify.app/",
      title: "Password-Generator",
      description: "Too lazy to think about passwords no problem this site is for you.",
      img: Screenshot8,
      lang: "REACT"
  },
  {
      link: "https://abhikainthla.github.io/GeeksterMon/",
      title: "GeeksterMon",
      description: "A place to find about your favourite pokemons",
      img: Screenshot9,
      lang: "JS"
  },
  {
      link: "https://abhikainthla.github.io/Sticky-Notes/",
      title: "Notes",
      description: "A app to create notes",
      img: Screenshot10,
      lang: "JS"
  }];

  const blogs = [
    {
      title: "Enhancing React App Performance With “useCallback” Hook.",
      content: "In React, the useCallback hook is used to memoize callback functions, especially in scenarios where passing new callback functions to child components could lead to unnecessary re-renders.",
      link: "https://medium.com/@abhikainthla001/enhancing-react-app-performance-with-usecallback-hook-6020892d8c47",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*p8YqNTTqGL3ZVAbTCF40iA.png",
      tag:  ["React", "useCallback"],
      readTime: "5 min read",
    },
    {
      title: "Mastering Performance Optimization with useMemo Hook in React",
      content: "In one line, useMemo can be defined as a tool in React used to memoize the result of a function, preventing unnecessary recomputation of that function result on re-renders.",
      link: "https://medium.com/@abhikainthla001/mastering-performance-optimization-with-usememo-hook-in-react-f33fdc020754",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Vq5hG384QrdlGJs8cvpLsQ.png",
      tag: ["React", "useMemo"],
      readTime: "4 min read",
    },
    {
      title: "Boosting Loading Speed and User Experience with Lazy Loading.",
      content: "Lazy loading is a technique used to load resources only when they are needed, helping to shorten page load times by prioritizing critical content. It is also known as code splitting. We can avoid preloading content while it is still out of view, and focus all of the resources on the content that is in the view.",
      link: "https://medium.com/@abhikainthla001/boosting-loading-speed-and-user-experience-with-lazy-loading-5faa7e03c534",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*VEtkfwjwXWze9NdPant28Q.png",
      tag: ["React", "lazy loading"],
      readTime: "3 min read",
    },
    {
      title:"Three-tier architecture in web development",
      content:"When it comes to build good and scalable applications we generally rely on the technique known as Three-tier architecture. It organises application into three different layers. It divides application into three interconnected layers: presentation, application (or business logic), and data.",
      link:"https://medium.com/@abhikainthla001/three-tier-architecture-in-web-development-c0ab0c61b053",
      image:"https://tse2.mm.bing.net/th?id=OIP.opHsqQrb4exqr9-5-bja4AHaFf&pid=Api&P=0&h=180",
      tag : ["Web Development","Three-tier Architecture" ],
      readTime : "3 min read",
    }
  ];


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
      <div className="about-mobile" id="about-mobile">

      
      <h2 className="about-heading">About</h2>
      <p>
      <span><IoIosArrowForward style={{marginBottom:"2.5px", display:"inline-block"}}/>I'm </span>a Front-End Web Developer with a
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
      < div className="skills-mobile" id="skills-mobile">
      <div className="skills">
          <div className="code-icon">
            <FaCode size={50} color="#12f7d6" />
          </div>
          <div>
            <h2 className="skill-heading">Skills</h2>
            <p style={{ fontSize: "18px", color: "#FFFFFF", textAlign:"center", padding:"0 12px" }}>
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
          <div className="Mobile-project" id="Mobile-project">
      <h1 className='mob-project-name'>Projects</h1>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span><MdArrowForwardIos style={{marginLeft:"5px"}}/></span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span><MdArrowBackIos style={{marginLeft:"10px"}}/></span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={300}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {
                    data.map((item, index) => {
                        return (<MobileProjectCard link={item.link} title={item.title} desc={item.description} img={item.img} />)
                    })
                }
      </ReactSimplyCarousel>

          </div>
          <div className="mobile-blogs"  id='mobile-blog'>
          <h1 className='mob-blog-header'>Blogs</h1>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span><MdArrowForwardIos style={{marginLeft:"5px"}}/></span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span><MdArrowBackIos style={{marginLeft:"10px"}}/></span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={300}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {blogs.map((blog, index) => (
          <Blogs key={index} data={blog} />
        ))}
      </ReactSimplyCarousel>
          </div>
          <div className="mobile-contact"  id='mobile-contact'>
          <h2 className="mob-contact-heading">Contact</h2>
            <Contact/>
            <Footer/>
          </div>
    </div>
  );
}

export default MobileScreen;
