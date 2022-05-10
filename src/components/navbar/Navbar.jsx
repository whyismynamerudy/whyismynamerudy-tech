import React from 'react';
import Sidenav from 'rsuite/Sidenav';
import "./Navbar.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const items = [
  <a href="#intro">/home</a>,
  <a href="#about">/about</a>,
  <a href="#productList">/projects</a>
];

const Navbar = () => {
  return (
    <div className="sidebar-nav">
      <Sidenav
        defaultOpenKeys={["3", "4"]}
        appearance={"subtle"}
      >
        <Sidenav.Body>
          <div className="sidebar-links">
            {items.map(item => <div>{item}</div>)}
          </div>
        </Sidenav.Body>
      </Sidenav>
      <div className="sidebar-logos">
        <a href='mailto:rudraksh.monga@mail.utoronto.ca'>
          <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
        </a>
        <a href="https://github.com/whyismynamerudy">
          <GitHubIcon style={{ fontSize: 20 }}></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/rudraksh-monga-5014041b5/">
          <LinkedInIcon style={{ fontSize: 20 }}></LinkedInIcon>
        </a>
      </div>
    </div>
  )
}

export default Navbar