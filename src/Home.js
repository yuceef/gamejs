import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { pourcentage: 0,end: false };
  }
  loading = ()=>{
    if(this.state.pourcentage<100)
      this.setState(state => ({
        pourcentage: state.pourcentage + 10
      }));
    else
      this.setState(state => ({
        end: true
      }));
  }
  componentDidMount() {  
      this.interval = setInterval(() => this.loading(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Loading <code>GameJs</code> Plz wait ...
          </p>
          <div className="progress" style={{width: "25%",height: "30px"}}>
            <div className="progress-bar progress-bar-striped bg-theme font-weight-bold" role="progressbar" style={{width: this.state.pourcentage + "%",height: "30px"}} aria-valuenow={this.state.pourcentage} aria-valuemin="0" aria-valuemax="100">{this.state.pourcentage + "%"}</div>
          </div>
          {
            (this.state.end)? <button className="btn btn-info btn-big bg-theme mt-2 col-md-2 font-weight-bold">Start</button>:null
          }
        </header>
    );
  }
}

export default Home;
