import React from 'react'
import HTML from '../../images/html5.png'
import CSS from '../../images/css3.png'
import JS from '../../images/javascript.png'
import JQUERY from '../../images/jquery.png'
import REACT from '../../images/react.png'



function Skills() {
    return(
        <div className="skill__content">
            <h2>Front-End Tools</h2>
            <img src={HTML} alt="html icon" width="100px" height="100px" />
            <img src={CSS} alt="html icon" width="100px" height="100px" />
            <img src={JS} alt="html icon" width="80px" height="80px" />
            <img src={JQUERY} alt="html icon" width="85px" height="80px" />
            <img src={REACT} alt="html icon" width="100px" height="80px" />

            <h2>Back-End Tools</h2>
           
        </div>
    )
}

export default Skills;