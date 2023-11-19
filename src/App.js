import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactPage from "./pages/contact";
import './App.css';

import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage></ContactPage>} />
      </Routes>
    </Router>
  );
}

export default App;
