import React from 'react';
import logo from './logo.svg';
// common components
import Header from "./Views/components/header"

// adding styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

//JAvascript libraries
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <h1 className="container">Hello World</h1>
    </div>
  );
}

export default App;
