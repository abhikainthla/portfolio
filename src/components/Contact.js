import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const email = 'abhikainthla001@gmail.com'; // Your email address
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-kainthla-321537191/', icon:<FaLinkedin size={50}/> }, 
    { name: 'GitHub', url: 'https://github.com/abhikainthla', icon: <FaGithub size={50}/> },
    { name: 'Instagram', url:'https://www.instagram.com/abhi._.kainthla/', icon: <FaInstagram size={50}/>}, 
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);

  };

  return (
    <div>
    <div className='contact'>
        <div>
            <h1>Thankyou for visiting my portfolio</h1>

        </div>
        <div onClick={copyEmailToClipboard} className='email'>
            <h2>Like what you see? here is how I can be reached.</h2>
            <div className='id'>
                <p>{email}</p>
                <button >Copy Email</button>
            </div>
        </div>
        <div className='social-contacts'>
            <h2>Hit Me Up  On Social Media!</h2>
            <ul className="social-links">
                {socialLinks.map((item, index) => (
                    <li key={index}>{item.icon}</li>
                ))}
            </ul>
        </div>
    </div>
    </div>
  );
}

export default Contact;
