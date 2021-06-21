import React from 'react'
import Typewriter from 'typewriter-effect';

function Header() {
    return(
        <header className="header__content">
            <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('Joshua Daos')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(2500)
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