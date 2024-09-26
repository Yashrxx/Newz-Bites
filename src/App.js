import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  // Route,
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscss from './components/Newscss';
export default class App extends Component {
  pageSize=15;
  render() {
    return (
          <Router>
          <Navbar title="Arya" aboutText="About Us" mode="black"/>
          <Newscss pageSize={this.pageSize} country="us" category="general"/>
          <Routes>
            <Route path='/' exact element={<Newscss pageSize={this.pageSize} country="us" category="general"/>}/>
            <Route path='/general' exact element={<Newscss pageSize={this.pageSize} country="us" category="general"/>}/>
            <Route exact path='/buisness' element={<Newscss key='buisness' pageSize={this.pageSize} country="us" category="Buisness"/>}/>
            <Route exact path='/entertainment' element={<Newscss key='entertainment' pageSize={this.pageSize} country="us" category="Entertainment"/>}/>
            <Route exact path='/health' element={<Newscss key='health' pageSize={this.pageSize} country="us" category="Health"/>}/>
            <Route exact path='/science' element={<Newscss key='science' pageSize={this.pageSize} country="us" category="Science"/>}/>
            <Route exact path='/sports' element={<Newscss key='sports' pageSize={this.pageSize} country="us" category="Sports"/>}/>
            <Route exact path='/technology' element={<Newscss key='technology' pageSize={this.pageSize} country="us" category="Technology"/>}/>
          </Routes>
          </Router>
    )
  }
}