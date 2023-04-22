import React from 'react';

// import images
import myPhoto from '../assets/images/myPhoto.jpeg';
// import starlights from '../assets/images/cardbg.jpg';

function About() {
    return(
        <main>
        <div className='about-me' id='about-me'>
            <h3 id='about-head'>about me</h3>
            <img id='photo' src={myPhoto} alt='sarah, website creator' />
            <p>
                When I was 5 or 6 years old, my family got our first computer. One of the first programs I remember using -- and being amazed with -- was MS Paint. I spent many hours on the computer, creating "art" in Paint or playing Catz.  
                <div class='break'></div>
                <br></br>
                Experiencing the possibilities of programming sparked a lifelong interest in tech and the things it can achieve. 
                <div class='break'></div>
                <br></br>
                As the first step towards becoming a software developer, I'm learning full-stack web development using MERN. This portfolio is my first React app, and the product of more hours of on-the-fly learning and troubleshooting than I'd like to admit.
                <div class='break'></div>
                <br></br>
                I'm interested in a wide range of areas, such as UI/UX design, AI, game development, and more.
            </p>
        </div>
        </main>
    )
};

export default About;

// style={{ backgroundImage: `url(${starlights})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}