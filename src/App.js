import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/userprofile" element={<UserProfile />}/>
        </Routes>
      </Router>
  );
}

export default App;
