import React from 'react'

function Nav() {
    return(
        <nav className="navbar">
            <ul className="nav__links">
                <li id="home__link" className="nav__links-li"><a href="">JRD</a></li>
                <li className="nav__links-li"><a href="#about">About</a></li>
                <li className="nav__links-li"><a href="">Portfolio</a></li>
                <li className="nav__links-li"><a href="">Skills</a></li>
                <li className="nav__links-li"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;