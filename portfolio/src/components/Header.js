import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className='main-header'>
            <h1 id='nav-head'>sarah <span id='kat'>k.</span> h.</h1>
                <nav>
                    <p>
                        <Link to='/'>home</Link>
                    </p>
                    <p>
                        {/* <a href="#about-me">about</a> */}
                        <Link to='/about'>about</Link>
                    </p>
                    <p>
                        {/* <a href="#flex">portfolio</a> */}
                        <Link to='/portfolio'>portfolio</Link>
                    </p>
                    {/* may implement in future but currently just have contact info in footer */}
                    {/* <p>
                        <a href="#contact-me">contact</a>
                    </p> */}
                </nav>
        </header>
    )
};

export default Header;