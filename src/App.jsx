import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import {Login} from './pages/Login'
// import {Signup} from './pages/Signup'
// import LandingPage from './pages/LandingPage';
//import FeedbackStudent from './pages/FeedbackStudent';
import FeedbackCompany from './pages/FeedbackCompany';
 import StudentListPage from './pages/Company/StudentListPage';
import Dashboard from './pages/Company/Dashboard';

import './App.css';

function App() {
  return (
    // <div>
     
    //   <Router>
    //     <Routes>
    //       {/* Default */}
    //       {/* <Route path="/" element={<LandingPage />} />
    //       <Route path="/login" element={<Login />} /> 
    //      <Route path="/signup" element={<Signup />} /> */}
    //     </Routes>
    //   </Router>

    //   <Toaster
    //     toastOptions={{
    //       className: "",
    //       style: { fontSize: "13px" },
    //     }}
    //   />
    // </div>
    // <div>
    //   <Dashboard>
    // </div>
    <div> <Dashboard/></div>
   
  );
}

export default App;
