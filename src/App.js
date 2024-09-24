import './App.css';
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscss from './components/Newscss';
export default class App extends Component {
  render() {
    return (
          <Router>
          <Navbar title="Arya" aboutText="About Us" mode="black"/>
          <Newscss/>
          </Router>
    )
  }
}