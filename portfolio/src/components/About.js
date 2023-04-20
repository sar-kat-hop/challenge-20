import React from 'react';

// import images
import myPhoto from '../assets/images/myPhoto.jpeg';
import starlights from '../assets/images/cardbg.jpg';

function About() {
    return(
        <div className='about-me' id='about-me' style={{ backgroundImage: `url(${starlights})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h3>about me</h3>
            <img id='photo' src={myPhoto} alt='sarah, website creator' />
            <p>
                When I was 5 or 6 years old, my family got our first computer. I remember my dad showing me how to use MS Paint and how amazing and mysterious it was. Experiencing the possibilities of programming, starting with MS Paint and videogames, sparked a lifelong fascination with tech and the things it can achieve. 
                
                As the first step towards becoming a software developer, I'm learning full-stack web development. I'm currently working on improving my html and css, and will be learning JavaScript soon.

                I'm interested in a wide range of areas including web development, UI/UX design, game development, and more.
            </p>
        </div>
    )
};

export default About;