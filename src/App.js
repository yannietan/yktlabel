import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Create from './components/createForm'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Router} from '@reach/router';

function App() {

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => {
        console.log(res.data);
      })
  }, [])

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <Link className="navbar-brand text-danger m-1 lead" to="/">Project Manager</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link text-danger lead" to="/">Home</Link>
            <Link className="nav-item nav-link text-danger lead" to="/new">Create a Project</Link>
          </div>
        </div>
      </nav>

      <Router>
        <Home path="/"/>
        <Create path="/new"/>
      </Router>
    </div>
  );
}

export default App;

