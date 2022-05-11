import React from 'react'
import "./Credits.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Credits = () => {
  return (
    <div className="credits">
        <div>Built and designed by Rudraksh Monga.</div>
        <div>All rights reserved. ©</div>
        <div className="credits-external-links">
          <a href='mailto:rudraksh.monga@mail.utoronto.ca' target="_blank">
            <EmailIcon style={{ fontSize: 35 }}></EmailIcon>
          </a>
          <a href="https://github.com/whyismynamerudy" target="_blank">
            <GitHubIcon style={{ fontSize: 35 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/rudraksh-monga-5014041b5/" target="_blank">
            <LinkedInIcon style={{ fontSize: 35 }}></LinkedInIcon>
          </a>
        </div>
    </div>
  )
}

export default Credits