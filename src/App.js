import logo from './image/yktlogo.jpeg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Create from './components/createForm'
import Projects from './components/projects'
import Submitted from './components/submitted'
import Applications from './components/applications'
import HomeScreen from './components/homescreen'
import About from './components/about'
import Faq from './components/faq'
import Footer from './components/footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createHistory, Link, LocationProvider, Router } from '@reach/router';
import createHashSource from 'hash-source';

// Create a custom history for reach/router that uses hash urls,
// e.g. #/about rather than /about
// This is necessary for us to support routing on Github Pages, since they
// don't support routing via the pushState API.
const source = createHashSource();
const history = createHistory(source);

function App() {

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => {
        console.log(res.data);
      })
  }, [])

  const columnStyleOne = {
    color: "black",
    backgroundColor: "white",
    margin: "10px 20px 20px 25px",
    padding: "10px",
    width: "80px",
    height: "40px",
    textAlign: "center",

    fontFamily: "Avenir Next",
    fontSize: '15px'

};

  return (
    <LocationProvider history={history}>
      <div className="App">
        <nav className="navbar sticky-top navbar-expand-lg navbar-custom ">
          <img src={logo} style={{width:"35px"}}/>
          <Link className="navbar-brand text-white  m-2 bold" to="/"><b>YKT LABEL</b></Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

            <div className="navbar-nav" >
              <Link className="nav-item text-white m-3 bold " to="/about">ABOUT</Link>
              <Link className="nav-item text-white m-3 bold " to="/projects">FEATURES</Link>
              <Link className="nav-item text-white m-3 bold " to="/faq">FAQ</Link>
              {/* // ** NEW LINK */}
              <a href="https://www.youtube.com/channel/UCpLUqZQvFbkQ5lz92EG5htQ" class="fa fa-youtube"></a>
              <Link style={columnStyleOne} to="/new">APPLY</Link>
            </div>
          </div>
        </nav>


        <Router>
          <HomeScreen path="/"/>
          <Create path="/new"/>
          <About path="/about"/>
          <Faq path="/faq"/>
          <Projects path="/projects"/>
          <Applications path="/a19300366c7byktlabel"/>
          <Submitted path="/submitted"/>

        </Router>
        <Footer></Footer>
      </div>
    </LocationProvider>
  );
}

export default App;
