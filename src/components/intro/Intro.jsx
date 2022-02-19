import React from 'react';
import "./Intro.css";
import me from "../../img/me-cutout.png";

const roles = ['Web Developer', 'University Student', 'Writer', 'Logician', 'Content Creator'];
// remember to change animation % in css when adding / removing roles
const visibleRoles = roles.map(role => <div className='intro-title-item'>{role}</div>);

const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
          <div className="intro-left-wrapper">
            <h2 className='intro-intro'>Hello, my name is</h2>
            <h1 className='intro-name'>Rudraksh "Rudy" Monga</h1>
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
          <img src={me} alt="A photo of me, Rudy" className="intro-img" />
        </div>
    </div>
  );
};

export default Intro;
