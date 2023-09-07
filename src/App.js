import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn, Dashboard } from "./pages/pages-index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
