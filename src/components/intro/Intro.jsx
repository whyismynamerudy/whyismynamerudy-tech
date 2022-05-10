import React from 'react';
import "./Intro.css";
import me from "../../img/me-cutout.png";
import TypeWriterEffect from 'react-typewriter-effect';

const roles = ['Software Engineer', 'University Student', 'Writer', 'Web Developer', 'Content Creator'];
// remember to change animation % in css when adding / removing roles
const visibleRoles = roles.map(role => <div className='intro-title-item'>{role}</div>);

const Intro = () => {
  return (
    <div className='intro' id="intro">
      <div className="intro-wrapper">
        <h2 className='intro-intro'>Hi, my name is</h2>
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
          interest in full-stack development, artifical intellgience, game development,
          and everything in between.
        </div>
        <div className="intro-email">
          <button className="intro-button" onClick={() => window.location.href = 'mailto:rudraksh.monga@gmail.com'}>
            Say hi!
          </button>
        </div>
      </div>
        {/* <div className="intro-right">
          <div className="intro-bg"></div>
          <img src={me} 
          alt="A photo of me, Rudy" className="intro-img" />
        </div> */}
    </div>
  );
};

export default Intro;
