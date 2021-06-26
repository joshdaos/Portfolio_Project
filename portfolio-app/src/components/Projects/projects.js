import React from 'react';
import ProjectOne from '../../images/grootagotchi.jpg'

function Projects() {
    return(
        <section id="project">
            <h1>Projects</h1>

        <div className="container">
        <img src={ProjectOne} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
                <p>Grootagotchi</p>
                <a href="">Live Site</a>
            </div>
        </div>

        </div>
        <div className="container">
        <img src={ProjectOne} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
                <p>Grootagotchi</p>
                <a href="">Live Site</a>
            </div>
        </div>

        </div>
        <div className="container">
        <img src={ProjectOne} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
                <p>Grootagotchi</p>
                <a href="">Live Site</a>
            </div>
        </div>
        
        </div>
        <div className="container">
        <img src={ProjectOne} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
                <p>Grootagotchi</p>
                <a href="">Live Site</a>
            </div>
        </div>
        </div>

        </section>
    )
}

export default Projects;