import React from 'react'
import './styles.css';
import { processItems } from '../../misc/process.data';
import Process from './Process';

const ProcessSection = () => {
  return (
    <section className='common-sec'>
        <div className='common-container'> 
            <h1 className='process-title text-center' data-aos="zoom-in-up">Process</h1>
            <div className='process-container'>
                {
                    processItems.map((process, indx)=>(
                        <Process key={indx} {...process} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ProcessSection