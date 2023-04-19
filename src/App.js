import 'tailwindcss/tailwind.css';
// import 'daisyui/dist/daisyui.css';
import "./styles/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import AboutPg from './pages/AboutPg';
import PortfolioPg from './pages/PortfolioPg';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutPg />}></Route>
        <Route path='/portfolio' element={<PortfolioPg />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;