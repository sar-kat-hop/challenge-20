import React from 'react';
import { Link } from 'react-router-dom';

// TODO: implement button links to pages

function Header() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 id="hello" className="mb-5 text-5xl font-bold">Hello.</h1>
                            <p id="welcome" className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* buttons link to other pages */}
                            <button id="about-btn" className="btn btn-outline btn-info">about me</button>
                            <button id="portfolio-btn" className="btn btn-outline btn-success">portfolio</button>
                            {/* keep for use later if adding a page, maybe use for separate contact page? */}
                            {/* <button id="" className="btn btn-outline btn-warning"> some other page </button> */}
                    </div>
                </div>
            </div>
    )
}

export default Header;