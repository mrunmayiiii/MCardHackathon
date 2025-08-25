import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import LandingPage from './pages/LandingPage';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default */}
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: { fontSize: "13px" },
        }}
      />
    </div>
  );
}

export default App;
