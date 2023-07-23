import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import VillanovaIcon from "../assets/novawhite.png";

import "../styles/Home.css";

function Home() {
    const email = 'lukeff03@gmail.com';

    return <div className = "home">
        <div className = "about">
        <h2>Hi, my name is Luke.</h2>
        <div className = "prompt">
           <p>Computer science student with a passion for turning ideas into reality.</p> 
           <a href="https://www.linkedin.com/in/luke-franco-102559248/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            </a>
            <a href = {`mailto:${email}`}>
            <EmailIcon />
            </a>
            <a href="https://github.com/lukefranc0" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            </a>
        </div>
        </div>
        <div className = "skills"> 
        <h1>Skills</h1>
        <ol className = "list">
            <li className = "item">
                <h2>Front-end</h2>
                <span>React, ReactNative, CSS, HTML, Material-UI, React Redux</span>
            </li>
            <li className = "item">
                <h2>Back-end</h2>
                <span>NodeJS, MongoDB, GitHub, Django, </span>
            </li>
            <li className = "item">
                <h2>Known Languages</h2>
                <span>Java, JavaScript, Python, C, R </span>
            </li>
        </ol>
        
        </div>
    </div>
}

export default Home