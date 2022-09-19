import React from 'react';
import mainIllustration from '../images/illustration-working.svg';

const HeroSection = () => {
  return (
    <section className='hero-section' >
      <div className="content">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on your links are performing.</p>
        <button>Get Started</button>
      </div>
      <div className="main-illustration">
        <img src={mainIllustration} alt=""/>
      </div>
    </section>
  )
}

export default HeroSection