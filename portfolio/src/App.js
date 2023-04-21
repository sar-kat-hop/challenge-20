import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePg from './pages/HomePg';
import PortfolioPg from './pages/PortfolioPg';
import AboutPg from './pages/AboutPg';

function App() {
  return(
    <Router>
          <body>
            <div>
              <Header />
          </div>
          <main>
            <Routes>
              <Route  
                path='/'
                element={<HomePg />}
              />
              <Route
                path='/about'
                element={<AboutPg />}
              />
              <Route
                path='portfolio'
                element={<PortfolioPg />}
              />
            </Routes>
          </main>
          <Footer />
          </body>
      </Router>
  )
};

export default App;