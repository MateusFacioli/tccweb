import React, { Component } from 'react';
import logo from '../firebase-seeklogo.com.svg';
import '../App.css';



class home extends Component {
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Faça login para continuar no EasyMeal-web</h1>
          <p>você esta em home</p>
        </header>
      </div>
    );
  }
}


export default home;