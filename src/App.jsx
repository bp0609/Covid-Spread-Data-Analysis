import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import NotebookViewer from "./components/NotebookViewer";
import "./styles/NavbarStyles.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="Covid_Analysis.png" alt="COVID-19 Logo" />
            <h1>COVID-19 Analysis</h1>
          </div>

          <button className="menu-button" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={isActive("/")}
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/notebook"
                  className={isActive("/notebook")}
                  onClick={() => setMenuOpen(false)}
                >
                  Notebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="app-container">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/notebook" element={<NotebookViewer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
