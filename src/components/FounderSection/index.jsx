import React from 'react'
import FounderWeb from '../../assets/images/webps/founder.webp';
import Founder from '../../assets/images/others/founder.jpeg';
import './styles.css';



const FounderSection = () => {
  return (
    <section className='common-sec founder-sec grid-center'>
      <div className='common-container golden-clr'>
            <div className='clr-container'></div>
            <div className='second-clr-container'></div>
            <div className='third-clr-container'></div>
            <img className='clr-img' src={FounderWeb} srcSet={Founder} alt='#'/> 
            <div className='founder-content'>
              <div className='founder-title'>
                <h1>Barisha Suryavnshi</h1>
                <p>(Founder)</p>
              </div>
              <p className='founder-para'>
              Our team understands that a properly executed event can be leveraged to support an organization's strategic vision incorporated into a company marketing plan or used to build a network and client loyalty we bring a fresh, unique approach to the event management industry.
Regardless of size scope, we treat your event like a business with clear strategic goals and comprehensive
 plane to ensure your event is delivered on time and on a budget we at the event emporium learn about your business focus on your challenges and plane events to support your goal
              </p>
            </div>
      </div>
    </section>
  )
}

export default FounderSection