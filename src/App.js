import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserProfile from './Pages/UserProfile/UserProfile';
import Manubar from './Components/Manubar/Manubar';
import UserLogIn from './Pages/UserLogIn/UserLogIn';
import UserSignup from './Pages/UserSignup/UserSignup';
import AddPost from './Pages/AddPost/AddPost';

function App() {
  return ( 
    <>
      <Router>
        <Manubar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/userprofile" element={<UserProfile />}/>
          <Route exact path="/login" element={<UserLogIn />}/>
          <Route exact path="/usersignup" element={<UserSignup/>}/>
          <Route exact path="/addpost" element={<AddPost/>}/>
        </Routes> 
      </Router>
    </>     
  );
}

export default App;
