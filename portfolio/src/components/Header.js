import React from 'react';

function Header() {
    return(
        <header className='main-header'>
            <h1 id='nav-head'>sarah <span id='kat'>k.</span> h.</h1>
            <nav>
                <p>
                    <a href="#about-me">about</a>
                </p>
                <p>
                    <a href="#flex">portfolio</a>
                </p>
                {/* may implement in future but currently just have contact info in footer */}
                {/* <p>
                    <a href="#contact-me" onClick={() => handlePageChange('Contact')}>contact</a>
                </p> */}
            </nav>
        </header>
    )
};

export default Header;