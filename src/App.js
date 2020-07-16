import React, { Component } from 'react';
import './App.css';
import Firstgen from './components/Firstgen';

export const  UsernameContext = React.createContext('Aidarous');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          
          <Firstgen />
          
          
        </header>
      </div>
    );
  }
}

export default App;
