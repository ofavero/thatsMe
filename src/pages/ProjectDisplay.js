import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {

    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt="Img" />
            <p>
                <b>Skills:</b> {project.skills} <br />
                <b>Site:</b><a href={project.link}>{project.link}</a>
            </p>
        </div>
    )
}

export default ProjectDisplay
