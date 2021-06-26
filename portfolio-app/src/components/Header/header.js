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
<<<<<<< HEAD:portfolio-app/src/components/Header/header.js
                .typeString('Designer')
=======
                .typeString('Aspiring UI Designer')
>>>>>>> dc4cc48b8d5cc810b8e9c9d38674b47af4113936:portfolio-app/src/components/header/header.js
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