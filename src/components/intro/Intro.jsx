import React from 'react';
import "./Intro.css";
import me from "../../img/me-cutout.png";
import TypeWriterEffect from 'react-typewriter-effect';
import Navbar from '../navbar/Navbar';

const roles = ['Web Developer', 'University Student', 'Writer', 'Logician', 'Content Creator'];
// remember to change animation % in css when adding / removing roles
const visibleRoles = roles.map(role => <div className='intro-title-item'>{role}</div>);

const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
          <div className="intro-left-wrapper">
            <h2 className='intro-intro'>Hello, my name is</h2>
            <TypeWriterEffect
              className="intro-name"
              textStyle={{ fontFamily: 'Poppins', fontSize: 60, color: 'white' }}
              startDelay={100}
              cursorColor= 'white'
              text="Rudraksh Monga"
              typeSpeed={100}
          />
            <div className="intro-title">
              <div className="intro-title-wrapper">
                {visibleRoles}
              </div>
            </div>
            <div className="intro-description">
              I am a software engineer based in Toronto. I have a profound
              interest in web development, machine learning, computational logic,
              and everything in between.
            </div>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-bg"></div>
          <img src="https://images.unsplash.com/photo-1646753442092-bdf6f25241c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
          alt="A photo of me, Rudy" className="intro-img" />
        </div>
    </div>
  );
};

export default Intro;
