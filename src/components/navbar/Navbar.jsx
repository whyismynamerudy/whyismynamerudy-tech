import React from 'react';
import Sidenav from 'rsuite/Sidenav';
import "./Navbar.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { HashLink as Link } from 'react-router-hash-link';

const items = [
  <Link smooth to="#intro">&lt; Home /&gt;</Link>,
  <Link smooth to="/#about">&lt; About Me /&gt;</Link>,
  <Link smooth to="/#projectList">&lt; Projects /&gt;</Link>
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
        <a href='mailto:rudraksh.monga@mail.utoronto.ca' target="_blank">
          <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
        </a>
        <a href="https://github.com/whyismynamerudy" target="_blank">
          <GitHubIcon style={{ fontSize: 20 }}></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/rudraksh-monga-5014041b5/" target="_blank">
          <LinkedInIcon style={{ fontSize: 20 }}></LinkedInIcon>
        </a>
      </div>
    </div>
  )
}

export default Navbar