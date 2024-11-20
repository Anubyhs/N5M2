import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista.js'
import LivroDados from './LivroDados.js'
import LivrosApi from './LivrosApi.js'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand navbar-light bg-lightgreen">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'blue', fontWeight: 'bold' }}>
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dados" className="nav-link" style={{ color: 'Blue', fontWeight: 'bold' }}>
                Novo
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
          <Route path="/api/livros" element={<LivrosApi />} />
        </Routes>
      </Router>
      <footer className="footer navbar navbar-expand navbar-light bg-lightgreen">
      </footer>
      <footer className="footer navbar navbar-expand navbar-light bg-lightgreen">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p className="nav-link" style={{ color: 'blue', fontWeight: 'bold' }}>
              &copy; Francinaldo Sebo Cultural 2024 - Todos os direitos reservados
            </p>
          </li>
        </ul>
      </footer>
    </div>
  );
}


export default App;
