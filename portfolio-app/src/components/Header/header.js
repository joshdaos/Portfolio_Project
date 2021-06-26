import React from 'react';
import Typewriter from 'typewriter-effect';

function Header() {
    return(
        <header id="home" className="header__content">
            <Typewriter className="typewriter__content"
            onInit={(typewriter) => {
                typewriter.typeString('Software Engineer')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                .typeString('Designer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Travel Enthusiast')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Food Lover')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Minimalist')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Josh Daos')
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
            }}
            />
        </header>
    )
}

export default Header;