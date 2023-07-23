import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/Home With Multiple Tasks Expanded.png'
import "../styles/Projects.css";
import {ProjList} from '../helpers/ProjList';
function Projects() {
    return (
        <div className = "projects">
            <h1> My Personal Projects </h1>
            <div className = "projectList">
                {ProjList.map((project, idx) => {
                return <ProjectItem id = {idx} name = {project.name} image = {project.image1} />;
                })}
            </div>
        </div>
    )
}

export default Projects