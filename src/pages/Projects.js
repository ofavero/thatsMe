import React from 'react'
import Projectitem from '../components/Projectitem'
import "../styles/Project.css";
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1>Projetos Desenvolvidos</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <Projectitem id={idx} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects