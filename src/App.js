import './App.css';
import AboutUs from './Components/AboutUs';
import Banner from './Components/Banner';
import ContactUs from './Components/ContactUs';
import Games from './Components/Games';
import Navbar from './Components/Navbar';
import OurTeam from './Components/OurTeam';
import CubGame from './Components/CubGame';

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/home" element={<Main />} />
    <Route path="/" element={<Main />} />
    <Route path="/cubgame" element={<Cubgame />} />
  </Routes>
  );
}

function Main() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <OurTeam/>
      <Games/>
      <ContactUs/>
    </div>
  );
}


// CubGame
function Cubgame() {
  return (
    <div className="CubGame">
      <CubGame/>
    </div>
  );
}

export default App;
