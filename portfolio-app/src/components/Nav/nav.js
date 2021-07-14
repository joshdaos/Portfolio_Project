import React from 'react'

function Nav() {
    return(
        <nav id="navbar" className="navbar">
            <ul className="nav__links">
                <li id="home__link" className="nav__links-li"><a className="anchor"href="#home">JRD</a></li>
                <li className="nav__links-li"><a className="anchor" href="#about">About</a></li>
                <li className="nav__links-li"><a className="anchor" href="#project">Projects</a></li>
                <li className="nav__links-li"><a className="anchor" href="">Skills</a></li>
                <li className="nav__links-li"><a className="anchor" href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;