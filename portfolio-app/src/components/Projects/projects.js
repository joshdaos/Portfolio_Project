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
            <h1>Grootagotchi</h1>
                <p>HTML, CSS, JavaScript, and jQuery</p>
                <a href="">Live Site<br></br></a>
                <a href="">GitHub</a>
            </div>
        </div>

        </div>
        <div className="container">
        <img src={ProjectTwo} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
            <h1>GitSumCoffee</h1>
                <p>MEN-Stack, JavaScript, Express, MongoDB/Mongoose, Node, and HTML/CSS.</p>
                <a href="">Live Site<br></br></a>
                <a href="">GitHub</a>
            </div>
        </div>

        </div>
        <div className="container">
        <img src={ProjectThree} alt="Avatar" className="image" width="100%"/>
        <div className="middle">
            <div className="text">
            <h1>Wayfarer</h1>
                <p>Python, Django, PostgreSQL, and HTML/CSS</p>
                <a href="">Live Site<br></br></a>
                <a href="">GitHub</a>
            </div>
        </div>

        </div>
        <div className="container">
        <img src={ProjectFour} alt="Avatar" className="image" width="100%" height="100px"/>
        <div className="middle">
            <div className="text">
            <h1>Dripsy</h1>
                <p>Python, Django, PostgreSQL, and HTML/CSS</p>
                <a href="">Live Site<br></br></a>
                <a href="">GitHub</a>
            </div>
        </div>
        </div>

        </section>
    )
}

export default Projects;