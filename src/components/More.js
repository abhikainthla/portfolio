import React from 'react';
import DownloadPDF from './ResumeDownloader';
import PDFPreview from './PDFPreview';
import Blogs from './Blogs';

function More() {
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
    }
  ];

  return (
    <div className='more'>
      <div className='blog-section'>
        <h1 className='blog-header'>_myBlogs</h1>
        
        {blogs.map((blog, index) => (
          <Blogs key={index} data={blog} />
        ))}
      </div>
      <div className='pdf'>
      <div>
        <PDFPreview />
      </div>
      <div>
        <DownloadPDF />
      </div>
      </div>
      
    </div>
  );
}

export default More;
