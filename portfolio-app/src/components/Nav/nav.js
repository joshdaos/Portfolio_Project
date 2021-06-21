import React from 'react'

function Nav() {
    return(
        <nav className="navbar">
            <ul className="nav__links">
                <li id="home__link" className="nav__links-li"><a href="#home">JRD</a></li>
                <li className="nav__links-li"><a href="#about">About</a></li>
                <li className="nav__links-li"><a href="#project">Projects</a></li>
                <li className="nav__links-li"><a href="">Skills</a></li>
                <li className="nav__links-li"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;