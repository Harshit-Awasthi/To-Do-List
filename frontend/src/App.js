import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import SignUp from './components/signup/signup';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from './components/signup/signin';
import Tasks from './components/tasks/tasks';

const App = () => {
  return (
  
  <div>

    <Router>

    <Navbar/>
    
    <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>

    </Router>
   
    <Footer/>
  
  
  </div>
  
);

}

export default App;