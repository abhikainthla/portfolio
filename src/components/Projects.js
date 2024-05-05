import React, { useState } from 'react';
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
import Buttons from './Buttons';

function Projects() {
    const [filter, setFilter] = useState(null); // State to keep track of selected filter

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

    const handleFilter = (language) => {
        if (language === "ALL") {
            setFilter(null); // Reset the filter to show all projects
        } else {
            setFilter(language); 
        }
    };

    const filteredProjects = filter ? data.filter(item => item.lang === filter) : data;

    return (
        <div className='projects-conatiner'>
            <div className='filter'>
            <Buttons name={"ALL"} onClick={handleFilter} />                
            <Buttons name={"HTML/CSS"} onClick={handleFilter} />
                <Buttons name={"JS"} onClick={handleFilter} />
                <Buttons name={"REACT"} onClick={handleFilter} />

            </div>
            <div className='projects'>
                {
                    filteredProjects.map((item, index) => {
                        return (<ProjectCard link={item.link} title={item.title} desc={item.description} img={item.img} />)
                    })
                }
            </div>
        </div>
    );
}

export default Projects;
