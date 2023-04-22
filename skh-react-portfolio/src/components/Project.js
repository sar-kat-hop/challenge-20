import React from 'react';

//pictures
import presentPear from '../assets/images/presentpear.png';
import tasker from '../assets/images/tasker.jpg';
import yoda from '../assets/images/yodaspeak.png';

function Project() {
    return (
        <div className='flex' id='flex'>
            <h4>projects</h4>

            <div className='break'>
            </div>

            <div className='flex-container'>
                <div className='projects'>
                    <header className='card-header'>
                        <a href='https://github.com/sar-kat-hop/Bootcampers-Taskasaurus'><p> Task-a-Saurus </p></a>
                    </header>
                    <a href='https://github.com/sar-kat-hop/Bootcampers-Taskasaurus'>
                        <img className='project-img' src={tasker} alt='dinosaur logo for task-a-saurus project' />
                    </a>
                </div>
                <div className='projects'>
                    <header className='card-header' id='yoda-header'>
                        <a id='yoda-header' href='https://github.com/sar-kat-hop/Yoda-Translator'><p> Yoda Translator </p></a>
                    </header>
                    <a href="https://github.com/sar-kat-hop/Yoda-Translator">
                        <img className="project-img" src={yoda} alt="screenshot of yoda translator app" />
                    </a>
                </div>
                <div className='projects'>
                    <header className='card-header'>
                        <a href='https://present-pear.herokuapp.com/'> <p> Present Pear </p> </a>
                    </header>
                    <a href="https://present-pear.herokuapp.com/">
                        <img className="project-img" src={presentPear} alt="present pear logo mockup" />
                    </a>
                </div>
            </div>

            {/* <div className='break'>
            </div> */}

            {/* <div className='projects'>
                <header className='card-header'>
                    <p> Yoda Translator </p>
                </header>
                <a href="https://github.com/sar-kat-hop/Yoda-Translator">
                    <img className="project-img" src={yoda} alt="screenshot of yoda translator app" />
                </a>
            </div> */}

            {/* <div className='break'>
            </div> */}

            {/* <div className='projects'>
                <header className='card-header'>
                    <p> Present Pear </p>
                </header>
                <a href="https://present-pear.herokuapp.com/">
                    <img className="project-img" src={presentPear} alt="present pear logo mockup" />
                </a>
            </div> */}
        </div>
    )
};

export default Project;