import React from 'react';
import ReactDOM from 'react-dom';
import Android from './App.js';
import Car from './index2'
import Myform from './ReactForm'
import './App.css'




// Making Components
class WebD extends React.Component {
  // Props in the constructor
  constructor(props){
    super(props);  // Super Keyword is added to initialize constructor of parent class and inherit functions and accessing the parents components
      this.state = {color: "geeen"};  //In React Component Properties should be kept in an Object called state
  }
render() {
  return (<div>
    
  <p align = "center">backend is using{this.props.blang} <br/>I have Completed {this.props.tutpercent}% tutorials</p>
    <h2 align = "center">Hi, I'm a {this.state.color} Car </h2>
  </div>
          ) ;
    }   
}

class WebD2 extends React.Component{
  render(){

    const tutorialsWatchedinPercent = 80;
    return (
    <div align = "center">
      {/* please notice that we haven't used <WebD/> here seperately because it is autmatically called when we are calling the below line */}
      <WebD blang = "Node.js"  tutpercent={tutorialsWatchedinPercent}  /> 
      Frontend is Using {this.props.tp}
     
     {/* We have used  above(WebD) react elements here in(WebD2) */}
      
      <div align= "center">WebD2 is here</div>
    </div>
      
    )
  }
}

const myelement = <WebD2 tp = "HTML and JS"/>;

// Rendering Our Component to root div
ReactDOM.render(
  <div>
    {myelement}
    <Android/>
    <Car/>
    <Myform/>
    </div>,
    document.getElementById('root')
  );