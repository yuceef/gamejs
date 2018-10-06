import React, { Component } from 'react';
import Cell from './Cell'
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 25, score: 0, some:0, cells: Array(25).fill(null), selected: Array(25).fill(false) };
    }
    
    tick() {
        if(this.state.seconds>0 && this.state.score < 25000)
            this.setState(state => ({
                seconds: state.seconds - 1
            }));
        else
            this.props.gameOver(this.state.score)
    }
    
    calcul = (n,ind) => {
        this.state.selected[ind] = !this.state.selected[ind]
        if(this.state.some + n === 25){
            this.setState(state => ({
                some: 0
            }));
            for (let index = 0; index < this.state.selected.length; index++) {
                if(this.state.selected[index]){
                    this.state.selected[index] = !this.state.selected[index]
                    this.state.cells[index] = parseInt(Math.random()*8)+1;
                }
            }
            this.state.score += 25
            this.state.seconds += 5
        }
            
        else 
            this.setState(state => ({
                some: state.some + n
            }));        
    }
    componentWillMount() {
        for (let index = 0; index < this.state.cells.length; index++) {
            this.state.cells[index] = parseInt(Math.random()*8)+1;
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render(){
        return(
            <div className="col-md-6">
                <span className="float-left">Time {this.state.seconds}</span>
                <span className="float-right">Score {this.state.score}</span>
                
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <Cell val={this.state.cells[0]} selected={this.state.selected[0]} calcul={this.calcul} ind="0"/>
                            <Cell val={this.state.cells[1]} selected={this.state.selected[1]} calcul={this.calcul} ind="1"/>
                            <Cell val={this.state.cells[2]} selected={this.state.selected[2]} calcul={this.calcul} ind="2"/>
                            <Cell val={this.state.cells[3]} selected={this.state.selected[3]} calcul={this.calcul} ind="3"/>
                            <Cell val={this.state.cells[4]} selected={this.state.selected[4]} calcul={this.calcul} ind="4"/>
                        </tr>
                        <tr>
                            <Cell val={this.state.cells[5]} selected={this.state.selected[5]} calcul={this.calcul} ind="5"/>
                            <Cell val={this.state.cells[6]} selected={this.state.selected[6]} calcul={this.calcul} ind="6"/>
                            <Cell val={this.state.cells[7]} selected={this.state.selected[7]} calcul={this.calcul} ind="7"/>
                            <Cell val={this.state.cells[8]} selected={this.state.selected[8]} calcul={this.calcul} ind="8"/>
                            <Cell val={this.state.cells[9]} selected={this.state.selected[9]} calcul={this.calcul} ind="9"/>
                        </tr>
                        <tr>
                            <Cell val={this.state.cells[10]} selected={this.state.selected[10]} calcul={this.calcul} ind="10"/>
                            <Cell val={this.state.cells[11]} selected={this.state.selected[11]} calcul={this.calcul} ind="11"/>
                            <Cell val={this.state.cells[12]} selected={this.state.selected[12]} calcul={this.calcul} ind="12"/>
                            <Cell val={this.state.cells[13]} selected={this.state.selected[13]} calcul={this.calcul} ind="13"/>
                            <Cell val={this.state.cells[14]} selected={this.state.selected[14]} calcul={this.calcul} ind="14"/>
                        </tr>
                        <tr>
                            <Cell val={this.state.cells[15]} selected={this.state.selected[15]} calcul={this.calcul} ind="15"/>
                            <Cell val={this.state.cells[16]} selected={this.state.selected[16]} calcul={this.calcul} ind="16"/>
                            <Cell val={this.state.cells[17]} selected={this.state.selected[17]} calcul={this.calcul} ind="17"/>
                            <Cell val={this.state.cells[18]} selected={this.state.selected[18]} calcul={this.calcul} ind="18"/>
                            <Cell val={this.state.cells[19]} selected={this.state.selected[19]} calcul={this.calcul} ind="19"/>
                        </tr>
                        <tr>
                            <Cell val={this.state.cells[20]} selected={this.state.selected[20]} calcul={this.calcul} ind="20"/>
                            <Cell val={this.state.cells[21]} selected={this.state.selected[21]} calcul={this.calcul} ind="21"/>
                            <Cell val={this.state.cells[22]} selected={this.state.selected[22]} calcul={this.calcul} ind="22"/>
                            <Cell val={this.state.cells[23]} selected={this.state.selected[23]} calcul={this.calcul} ind="23"/>
                            <Cell val={this.state.cells[24]} selected={this.state.selected[24]} calcul={this.calcul} ind="24"/>
                        </tr>
                        
                    </tbody>
                   
                </table>
            </div>
        )
    }
}
export default Game;
