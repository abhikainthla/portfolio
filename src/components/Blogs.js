import React from 'react';
import { LuExternalLink } from "react-icons/lu";
function Blogs({data}) {
  return (
    <div className='blogs' onClick={() => window.open(data.link)}>
      <div className='overlay'><h2 className='text'>Find More <LuExternalLink /></h2></div>
      <div className='blog-container'>
        <div className='blog-left'>
          <h1 className='blog-heading'>{data.title}</h1><hr/><br/>
          <p className='blog-content'>{data.content}</p>
        </div>
        <div className='blog-right'>
          <img className='blog-image' src={data.image} alt={data.title}/>
        </div>
      </div>
      <div className='blog-footer' >
        <div className='tags'>
          {data.tag.map((item, index) => (
            <div className='blog-tagname' key={index}>{item}</div>
          ))}
        </div>
        <div className='blog-read'><span>{data.readTime}</span></div>
      </div>
    </div>
  );
}

export default Blogs;
