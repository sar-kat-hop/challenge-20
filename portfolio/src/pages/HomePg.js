import React from 'react';
import { Link } from 'react-router-dom';

function HomePg() {
    return (
        <body>
        <main>
            <div className='centered'>
                <h1 id='hello-1'>hello.</h1>
                    <p id='lead'> thanks for visiting! </p>
                    <p id='instructions'>
                        <Link className='homepg-link' to='/about'>about me</Link>
                        <Link className='homepg-link' to='/portfolio'>my portfolio</Link>
                    </p>
            </div>
        </main>
        </body>
    )
};

export default HomePg;