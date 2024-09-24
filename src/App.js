import './App.css';
import React, { Component ,Fragment} from 'react'
import Navbar from './components/Navbar';
import Newscss from './components/Newscss';
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Newscss/>
      </Fragment>
    )
  }
}