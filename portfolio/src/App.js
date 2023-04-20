import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Project from './components/Project';

function App() {
  return(
    <body>
        <Header />
          <main>
            <div className='centered'>
              {/* <Project /> */}
              <h1 id='hello-1'>hello.</h1>
              <p id='lead'> thank you for visiting my portfolio! </p>
              <p id='instructions'> please click the links above to read more about me or take a look at some of my work. </p>
            </div>
          </main>
        <Footer />
      </body>
  )
};

export default App;