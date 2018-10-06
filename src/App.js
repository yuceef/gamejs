import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Game from './Game';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      started: false
    };
    this.handleStart = this.handleStart.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }
  handleStart = ()=>{
    this.setState(state => ({
      started: true
    }));
  }
  gameOver = (Score) => {
      alert("Game Over, your score is " + Score)
      this.setState(state => ({
        started: false
      }));
      console.log("game over");
  }

  render() {
    return (
      <div className="App"  >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            (this.state.started)?<Game gameOver={this.gameOver} />:<Home handleStart={this.handleStart} />
          }
        </header>
      </div>
    );
  }
}

export default App;
