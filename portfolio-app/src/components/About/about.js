import React from 'react';
import ProfilePic from '../../images/me.jpg';

function About() {
    return(
        <div id='about' className="about__content">
            <h1>About</h1>
            <img className="profile__image" src={ProfilePic} />
            <p className="header__p">
                Hello. My name is Josh Daos.<br></br> I am Full-Stack Developer with a passion for UI Design.
            </p>
        </div>
    )
}

export default About;