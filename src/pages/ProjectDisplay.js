import React from "react";
import { useParams } from "react-router-dom";
import { ProjList } from "../helpers/ProjList";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjList[id];
    return (
    <div className = "project">
        <h1>{project.name}</h1>
        
        <img src = {project.image} />
        <p><b>Skills:</b> {project.skills}</p>
        <p><b>About:</b> {project.description}</p>
        <p><b>Team:</b> {project.process}</p>
        <p>{project.feature1}</p>
        <img src = {project.image1}/>
        <p>{project.feature2}</p>
        <img src = {project.image2}/>
        <p>{project.feature3}</p>
        <img src = {project.image3}/>
        <p>{project.feature4}</p>
        <img src = {project.image4}/>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        </a>
        <p>Click this icon to go to the repository</p>

    </div>
    );
}

export default ProjectDisplay;