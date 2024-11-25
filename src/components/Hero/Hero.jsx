import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <h1>
        I'm  <span>Raghavendra Kodavalla,</span> frontend developer based in
        India.
      </h1>
      <p>
        I am a frondend developer from Andhra Pradesh, India. Had experiance in
        developing the frontend.{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            className="anchor-link"
            href="https://www.linkedin.com/in/raghavendra-kodavalla-958453248/"
          >
            Connect with Me
          </a>
        </div>
        <div className="hero-resume">
          <a
            className="anchor-link"
            href="https://drive.google.com/file/d/1YVs_LlD46zY2lC1CBDKV3sFtFw4-r06C/view?usp=drive_link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero
