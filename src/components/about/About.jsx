import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img 
              src="https://images.unsplash.com/photo-1646753442092-bdf6f25241c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className='about-image'
            />
          </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Hi! My name is Rudraksh Monga, but I often go by Rudy.</p>
          <p className="about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <div className="about-awards">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEkHzJBMARDHA/profile-displayphoto-shrink_800_800/0/1597889211525?e=1652313600&v=beta&t=jPGr188A5snoQZeq9fYKDRstBDsCSVAc9B4rbF3p3DI"
            alt="Me with WR" className="about-award-img" />
            <div className="about-award-text">
                <h4 className="about-award-title">Student Leader GWR</h4>
                <p className="about-award-desc">I was a student volunteer and I
                did this and organized that and successfully won GWR.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About