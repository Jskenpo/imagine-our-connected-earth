import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/home/home';
import Air from './views/Air_quality/air';
import Temperature from './views/Temperature/temperature';
import BandA from './views/BandA/banda';
import About from './views/About/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router /*basename="/space-app/webpack/index.html"*/ >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/air" element={<Air />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/BandA" element={<BandA />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
