
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Home from './components/Home.js'
import Services from './components/Services.js'
import SignUp from './components/SignUp.js'
import PageNotFound from './components/PageNotFound'









class App extends React.Component {


  render() {

    return (
      <BrowserRouter>

        <div className="App container  ">

          <NavBar />
          <Routes>
            <Route path="/Contact" element={<Contact />}> </Route>
            <Route path="/About" element={<About />}> </Route>
            <Route exact path="/" element={<Home />}> </Route>
            <Route path="/Services" element={<Services />}> </Route>
            <Route path="/SignUp" element={<SignUp/>}> </Route>
            <Route path="*" element={<PageNotFound/>}> </Route>
            
          </Routes>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;




