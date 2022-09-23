import React from 'react'

const Event = ({name, description, imgWeb, imgNorm}) => {
  return (
    <>
    <div className="slide-img">
      <img src={imgWeb} srcSet={imgNorm} alt="#" />
    </div>
    <div className="slide-content">
      <h1 className="slide-title">{ name }</h1>
      <p className="slide-para">
       { description }
      </p>
      <button type="button" className="slide-btn">
        Get A Quote
      </button>
    </div>
    </>
  )
}

export default Event