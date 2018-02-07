import React, { Component } from 'react';
import logo from './logo.svg';
import cn from './App.css';

class App extends Component {
  render() {
    return (
      <div className={cn.App}>
        <header className={cn.header}>
          <img src={logo} className={cn.logo} alt="logo" />
          <h1 className={cn.title}>Welcome to React</h1>
        </header>
        <p className={cn.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
