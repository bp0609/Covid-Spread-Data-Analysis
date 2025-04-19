import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Blog from "./components/Blog";
import NotebookViewer from "./components/NotebookViewer";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/notebook">Notebook</Link>
          </li>
        </ul>
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
