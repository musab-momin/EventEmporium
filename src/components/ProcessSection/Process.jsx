import React from 'react'

const Process = ({ name, description, icon }) => {
  return (
    <div className='process-card'>
    <img src={icon} alt='#' />
    <div className='process-card-body'>
        <h4>{ name }</h4>
        <p>
            { description }
        </p>
    </div>
</div>
  )
}

export default Process