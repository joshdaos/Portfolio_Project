import React from 'react';
import ProjectOne from '../../images/grootagotchi.jpg'



function Projects() {
    return(
        <section id="project">
            <h1>Projects</h1>

        <div class="card">
        <img src={ProjectOne} alt="Avatar" width="100%" height="50%"/>
            <div class="container">
            <h4><b>Project 1</b></h4>
            <p>Tamagotchi Game</p>
            <a href="">Live Site</a>
            </div>
        </div>

        <div class="card">
        <img src={ProjectOne} alt="Avatar" width="100%" height="50%"/>
            <div class="container">
            <h4><b>Project 1</b></h4>
            <p>Tamagotchi Game</p>
            <a href="">Live Site</a>
            </div>
        </div>

        <div class="card">
        <img src={ProjectOne} alt="Avatar" width="100%" height="50%"/>
            <div class="container">
            <h4><b>Project 1</b></h4>
            <p>Tamagotchi Game</p>
            <a href="">Live Site</a>
            </div>
        </div>
        
        <div class="card">
        <img src={ProjectOne} alt="Avatar" width="100%" height="50%"/>
            <div class="container">
            <h4><b>Project 1</b></h4>
            <p>Tamagotchi Game</p>
            <a href="">Live Site</a>
            </div>
        </div>
        
        </section>
    )
}

export default Projects;