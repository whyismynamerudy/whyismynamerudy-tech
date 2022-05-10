import React from 'react'
import './ProjectList.css'
import Project from '../project/Project'
import { products } from "../../data"
import Product from '../project/Project'

const ProductList = () => {

  const projects = [
      {
          title: "whyismynamerudy.tech",
          desc: "My personal website made using React.js and React Router.",
          tech_stack: "Javascript, React.js, HTML/CSS",
          link: "https://github.com/whyismynamerudy/whyismynamerudy-tech",
          open: "https://whyismynamerudy.tech/"
      },
      {
        title: "Planck",
        desc: "A homework planner application that aids in time management and organization.",
        tech_stack: "Java, JavaFX, MySQL",
        link: "https://github.com/whyismynamerudy/Planck",
        open: ""
      },
      {
        title: "Flappy Bird AI",
        desc: "A self-learning AI that learns to play the classic Flappy Bird game.",
        tech_stack: "Python, PyGame, NEAT-Python",
        link: "https://github.com/whyismynamerudy/FlappyBirdAI",
        open: ""
      },
      {
        title: "J-Coleify",
        desc: "An Edge browser extension that converts all images into images of J. Cole.",
        tech_stack: "Javascript",
        link: "https://github.com/whyismynamerudy/J-Coleify",
        open: ""
      },
      {
        title: "PDF-To-Docx Converter",
        desc: "A .py script that converts a PDF file into a Word document",
        tech_stack: "Python, GroupDocs API",
        link: "https://github.com/whyismynamerudy/PDFConverter",
        open: ""
      }
    ];

  return (
    <div className="projectList" id="projectList">
        <div className="projectList-header">
            <span className='projectList-title'>/ projects</span>
        </div>
        <div className="projectList-list">
            {projects.map((project) => {
                return (<Product className="project" title={project.title} desc={project.desc}
                tech_stack={project.tech_stack} link={project.link}
                open={project.open}/>)
            })}
        </div>
    </div>
  )
}

export default ProductList


{/* <div className='productList'>
        <div className="productList-text">
            <h1 className="productList-title">Personal Projects</h1>
            <p className="productList-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptatibus velit assumenda, quae ab harum qui voluptatem, nesciunt animi vitae eligendi facilis, eveniet quo tempora nemo? Nostrum nisi veniam ratione.    
            </p>    
        </div>
        <div className="productList-list">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}
            
        </div>
    </div> */}