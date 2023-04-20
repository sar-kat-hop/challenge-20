import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPg from '../pages/AboutPg';
// import About from '../components/About';
import PortfolioPg from '../pages/PortfolioPg';
import HomePg from '../pages/HomePg';

function Header() {
    return(
        <Router>
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
            <div>
                <Routes>
                    <Route path='/about' element={AboutPg}>
                    </Route>
                    <Route path='/portfolio' element={PortfolioPg}>
                    </Route>
                    <Route path='/' element={HomePg}>
                    </Route>
                </Routes>
            </div>
        </header>
        </Router>
    )
};

export default Header;