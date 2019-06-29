import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Contador extends Component {
  constructor(props){
    super(props);
    this.state ={
      contador :1
    }
  }
  render (){
    return (
      <div>
      <p>Contador : {this.state.contador}</p>
      <button onClick={()=>{
        this.setState({
          contador: this.state.contador +1
        })}}>Aumentar</button>
      <button onClick={()=>{
        if(this.state.contador==0){

        }else{
        this.setState({
          contador: this.state.contador -1
        })}}}>Disminuir</button>
      </div>
      
    )
  }
}

//let nombre = "Miguel Castro"
function A(props) {
  return <p> un dios {props.nombre} </p>
}

function B(props) {
  return <p> un dios {props.nombre} </p>
}

class MicomponenteClase extends Component {
  render() {
    return <p> un dios 2 </p>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
