import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import { Navbar, Footer } from "./components";

//pages
import { Home, AboutPg, PortfolioPg } from "./pages";

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