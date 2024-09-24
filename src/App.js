import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component ,Fragment} from 'react'
import Navbar from './components/Navbar';
import Newscss from './components/Newscss';
export default class App extends Component {
  render() {
    return (
          <Router>
          <Navbar title="Quizer" aboutText="About Us" mode="black"/>
          <Routes>
          <Route path="/news/bite" exact element={<Newscss/>}/>
           </Routes>
          </Router>
    )
  }
}