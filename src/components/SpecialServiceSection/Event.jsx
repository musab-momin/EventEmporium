import React from 'react'

const Event = ({name, description, imgWeb, imgNorm}) => {
  return (
    <>
    <div className="slide-img">
      <img src={imgWeb} 
      srcSet={`${imgNorm}, ${imgWeb}`} 
      sizes="(max-width: 710px) 120px,
      (max-width: 991px) 193px,
      278px"  
      alt="#" />
    </div>
    <div className="slide-content">
      <h1 className="slide-title">{ name }</h1>
      <p className="slide-para">
       { description }
      </p>
      <a href='#quote' className="slide-btn grid-center">
        Connect with us
      </a>
    </div>
    </>
  )
}

export default Event