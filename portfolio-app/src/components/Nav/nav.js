import React from 'react'

function Nav() {
    return(
        <nav className="navbar">
            <ul className="nav__links">
                <li className="nav__links-li">JRD</li>
                <li className="nav__links-li"><a href="">About</a></li>
                <li className="nav__links-li"><a href="">Portfolio</a></li>
                <li className="nav__links-li"><a href="">Skills</a></li>
                <li className="nav__links-li"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;