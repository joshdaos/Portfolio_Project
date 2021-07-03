import React from 'react';
import ProjectOne from '../../images/grootagotchi.jpg'
import ProjectTwo from '../../images/gitsumcoffee.jpg'
import ProjectThree from '../../images/wayfarer.jpg'
import ProjectFour from '../../images/dripsy.jpg'


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
        <img src={ProjectTwo} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
                <p>Grootagotchi</p>
                <a href="">Live Site</a>
            </div>
        </div>

        </div>
        <div className="container">
        <img src={ProjectThree} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
                <p>Grootagotchi</p>
                <a href="">Live Site</a>
            </div>
        </div>

        </div>
        <div className="container">
        <img src={ProjectFour} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
                <h1>Grootagotchi</h1>
                <p>HTML, CSS, JAVASCRIPT, and JQUERY</p>
                <a href="">Live Site<br></br></a>
                <a href="">GitHub</a>
            </div>
        </div>
        </div>

        </section>
    )
}

export default Projects;