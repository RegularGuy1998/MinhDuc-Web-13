import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';

import './App.css';
import './asset/css/main.css';
import './asset/css/style.css';
import Navbar from './components/Navbar';


function App() {
  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <script src="./asset/js/vendor-all.min.js"></script>
        <script src="./asset/js/plugins/bootstrap.min.js"></script>
        <script src="./asset/js/ripple.js"></script>
        <script src="./asset/js/pcoded.min.js"></script>
      </BrowserRouter>
  );
}

export default App;
