import React, { Component } from 'react';
class Cell extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = { style: {} };
    }
    componentDidUpdate() {
        if(this.props.selected){
            this.state.style = {
                    background: "white",
                    color: "#33373e"
                }
            
        }
        else{
            this.state. style = {
                    background: "rgba(255,255,255,.05)",
                    color: "white"
                }
        }
    }
    handleClick = () => {
        if(!this.props.selected){
            this.setState(state => ({
                style: {
                    background: "white",
                    color: "#33373e"
                }
            }));
            this.props.calcul(this.props.val,this.props.ind)
        }
        else{
            this.setState(state => ({
                style: {
                    background: "rgba(255,255,255,.05)",
                    color: "white"
                }
            }));
            this.props.calcul(this.props.val * -1,this.props.ind)
        }

    }
    handleChange = () => {
        if(!this.props.selected){
            this.setState(state => ({
                style: {
                    background: "white",
                    color: "#33373e"
                }
            }));
        }
        else{
            this.setState(state => ({
                style: {
                    background: "rgba(255,255,255,.05)",
                    color: "white"
                }
            }));
        }

    }
    render(){

        return(
            <td  onClick={this.handleClick} style={this.state.style}>{this.props.val}</td>
        )
    }
}
export default Cell;