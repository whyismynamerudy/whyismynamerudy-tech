import React from 'react';
import { Nav, Sidenav } from 'rsuite';
import "./Navbar.css";

//const items = ['home', 'about', 'projects', 'resume'];

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <Sidenav
      appearance='subtle'>
        <Sidenav.Body>
          <Nav>
            <Nav.Item>/home</Nav.Item>
            <Nav.Item>/about</Nav.Item>
            <Nav.Item>/projects</Nav.Item>
            <Nav.Item>/resume</Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  )
}

export default Navbar