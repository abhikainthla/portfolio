import React from 'react'
import pdfFile from './assets/Abhishek_Kainthla_-_Frontend_Developer.pdf';

const DownloadPDF = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'abhishek_kainthla-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='email' >
      <h2>Click on the button below to download my resume</h2>
      <div className='id'>   
           <button onClick={handleDownload} >Download Resume</button>
</div>
    </div>
  );
};

export default DownloadPDF;