import React from 'react'
import DownloadPDF from './ResumeDownloader'
import PDFPreview from './PDFPreview'

function More() {
  return (
    <div className='more'>
        <div>
            <PDFPreview/>
        </div>
        <div>
            <DownloadPDF/>
        </div>
    </div>
  )
}

export default More