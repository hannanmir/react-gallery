import React, { Component } from 'react';
import './App.css';
import Gallery from '../Gallery/Gallery.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my Cats</h1>
        </header>
        <br/>
        <Gallery />
      </div>
    );
  }
}

export default App;
