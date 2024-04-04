import React, { useEffect } from 'react';
import './MobileApp.css';

function MobileNav() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        const id = section.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (window.scrollY >= top && window.scrollY < top + height) {
          activeLink.classList.add('active');
        } else {
          activeLink.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='mobile-nav'>
      <div>
        <ul>
          <li><a href='#about-mobile' className='nav-link'>_about</a></li>
          <li><a href='#skills-mobile' className='nav-link'>_skills</a></li>
          <li><a href='#Mobile-project' className='nav-link'>_projects</a></li>
          <li><a href='#mobile-blog' className='nav-link'>_blogs</a></li>
          <li><a href='#mobile-contact' className='nav-link'>_contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
