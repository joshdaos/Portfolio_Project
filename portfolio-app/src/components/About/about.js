import React from 'react';
import ProfilePic from '../../images/me.jpg';

function About() {
    return(
        <div id='about' className="about__content">
            <h1>About</h1>
            <img className="profile__image" src={ProfilePic} />
            <h5>Bay Area, CA</h5>
            <p className="header__p">
                Hello. My name is Josh Daos.<br></br> I am a software engineer located in Fairfield, CA. I previously spent three years in Retail learning the ins-and-outs of consumer support, but switched over to coding in an effort to find job stability and a better work life balance. I've worked at Macy's and The Home Depot, where I became fluent in customer support, customer care, client relations, and support service. My experience at these two diverse retail environments has upskilled my work ethic, my attention to detail, and my ability to problem solve.
            </p>

            <p className="header__p">
                I always had a strong curiousity towards tech. Growing up I was...
            </p>
        </div>
    )
}

export default About;