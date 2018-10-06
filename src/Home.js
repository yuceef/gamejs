import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props
    this.state = { pourcentage: 0,end: false };
  }
  loading = ()=>{
    if(this.state.pourcentage<100){
      let add = this.state.pourcentage + parseInt(Math.random()*25) 
      this.setState(state => ({
        pourcentage: (add>100)?100:add
      }));
    }
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
        <div>
          <p>
            Loading <code>GameJs</code> Please wait ...
          </p>
          <p style={{fontSize: "15px"}}>In this game , we have a table of numbers less than 25 , <br /> the player must select cells whose sum is 25 in a precise duration.</p>

          <div className="progress" style={{width: "100%",height: "30px"}}>
            <div className="progress-bar progress-bar-striped bg-theme font-weight-bold" role="progressbar" style={{width: this.state.pourcentage + "%",height: "30px"}} aria-valuenow={this.state.pourcentage} aria-valuemin="0" aria-valuemax="100">{this.state.pourcentage + "%"}</div>
          </div>

          {
            (this.state.end)? <button onClick={this.props.handleStart} className="btn btn-info btn-big bg-theme mt-2 col-md-4 font-weight-bold">Start</button>:null
          }
        </div>
    );
  }
}

export default Home;
