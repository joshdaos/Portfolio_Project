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
        <img src="https://media3.giphy.com/media/4LTGEdPueINFzycY1Ixq/200.webp?cid=ecf05e472q8rjtjl31sfaag11ljvv4f1x4gg1j01okhiowf9&rid=200.webp&ct=g" alt="Avatar" className="image" width="100%"/>
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