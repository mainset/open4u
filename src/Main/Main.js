import React, { Component } from 'react';

import logo from './../assets/open4u-logo.svg';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <header className="main-header">
          <img src={logo} className="main-logo" alt="logo" />
          <h1 className="main-title">Welcome to React</h1>
        </header>
        <p className="main-intro">
          To get started, edit <code>src/Main.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;
