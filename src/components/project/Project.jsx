import React from 'react'
import './Project.css'
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const Product = ({ title, desc, tech_stack, link, open }) => {
  return (
    <div className="project">
      <div className="project-header">
        <div className="folder-icon">
          <FolderOpenRoundedIcon style={{ fontSize: 38}} />
        </div>
        <div className="external-links">
          <a href={link} target="_blank" className="github-icon">
            <GitHubIcon style={{ fontSize: 24 }} />
          </a>
          <a href={open} target="_blank" className="browser-icon" >
            <OpenInBrowserIcon style={{ fontSize: 26 }}/>
          </a>
        </div>
      </div>
      <div className="project-title">{title}</div>
      <div className="project-desc">{desc}</div>
      <div className="project-tech">{tech_stack}</div>
    </div>
  )
}

export default Product

{/* <div className='product'>
        <div className="product-browser">
            <div className="product-circle"></div>
            <div className="product-circle"></div>
            <div className="product-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="product-link">
            <img src={img} alt="" className="product-img" />    
        </a>
    </div> */}