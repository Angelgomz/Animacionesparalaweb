import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logoplatzi from './logoplatzi.png';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
  state={
    logo:logo,
  }
  onClick(){
      this.setState({
        logo: logoplatzi,
      })
  }
  render() {
    return (
      <div className="App">
     
        <header className="App-header">
        <CSSTransitionGroup transitionName="logoplatzi"  >  
          <img src={this.state.logo} key={this.state.logo} className="logoplatzi" alt="logo" />
          </CSSTransitionGroup>
          <h1 className="App-title">¡HOLA MUNDO!</h1>
          <button onClick={this.onClick.bind(this)}>click me!</button>
        </header>
       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
