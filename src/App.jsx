import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Inicio/Inicio.jsx';
import Doar from './Pages/Doar/Doar.jsx';
import Livros from './Pages/Livros/Livros.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doar" element={<Doar />} />
        <Route path="/Livros" element={<Livros />} />
      </Routes>
    </Router>
  );
}

export default App;