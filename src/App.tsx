import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";
import MainSection from "./components/MainSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content-container">
          <Heading />
          <MainSection />
        </div>
      </Router>
    </div>
  );
}

export default App;
